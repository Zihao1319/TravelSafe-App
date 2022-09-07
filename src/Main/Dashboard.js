import { useUserContext } from "../userContext";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { randomSelect } from "../utils/utils";
import {
  get,
  getDatabase,
  ref as refDatabase,
  onValue,
  update,
  set,
  onChildAdded,
  onChildRemoved,
  remove,
} from "firebase/database";

import {
  getStorage,
  ref as refStorage,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import FileDisplay from "./FileDisplay";
import ErrorDisplay from "./ErrorDisplay";

const Dashboard = () => {
  const { user } = useUserContext();
  const [file, setFile] = useState({ file: "", text: "", ts: "" });
  // const [post, setPost] = useState([]);
  const [post, setPost] = useState([user.file]);
  const [isUpdated, setUpdate] = useState();
  const [isDeleted, setDelete] = useState(false);

  console.log(user.file)

  const placeholderList = [
    "Vaccination records",
    "Air ticket",
    "IC",
    "Passport",
    "Accomodation proofs",
    "Train ticket",
    "Insurance",
  ];

  const placeholder = placeholderList[randomSelect(placeholderList)];
  const database = getDatabase();
  const ts = new Date().toUTCString();

  const handleFileChange = (e) => {
    setFile((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.files[0],
    }));
  };

  const handleTextChange = (e) => {
    setFile((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const filePath = file.file;

    if (filePath) {
      console.log("start of upload");
      // storing the file into firebase storage
      const storage = getStorage();

      // need time stamp so as to get individual files
      const fileRef = refStorage(storage, `userDocsFolder/${user.uid}/${ts}`);

      await uploadBytes(fileRef, filePath);
      const fileDownloadUrl = await getDownloadURL(fileRef);

      // updating the download url and text info on realtime database
      const userFileRef = refDatabase(
        database,
        `userDocs/ ${user.uid} / ${ts}`
      );

      const newUserFileInfo = {
        docUrl: fileDownloadUrl,
        text: file.text,
        ts: `${ts}`,
      };

      set(userFileRef, newUserFileInfo);
      setUpdate(newUserFileInfo);
    }
    setFile({ file: "", text: "", ts: "" })
  };

  // const fetchPost = () => {
  //   const userFileRef = refDatabase(database, `userDocs/ ${user.uid} `);
  //   onChildAdded(userFileRef, (data) => {
      
  //     if (data.exists()) {

  //       console.log("folder exists")
  //       const userFile = data.val();
  //       const userInfo = Object.values(userFile);
  //       console.log(userInfo);

  //       if (isUpdated) {
  //         console.log("append to last post");
  //         setPost((prev) => [
  //           ...prev,
  //           {
  //             docUrl: userInfo.docUrl,
  //             text: userInfo.text,
  //             ts: userInfo.ts,
  //           },
  //         ]);
  //         setUpdate("");
  //       }
  //     } else {
  //       console.log("data is empty")
  //       return setPost("")
  //     }
  //   });
  // };


  const handleDeleteFile = (data) => {
    console.log("delete button pressed");
    const timeStamp = data.ts;
    const userFileRef = refDatabase(
      database,
      `userDocs/ ${user.uid} / ${timeStamp}`
    );
    remove(userFileRef);
    setDelete(true);
  };


  useEffect(() => {

    if (isUpdated) {
      console.log("isUpdated");
      setUpdate ("")
      return setPost(user.file)
    }

    if (isDeleted) {
      console.log("isDeleted")
      setDelete (false)
      return setPost(user.file)
    }

    //when the user first login and it has existing data
    console.log("extracted from database");
    return setPost(user.file);

  }, [isUpdated, isDeleted]);

  console.log(post)
  console.log(file)
  console.log("delete?" + isDeleted)

  return (
    <>
      <Box
        justifyContent="center"
        alignItems="center"
        display="flex"
        component="form"
        sx={{ display: "flex", flexDirection: "column", m: 5, mx: "auto" }}
      >
        <Typography variant="h5" sx={{ p: 2 }}>
          All your travel needs in one place
        </Typography>
        <Input type="file" name="file" onChange={handleFileChange} />
        <TextField
          margin="normal"
          required
          id="text"
          label="What's this?"
          placeholder={placeholder}
          name="text"
          autoFocus
          onChange={handleTextChange}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleFileUpload}
        >
          Upload
        </Button>
      </Box>
      {post ? (
        post.map((data, i) => {
          return (
            <div key={i}>
              <FileDisplay data={data} delete={() => handleDeleteFile(data)} />
            </div>
          );
        })
      ) : (
        <ErrorDisplay />
      )}
    </>
  );
};

export default Dashboard;

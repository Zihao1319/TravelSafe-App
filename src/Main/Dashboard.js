import { useUserContext } from "../userContext";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import Grid from "@mui/material/Grid";

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
import { NoFileDisplay } from "./ErrorDisplay";
import { PointOfSaleTwoTone } from "@mui/icons-material";

const Dashboard = () => {
  const { user, setUser } = useUserContext();
  const [file, setFile] = useState({ file: "", text: "", ts: "" });
  const [post, setPost] = useState([]);
  const [isUpdated, setUpdate] = useState();
  const [isDeleted, setDelete] = useState(false);
  const [alert, setAlert] = useState(false);

  console.log(post);
  console.log(user);

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
      // setUpdate(newUserFileInfo);
      setAlert(true);

      // if (!user.file) {
      //   console.log("just set");
      //   setUser((prev) => ({
      //     ...prev,
      //     file: [newUserFileInfo],
      //   }));
      // }
    }
    setFile({ file: "", text: "", ts: "" });
  };

  const handleDeleteFile = (data) => {
    console.log("delete button pressed");
    const timeStamp = data.ts;
    const userFileRef = refDatabase(
      database,
      `userDocs/ ${user.uid} / ${timeStamp}`
    );
    remove(userFileRef);
    setDelete(true);
    // setAlert(true);
  };

  useEffect(() => {
    if (alert) {
      console.log("alert");
      const userFileRef = refDatabase(database, `userDocs/ ${user.uid} `);
      console.log(userFileRef);

      onValue(userFileRef, (snapshot) => {
        if (snapshot.exists()) {
          console.log("exists");
          const userFile = snapshot.val();
          // console.log(Object.values(userFile));
          const userFileObj = Object.values(userFile);
          // console.log(userFileObj);
          setUser((prev) => ({
            ...prev,
            file: userFileObj,
          }));
          setPost(userFileObj);
          // console.log(post);
          setAlert(false);
          return;
        }
        console.log("doesnt exist");
        setUser((prev) => ({
          ...prev,
          file: "",
        }));
      });
    }
    if (isDeleted) {
      console.log("isDeleted");
      setDelete(false);

      return setPost(user.file);
    } else {
      return setPost(user.file);
    }
  }, [alert, isDeleted, file]);

  // useEffect(() => {
  //   if (isUpdated) {
  //     console.log("isUpdated");
  //     setUpdate("");
  //     return setPost(user.file);
  //   }

  //   if (isDeleted) {
  //     console.log("isDeleted");
  //     setDelete(false);
  //     return setPost(user.file);
  //   }

  //   //when the user first login and it has existing data
  //   console.log("extracted from database");
  //   return setPost(user.file);
  // }, [isUpdated, isDeleted]);

  console.log(post);
  // console.log(file);
  // console.log("delete?" + isDeleted);

  return (
    <>
      <Box
        justifyContent="center"
        alignItems="center"
        display="column"
        component="form"
        sx={{ display: "flex", flexDirection: "column", m: 4, mx: "auto" }}
      >
        <Typography variant="h5" sx={{ p: 2 }}>
          Store your essential docs here
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

        {/* <Box container alignItems="center" justifyContent="center"> */}

        {post ? (
          post.map((data, i) => {
            return (
              <div key={i}>
                <FileDisplay
                  data={data}
                  delete={() => handleDeleteFile(data)}
                />
              </div>
            );
          })
        ) : (
          <NoFileDisplay />
        )}
      </Box>
    </>
  );
};

export default Dashboard;

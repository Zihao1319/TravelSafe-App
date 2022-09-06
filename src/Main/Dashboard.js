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
  const [post, setPost] = useState([]);
  const [isUpdated, setUpdate] = useState("");
  const [isDeleted, setDelete] = useState(null);

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
      console.log(filePath);
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
      // setFile (newUserFileInfo)
      // setPost((prev) => [
      //   ...prev,
      //   newUserFileInfo
      // ])};
      setUpdate(newUserFileInfo);
    }
    setFile("");
  };

  const fetchPost = () => {
    const userFileRef = refDatabase(database, `userDocs/ ${user.uid} `);
    onChildAdded(userFileRef, (data) => {
      const userFile = data.val();
      const userInfo = Object.values(userFile);
      console.log(userInfo);

      // if there is no existing post on file
      // if (!post) {
      //   console.log("first post");
      //   setPost([
      //     {
      //       docUrl: userInfo.docUrl,
      //       text: userInfo.text,
      //       ts: userInfo.ts,
      //     },
      //   ]);

      //   // if there is already existing post on file
      // } else {
      console.log("append to last post");
      setPost((prev) => [
        ...prev,
        {
          docUrl: userInfo.docUrl,
          text: userInfo.text,
          ts: userInfo.ts,
        },
      ]);
    });
    setUpdate("");
  };

  const handleDeleteFile = (data) => {
    console.log("delete button pressed");
    console.log(data);
    const timeStamp = data.ts;
    // console.log(imgURL, description);
    // const storage = getStorage();
    // const fileRef = refStorage(storage, `userDocsFolder/${user.uid}/${ts}`);
    // remove (fileRef)
    console.log(post);
    const userFileRef = refDatabase(
      database,
      `userDocs/ ${user.uid} / ${timeStamp}`
    );
    console.log(userFileRef);
    remove(userFileRef);
    setDelete(true);
  };

  console.log(isDeleted);

  useEffect(() => {
    if (isDeleted === true) {
      console.log("isDeleted");
      return fetchPost();
    }
  }, [setDelete]);

  useEffect(() => {
    // if there is no existing post yet from database
    if (!post) {
      console.log("!post");
      return setPost([isUpdated]);
    }

    //if a new file has been uploaded
    if (isUpdated) {
      console.log("isUpdated");
      return fetchPost();
    }

    //when the user first login and it has existing data
    console.log("extracted from database");
    return setPost(user.file);

    // if (!isNewPost) {
    //   console.log("from database");
    //   console.log(post);
    //   return setPost(user.file);
    // } else {
    //   console.log("just uploaded");
    //   fetchPost();
    //   console.log(post);
    // }
  }, [isUpdated]);

  // console.log(post);

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

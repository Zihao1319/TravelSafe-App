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
} from "firebase/database";

import {
  getStorage,
  ref as refStorage,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import FileDisplay from "./FileDisplay";
import { cp } from "fs";

const Dashboard = () => {
  const { user } = useUserContext();
  const [file, setFile] = useState({ file: "", text: "", ts: "" });
  const [post, setPost] = useState(user.file);

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
      // console.log(ts)

      // need time stamp so as to get individual files
      const fileRef = refStorage(storage, `userDocsFolder/${user.uid}/${ts}`);

      await uploadBytes(fileRef, filePath);
      const fileDownloadUrl = await getDownloadURL(fileRef);

      // updating the download url and text info on realtime database
      const userFileRef = refDatabase(
        database,
        `userDocs/ ${user.uid} / ${ts}`
      );
      set(userFileRef, {
        docUrl: fileDownloadUrl,
        text: file.text,
        ts: `${ts}`,
      });
    }
  };

  // useEffect(() => {
  //   const userFileRef = refDatabase(database, `userDocs/ ${user.uid} `);
  //   onValue(userFileRef, (snapshot) => {
  //     const userFile = snapshot.val();
  //     const userInfo = Object.values(userFile);

  //     if (userFile) {
  //       setPost((prev) => [
  //         ...prev,
  //         {
  //           docUrl: userInfo.docUrl,
  //           text: userInfo.text,
  //           ts: userInfo.ts,
  //         },
  //       ]);
  //     } else {
  //       setPost({
  //         docUrl: userInfo.docUrl,
  //         text: userInfo.text,
  //         ts: userInfo.ts,
  //       });
  //     }
  //   });
  //   console.log(post);
  // }, []);

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
      {post &&
        post.map((data, i) => {
          return (
            <div key={i}>
              <FileDisplay data={data} />
            </div>
          );
        })}
    </>
  );
};

export default Dashboard;

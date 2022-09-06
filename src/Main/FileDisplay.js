import { useUserContext } from "../userContext";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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

const FileDisplay = (props) => {
  const imgURL = props.data.docUrl;
  const description = props.data.text;
  const timeStamp = props.data.ts;
  // const { user } = useUserContext();
  // const database = getDatabase();

  // const delete = (event) => {
  //   props.delete;
  // console.log("delete button pressed")
  // console.log(imgURL, description)
  // const storage = getStorage();
  // const fileRef = refStorage(storage, `userDocsFolder/${user.uid}/${timeStamp}`);
  // // remove (fileRef)

  // const userFileRef = refDatabase(
  //   database,
  //   `userDocs/ ${user.uid} / ${timeStamp}`
  // );
  // remove (userFileRef)

  // const handleDeleteFile = () => {
  //   console.log("delete button pressed");
  //   // console.log(imgURL, description);
  //   // const storage = getStorage();
  //   // const fileRef = refStorage(storage, `userDocsFolder/${user.uid}/${ts}`);
  //   // remove (fileRef)
  //   const userFileRef = refDatabase(
  //     database,
  //     `userDocsFolder/${user.uid}/${timeStamp}`
  //   );
  //   console.log(userFileRef);
  //   remove(userFileRef);
  // };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imgURL}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {timeStamp}
        </Typography>
        <Typography variant="body1" color="text.secondary"></Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.delete}>
          {/* <Button size="small" onClick={handleDeleteFile}> */}
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default FileDisplay;

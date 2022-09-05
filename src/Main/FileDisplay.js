import { useUserContext } from "../userContext";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const FileDisplay = (props) => {
  const imgURL = props.data.docUrl;
  //   console.log(imgURL);
  const description = props.data.text;
  const timeStamp = props.data.ts;

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
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
};

export default FileDisplay;

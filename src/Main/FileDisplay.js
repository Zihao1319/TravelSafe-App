import { useUserContext } from "../userContext";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const FileDisplay = (props) => {
  const url = props.data.docUrl;
  const description = props.data.text;
  const timeStamp = props.data.ts;

  // for AlertDialog()
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {timeStamp}
        </Typography>
        <a href = {url} target = "_blank" rel = "noopener">Download here</a>
      </CardContent>
      <CardActions>
        <Button variant="filled" onClick={handleClickOpen} sx={{color: 'red'}}>
          Delete
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        > 
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Once it is deleted, you will not be able to retrieve it back
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {props.delete(); handleClickClose()}} sx={{color: 'red'}} autoFocus>
            Delete
          </Button>
        </DialogActions>
        </Dialog>

{/* 
        <Button size="small" onClick={props.delete} sx={{color: 'red'}}>
          Delete
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default FileDisplay;

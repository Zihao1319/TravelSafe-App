import React, { useState } from "react";
import { useUserContext } from "../userContext";
import {
  get,
  getDatabase,
  ref as refDatabase,
  onValue,
  update,
  set,
  setValue
} from "firebase/database";
import {
  getStorage,
  ref as refStorage,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const Profile = () => {
  const { user, setUser } = useUserContext();
  const [imgFile, setImgFile] = useState({
    file: undefined,
  });

  //   const auth = getAuth();
  //   const userInfo = auth.currentUser;

  //   console.log(userInfo);
  //   console.log(user);

  //   const photo = user.photoURL;
  //   const firstName = user.firstName;
  //   const lastName = user.lastName;
  //   const email = user.email;

  const handleImgChange = async (e) => {
    // e.preventDefault();
    const filePath = e.target.files[0];
    // const isImg = e.target.files[0]["type"].split("/")[0] === "image";
    // console.log(isImg)
    setImgFile({ file: filePath });
    const storage = getStorage();
    const fileRef = refStorage(storage, `userPictureFolder/${user.uid}`);
    console.log(imgFile.file);

    await uploadBytes(fileRef, imgFile.file);
    const imgDownloadUrl = await getDownloadURL(fileRef);
    console.log(imgFile, imgDownloadUrl);


    // setUser ((prev) => ({...prev}, {photo: imgDownloadUrl}))
    console.log(user)

    const database = getDatabase();
    const userRef = refDatabase(database, `userInfo/${user.uid}/photoURL`);
    console.log(userRef)
    update(userRef, {imgDownloadUrl})

    // console.log(photoRef)

  };

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      sx={{ display: "flex", flexDirection: "column", m: 5, mx: "auto" }}
    >
      <Typography variant="h4" sx={{ p: 2 }}>
        Hello! {user.firstName} {user.lastName}
      </Typography>
      <Avatar
        alt="Say cheese!"
        src={user.photo ? user.photo : "/broken-image.jpg"}
        sx={{ width: 100, height: 100 }}
      />
      <Button size="small" sx={{ mx: "auto" }} component="label">
        <input
          type="file"
          hidden
          accept="image/*"
          name="image"
          onClick={handleImgChange}
        />
        Change profile picture
      </Button>
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">
          {firstName} {lastName}
        </Typography> */}
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Search history</Button>
      </CardActions>
    </Box>

    // <Card sx={{ maxWidth: 345 }}>
    //   {photo ? (
    //     <Avatar alt="Remy Sharp" src={photo} sx={{ width: 56, height: 56 }} />
    //   ) : (
    //     <Avatar src="/broken-image.jpg" sx={{ width: 56, height: 56 }} />
    //   )}

    // </Card>
  );
};

export default Profile;

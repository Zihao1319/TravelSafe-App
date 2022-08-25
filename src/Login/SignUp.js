import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   updateProfile,
// } from "firebase/storage";
import { auth } from "../firebase";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { push, getDatabase, ref as refDatabase, set } from "firebase/database";
import { getStorage, ref as refStorage, uploadBytes } from "firebase/storage";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../userContext";
import Input from '@mui/material/Input';
// import ButtonBase from "@material-ui/core/ButtonBase";


const SignUp = () => {
  const USER_LIST_FOLDER = "userInfo";

  const { setUser } = useUserContext();

  const [form, setForm] = useState({
    email: "",
    password: "",
    imgURL: {file: undefined},
  });

  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const handleImgChange = (e) => {
    setForm((prev) => ({
      ...prev, 
      [e.target.name] : {file: e.target.files[0]}

    }))
    console.log(form)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const auth = getAuth();
    const database = getDatabase();
    const storage = getStorage()

    console.log(form.email, form.password);

    // creating account with email and password
    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);

      // saving the user data into realtime database
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const newUserInfo = {
            firstName: form.firstName,
            lastName: form.lastName,
            ID: user.uid,
            email: form.email,
          };
          const userListRef = refDatabase(database, USER_LIST_FOLDER);
          const newUserRef = push(userListRef);
          set(newUserRef, newUserInfo);

          // setting the display name
          const displayName = form.firstName;
          await updateProfile(auth.currentUser, {
            displayName: displayName,
          });
          setUser({ userName: displayName, uid: user.uid });
          console.log(user, "signed up success!");
        }
      });

      // await updateProfile(auth.currentUser, { displayName: form.firstName });
      console.log("set displayName success");
      navigate("/");
    } catch (err) {
      console.log(err);
      console.log(err.message);
    }
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
           
            <Grid item xs={12}>
            <TextField
              variant="standard"
              InputProps={{ disableUnderline: true }}
              margin="normal"
              label="Profile picture:"
              fullWidth
              disabled
            />
                <Input
                  required
                  accept = "image/*"
                  type= "file"
                  fullWidth
                  id="image"
                  name="image"
                  hidden
                  onChange={handleImgChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleTextChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleTextChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleTextChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleTextChange}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="./" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;

import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { PropaneRounded, PropaneSharp } from "@mui/icons-material";
import { useUserContext } from "../userContext";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import {
  get,
  getDatabase,
  ref as refDatabase,
  onValue,
  child,
} from "firebase/database";
import * as yup from "yup";

const Login = () => {
  const { setUser } = useUserContext();
  const [err, setErr] = useState(false);
  const theme = createTheme();
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(6, "Password should be of minimum 6 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { email, password } = values;
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        const database = getDatabase();

        //getting all the data from refDatabase and load them as state
        if (user) {
          const userRef = refDatabase(database, `userInfo/ ${user.user.uid}`);
          onValue(userRef, (snapshot) => {
            console.log(snapshot);
            const userData = snapshot.val();
            console.log(userData);

            setUser((prev) => ({
              ...prev,
              email: userData.email,
              file: userData.file,
              firstName: userData.firstName,
              lastName: userData.lastName,
              photoURL: userData.photoURL,
              uid: user.user.uid,
            }));
          });

          // getting the user docs
          const userFileRef = refDatabase(
            database,
            `userDocs/ ${user.user.uid} `
          );
          console.log(userFileRef);
          onValue(userFileRef, (snapshot) => {
            if (snapshot.exists()) {
              const userFile = snapshot.val();
              console.log(Object.values(userFile));
              setUser((prev) => ({
                ...prev,
                file: Object.values(userFile),
              }));
            } else {
              console.log("doesnt exist");
              setUser((prev) => ({
                ...prev,
                file: "",
              }));
            }
          });
          console.log(user);
          navigate("/");
          console.log("Login successful");
        }
      } catch (err) {
        console.log(err.message);
        setErr({
          firebaseErrorMessage: err.message,
        });
      }
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>

              <Box
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  onChange={formik.handleChange}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formik.values.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  onChange={formik.handleChange}
                  helperText={formik.touched.password && formik.errors.password}
                />

                {err.firebaseErrorMessage && <p>{err.firebaseErrorMessage}</p>}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs></Grid>
                  <Grid item>
                    <Link href="./SignUp" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Login;

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
import * as yup from "yup";

const Login = () => {
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const [err, setErr] = useState(false);

  // const [form, setForm] = useState({ email: "", password: "" });

  // const handleTextChange = (e) => {
  //   setForm((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

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

  // const validate = (values) => {
  //   const errors = {};

  //   if (!values.country) {
  //     errors.country = "Please choose a destination";
  //   }

  //   return errors;
  // };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { email, password } = values;
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);

        if (user) {
          console.log("Login successful");
          console.log(user);
          setUser({ userName: user.user.displayName, uid: user.user.uid });
          // localStorage.setItems("user", user.user.email);
          navigate("/");
        }
      } catch (err) {
        console.log(err.message);
        setErr({
          firebaseErrorMessage: err.message,
        });
        // setStatus({ firebaseErrorMessage: error.message });
      }
    },
  });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // const auth = getAuth();
  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       auth,
  //       form.email,
  //       form.password

  //     ).then((response) => {
  //       console.log("Login successful");
  //     });

  //     if (user) {
  //       setUser(user);
  //       localStorage.setItems("user", user.user.email);
  //       navigate("/");
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  const theme = createTheme();

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
                {/* <ErrorMessage /> */}

                {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                /> */}
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
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="./SignUp" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                {/* <Copyright sx={{ mt: 5 }} /> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Login;

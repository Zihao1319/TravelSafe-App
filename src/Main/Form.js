import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import countryCodes from "./CountryCode";
import SelectCountry from "./SelectCountry";
import DisplayInfo from "./DisplayInfo";
import { ErrorDisplay } from "./ErrorDisplay";
import { useUserContext } from "../userContext";
import { push, getDatabase, ref as refDatabase, set } from "firebase/database";
import { randomSelect } from "../utils/utils";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const options = countryCodes;

const reqToken = {
  method: "POST",
  url: "https://test.api.amadeus.com/v1/security/oauth2/token",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  data: new URLSearchParams({
    grant_type: "client_credentials",
    client_id: "X79WXAh7RmvvERgqxpN4WP7lwvnytvYD",
    client_secret: "yGNGyhQAFU2P67lc",
  }),
};

// const randomSelect = (arr) => {
//   let num = Math.floor(Math.random() * arr.length);
//   return num;
// };

const TravelForm = () => {
  const { user } = useUserContext();
  console.log(user);

  const userName = user.firstName;
  const userID = user.uid;
  console.log(userName, userID);

  const [destination, setDestination] = useState("");
  const [token, setToken] = useState(null);
  const [randomCountry, setRandomCountry] = useState();
  const [info, setInfo] = useState("");

  const validate = (values) => {
    const errors = {};

    if (!values.country) {
      errors.country = "Please choose a destination";
    }

    return errors;
  };

  // console.log(options[randomSelection].label);

  const formik = useFormik({
    initialValues: { country: "" },
    validate,
    onSubmit: (values) => {
      console.log(values.country);
      setDestination(values.country);
      console.log(destination);
    },
  });

  useEffect(() => {
    const randomCountry = options[randomSelect(options)].label;
    setRandomCountry(randomCountry);

    const fetchToken = async () => {
      await axios.request(reqToken).then((res) => {
        console.log(res.data.access_token);
        setToken(res.data.access_token);
        // console.log(res.data.access_token)
      });
    };
    fetchToken().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        method: "GET",
        // url: `https://test.api.amadeus.com/v1/reference-data/airlines?airlineCodes=${destination}`,
        url: `https://test.api.amadeus.com/v2/duty-of-care/diseases/covid19-area-report?countryCode=${destination}`,
        headers: { Authorization: await `Bearer ${token}` },
      };

      axios.request(data).then((res) => {
        console.log(token, res.data.data);
        const data = res.data.data;
        setInfo(data);
      });
    };

    if (destination) {
      fetchData().catch(console.error);
    }
  }, [destination]);

  // console.log(SingaporeData);

  const isEmpty = Object.keys(info).length === 0;
  // console.log(info, isNotValid);
  // console.log(info, typeof info, isEmpty);

  // const saveData = () => {
  //   const newData = {
  //     country: info.area.name,
  //     info: JSON.stringify(info),
  //     timeStamp: Date.now(),
  //   };

  //   console.log(newData);

  //   const database = getDatabase();
  //   const DATA_STORAGE = `dataStorage/${user.uid}`;

  //   try {
  //     const dataStorageRef = refDatabase(database, DATA_STORAGE);
  //     const newDataRef = push(dataStorageRef);
  //     set(newDataRef, newData);
  //     console.log("data saved successfully");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <Stack
        spacing={2}
        sx={{ display: "flex", flexDirection: "column", m: 5, mx: 5 }}
      >
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          alignItems="center"
        >
          <Typography component="h3" variant="h6">
            Hello {userName ? userName : ""}, where do you want to go next?
          </Typography>
        </Box>
        {/* <label htmlFor="country">
          Hello {userName ? userName : ""}, where would you love to go?
        </label> */}

        <SelectCountry
          placeholder={randomCountry}
          options={options}
          value={formik.values.country}
          onChange={(value) => formik.setFieldValue("country", value.value)}
          className={"input"}
        />
        {formik.errors.country ? (
          <div className="error">{formik.errors.country}</div>
        ) : null}
        <Button type="submit" variant="contained" onClick={formik.handleSubmit}>
          Submit
        </Button>

        {!isEmpty ? <DisplayInfo data={info} /> : <ErrorDisplay />}
      </Stack>
    </>
  );
};

export default TravelForm;

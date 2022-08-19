import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import countryCodes from "./CountryCode";
import SelectCountry from "./SelectCountry";
import DisplayInfo from "./DisplayInfo";
import SingaporeData from "../testdata";

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

const randomSelect = (arr) => {
  let num = Math.floor(Math.random() * arr.length);
  return num;
};

const TravelForm = () => {
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
        console.log(token, res.data.data)
        const data = res.data.data
        setInfo (data)
        // const parsedData = data.json()
        // const data = JSON.stringify(res.data.data);
        // setInfo(data)
        // console.log(token, info);
      });
    };

    fetchData().catch(console.error);
    
  },[destination]);



  // console.log(SingaporeData);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="country">Where would you love to go?</label>

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
        <button type="submit">Submit</button>
      </form>
      <DisplayInfo data={info} />
    </>
  );
};

export default TravelForm;

import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import countryCodes from "./CountryCode";
import SelectCountry from "./SelectCountry";
const options = countryCodes;

const reqToken = {
  method: "POST",
  url: "https://test.api.amadeus.com/v1/security/oauth2/token",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  data: new URLSearchParams({
    grant_type: "client_credentials",
    client_id: "06FugX4zldyFcrieWkOxT1siu5kKLJY4",
    client_secret: "9r0RzGdbq94Mvkrw",
  }),
};

const TravelForm = () => {
  const [destination, setDestination] = useState("");
  const [token, setToken] = useState(null);
  const [info, setInfo] = useState();

  const validate = (values) => {
    const errors = {};

    if (!values.country) {
      errors.country = "Please choose a destination";
    }

    return errors;
  };
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
        url: `https://test.api.amadeus.com/v1/reference-data/airlines?airlineCodes=${destination}`,
        // url: `https://test.api.amadeus.com/v2/duty-of-care/diseases/covid19-area-report?countryCode=${destination}`,
        headers: { Authorization: await `Bearer ${token}` },
      };

      axios.request(data).then((res) => {
        console.log(token, res);
      });
    };

    fetchData().catch(console.error);
  }, [destination]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="country">Where would you love to go?</label>

      <SelectCountry
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
  );
};

export default TravelForm;

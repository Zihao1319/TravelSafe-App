import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";

const TravelForm = () => {
  const [destination, setDestination] = useState("");
  const [token, setToken] = useState("");

  const formik = useFormik({
    initialValues: { country: "" },
    onSubmit: (values) => {
      setDestination(values);
      console.log(destination);
    },
  });

  const options = {
    method: "POST",
    url: "https://test.api.amadeus.com/v1/security/oauth2/token",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: "06FugX4zldyFcrieWkOxT1siu5kKLJY4",
      client_secret: "9r0RzGdbq94Mvkrw",
    }),
  };

  useEffect(() => {
    axios.request(options).then((res) => {
      setToken(res.data.access_token);
      console.log(res.data.access_token);
    });
  }, []);

  useEffect(() => {
    console.log(destination.country);
    const data = {
      method: "GET",
      url: `https://test.api.amadeus.com/v1/reference-data/airlines?airlineCodes=${destination.country}`,
      //   url: `https://test.api.amadeus.com/v2/duty-of-care/diseases/covid19-area-report?countryCode=${destination.country}`,
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .request(data)
      .then((res) => {
        console.log(res);
        // console.log(token)
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  //   useEffect(() => {
  //     axios
  //       .request(options)
  //       .then((res) => {
  //         setToken(res.data.access_token);
  //         console.log(res.data.access_token);

  //         const data = {
  //           method: "GET",
  //           url: `https://test.api.amadeus.com/v1/reference-data/airlines?airlineCodes=${destination}`,
  //           // url: "https://test.api.amadeus.com/v2/duty-of-care/diseases/covid19-area-report?countryCode=US",
  //           headers: { Authorization: `Bearer ${token}` },
  //         };

  //         axios
  //           .request(data)
  //           .then((res) => {
  //             console.log(res.data);
  //             // console.log(token)
  //           })
  //           .catch((err) => {
  //             console.log(err.response.data);
  //           });
  //       })
  //       .catch((err) => {
  //         return err.message;
  //       });
  //   }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="country">Destination:</label>
      <input
        id="country"
        name="country"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.country}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TravelForm;

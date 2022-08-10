import { accordionSummaryClasses } from "@mui/material";
import Amadeus from "amadeus";
import axios from "axios";
import { getIdToken } from "firebase/auth";
import React, { useState, useEffect } from "react";

const TravelCheck = () => {
  const [token, setToken] = useState("");

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

  // getting access token
  useEffect(() => {
    axios
      .request(options)
      .then((res) => {
        setToken(res.data.access_token);
        console.log(res.data.access_token);

        const data = {
          method: "GET",
          url: "https://test.api.amadeus.com/v1/reference-data/airlines?airlineCodes=AA",
          // url: "https://test.api.amadeus.com/v2/duty-of-care/diseases/covid19-area-report?countryCode=US",
          headers: { Authorization: `Bearer ${token}` },
        };

        axios
          .request(data)
          .then((res) => {
            console.log(res.data);
            // console.log(token)
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      })
      .catch((err) => {
        return err.message;
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .request(options)
  //     .then((res) => res.data.access_token)
  //     .then((token) => {
  //       axios.request({
  //         method: "GET",
  //         url: "https://test.api.amadeus.com/v1/reference-data/airlines?airlineCodes=AA",
  //         // url: "https://test.api.amadeus.com/v2/duty-of-care/diseases/covid19-area-report?countryCode=US",
  //         headers: { Authorization: `Bearer ${token}` },
  //       });
  //       console.log(token);
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       // console.log(token)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return <>Hello World</>;
};

export default TravelCheck;

// handleSubmit = (event) => {
//   event.preventDefault();
//   axios
//     .get(
//       `https://api.openweathermap.org/geo/1.0/direct?q=${this.state.cityInputValue}&limit=1&appid=${OPEN_WEATHER_API_KEY}`
//     )
//     // City geo data is in response.data[0]
//     // Arrow functions with no curly braces return value after arrow
//     .then((response) => response.data[0])
//     .then((cityGeoData) =>
//       axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?lat=${cityGeoData.lat}&lon=${cityGeoData.lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
//       )
//     )
//     .then((response) => {
//       const { data: weatherData } = response;
//       console.log(weatherData);
//     });
// };

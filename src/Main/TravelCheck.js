import { accordionSummaryClasses } from "@mui/material";
import Amadeus from "amadeus";
import axios from "axios";
import React, { useState, useEffect } from 'react';


// const amadeus = new Amadeus({
//   clientId: "06FugX4zldyFcrieWkOxT1siu5kKLJY4",
//   clientSecret: "9r0RzGdbq94Mvkrw",
// });

// const countryData = {
//   method: "GET",
//   url: "https://test.api.amadeus.com/v2/duty-of-care/diseases/covid19-area-report",
//   headers : {"Authorization": "Bearer ${}}
// }


// function getAccessToken (options) {
// axios.request (options)
// .then ((res) => {
//   console.log(res.data.access_token)
//   return res.data.access_token
// }).catch ((err) => {
//   return err.message
// })
// }


const TravelCheck =  () => {

  const [token, setToken] = useState ("")
 
  const options = {
    method: "POST",
    url: "https://test.api.amadeus.com/v1/security/oauth2/token",
    headers: {"content-type": "application/x-www-form-urlencoded"},
    data : new URLSearchParams ({
      grant_type: "client_credentials",
      client_id: "06FugX4zldyFcrieWkOxT1siu5kKLJY4",
      client_secret: "9r0RzGdbq94Mvkrw",
    })
  }

  // getting access token

  useEffect (() => {
    axios.request (options)
    .then ((res) => {
      setToken (res.data.access_token)
      console.log(res.data.access_token)

        const data = {
            method: "GET",
            url: "https://test.api.amadeus.com/v1/reference-data/airlines?airlineCodes=AA",
            headers : {"Authorization": `Bearer ${token}`}
          }
        
          axios.request (data)
          .then ((res) => {
            console.log(res.data)
            // console.log(token)
          })
          .catch ((err) => {
            console.log(err.response.data)
          })
      

    
    }).catch ((err) => {
      return err.message
    })

  }, [])
  
  
  // useEffect (() => {

  //   const newToken = getAccessToken (options)
  //   console.log(newToken)

  //   if (newToken)

  //   const [token, setToken] = useState ()

  //   useEffect (() => {

  //   })

    // const newToken = getAccessToken ()
    // console.log(newToken)

    
    // const newToken = getAccessToken()
    // setAccessToken (newToken)
    // console.log(accessToken)
  //   axios.request (options)
  // .then (
  //   (res) => {
  //     console.log(res.data);
  //     setAccessToken (res.data.access_token)
  //     console.log(res.data.access_token)
    // const data = {
    //   method: "GET",
    //   url: "https://test.api.amadeus.com/v2/duty-of-care/diseases/covid19-area-report?countryCode=GB&language=EN",
    //   headers : {"Authorization": `Bearer ${res.data.access_token}`}
    // }
  
  // }, [])
    // axios.request (data)
    // .then ((res) => {
    //   console.log(res.data)
    // })
    // .catch ((err) => {
    //   console.log(err.response.data)
    // })
    

    // amadeus.dutyOfCare.diseases.covid19AreaReport
    // .get({
    //   countryCode: "US",
    // })
    // .then((data) => {
    //   console.log(data.body);
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
  

  // amadeus.dutyOfCare.diseases.covid19AreaReport
  //   .get({
  //     countryCode: "US",
  //   })
  //   .then((data) => {
  //     console.log(data.body);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  return <>
  Hello World
  </>;
};

export default TravelCheck;

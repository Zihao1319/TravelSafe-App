import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";

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

  const formik = useFormik({
    initialValues: { country: "" },
    onSubmit: (values) => {
      console.log(values.country)
      setDestination(values.country);
      console.log(destination);
    },
  });

  // const tokenInfo = {
  //   method: "POST",
  //   url: "https://test.api.amadeus.com/v1/security/oauth2/token",
  //   headers: { "content-type": "application/x-www-form-urlencoded" },
  //   data: new URLSearchParams({
  //     grant_type: "client_credentials",
  //     client_id: "06FugX4zldyFcrieWkOxT1siu5kKLJY4",
  //     client_secret: "9r0RzGdbq94Mvkrw",
  //   }),
  // };

  // if (destination) {
  //   const data = {
  //     method: "GET",
  //     url: `https://test.api.amadeus.com/v1/reference-data/airlines?airlineCodes=${destination}`,
  //     //   url: `https://test.api.amadeus.com/v2/duty-of-care/diseases/covid19-area-report?countryCode=${destination.country}`,
  //     headers: { Authorization: `Bearer ${token}` },
  //   };

  //   axios.request (data).then ((res) => {
  //     console.log(token, res.data.data[0]);
  // }
  //   )}

  useEffect (() => {
    const fetchToken = async () => {
      await axios.request(reqToken).then((res) =>{
        console.log(res.data.access_token)
        setToken(res.data.access_token) 
        // console.log(res.data.access_token)
      })
    }

    // const fetchData = async () => {
    //   await axios.request (data).then ((res) => {
    //     console.log(res);
    //   })

    // }
    fetchToken ()
    .catch (console.error)

  }, []);

  useEffect (() => {
    const fetchData = async () => {
      const data = {
        method: "GET",
        url: `https://test.api.amadeus.com/v1/reference-data/airlines?airlineCodes=${destination}`,
        //   url: `https://test.api.amadeus.com/v2/duty-of-care/diseases/covid19-area-report?countryCode=${destination.country}`,
        headers: { Authorization: await `Bearer ${token}` },
      };
  
      axios.request (data).then ((res) => {
        console.log(token, res.data.data[0]);
    })}
    
    fetchData ()
    .catch (console.error)


  }, [destination]);

    // const fetchData = async () => {
    //   await axios.request (data).then ((res) => {
    //     console.log(res);
    //   })

    // }
  
;

  // if (token) {
  //   axios
  //   .request(data)
  //   .then((res) => {
  //     console.log(res);
  //     // console.log(token)
  //   })
  //   .catch((err) => {
  //     console.log(err.response.data);
  //   });
  // }

 




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

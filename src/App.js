import ReactDOM from "react-dom/client";
import { Route, Link, Routes } from "react-router-dom";

import React, { useState } from "react";
import "./App.css";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import TravelCheck from "./Main/TravelCheck";
import TravelForm from "./Main/Form";

const App = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = (e) => {
    setLogin({ login: true });
    console.log("Logged in");
  };

  console.log(login);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login setLogin={handleLogin} />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/travelform" element={<TravelForm />} />

        {/* <Login setLogin={handleLogin} /> */}
        {/* {login && <travelCheck />} */}
      </Routes>
    </>
  );
};

export default App;

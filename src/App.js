import ReactDOM from "react-dom/client";
import { Route, Link, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";

const App = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = (e) => {
    setLogin({ isLogin: true });
    console.log("Logged in");
  };
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login setLogin={handleLogin} />} />
        <Route exact path="/signup" element={<SignUp />} />
        {/* <Login setLogin={handleLogin} /> */}
      </Routes>
    </>
  );
};

export default App;

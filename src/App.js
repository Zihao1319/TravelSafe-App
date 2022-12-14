import ReactDOM from "react-dom/client";
import { Route, Link, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import TravelForm from "./Main/Form";
import { ProtectedLayout } from "./ProtectedLayout";
import { LoggedOutLayout } from "./LoggedOutLayout";
import Dashboard from "./Main/Dashboard";
import Profile from "./Login/Profile";

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route exact path="/" element={<Login setLogin={handleLogin} />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route element={<LoggedOutLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<TravelForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* <Login setLogin={handleLogin} /> */}
        {/* {login && <travelCheck />} */}
      </Routes>
    </>
  );
};

export default App;

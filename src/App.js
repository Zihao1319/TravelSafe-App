import React, { useState } from "react";
import "./App.css";
import Login from "./Login";

const App = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = (e) => {
    setLogin({ isLogin: true });
    console.log("Logged in");
  };
  return (
    <>
      <Login setLogin={handleLogin} />
    </>
  );
};

export default App;

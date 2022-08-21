import React, { useContext, useState } from "react";

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const value = { user, setUser };

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within UserContextProvider");
  }
  return context;
};

export { UserContextProvider, useUserContext };

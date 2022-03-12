import React, { useState, useContext, createContext } from "react";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState({});
  const [userConnections, setUserConnections] = useState([]);

  return (
    <userContext.Provider
      value={{
        selectedUser,
        setSelectedUser,
        userConnections,
        setUserConnections,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  const { selectedUser, setSelectedUser, userConnections, setUserConnections } =
    useContext(userContext);
  return { selectedUser, setSelectedUser, userConnections, setUserConnections };
};

import React, { useState, useContext, createContext } from "react";

export const selectedUserContext = createContext();

export const SelectedUserProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState({});

  return (
    <selectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </selectedUserContext.Provider>
  );
};

export const useSelectedUser = () => {
  const { selectedUser, setSelectedUser } = useContext(selectedUserContext);
  return { selectedUser, setSelectedUser };
};

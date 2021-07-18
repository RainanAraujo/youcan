import React, { createContext } from "react";
import Menu from "../components/Menu";
export const GlobalComponentsContext = createContext();

const GlobalComponentsList = {
  Menu,
};

export const GlobalComponents = ({ children }) => {
  return (
    <GlobalComponentsContext.Provider value={GlobalComponentsList}>
      {children}
    </GlobalComponentsContext.Provider>
  );
};

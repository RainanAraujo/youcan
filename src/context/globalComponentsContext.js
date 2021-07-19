import React, { createContext, useContext, useState } from "react";
import { Text } from "react-native";
import Menu from "../components/Menu";
export const GlobalComponentsContext = createContext();

export const GlobalComponents = ({ children }) => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  return (
    <GlobalComponentsContext.Provider value={{ expandedMenu, setExpandedMenu }}>
      {children}
      <Menu open={expandedMenu != null} onClose={() => setExpandedMenu(null)}>
        {expandedMenu}
      </Menu>
    </GlobalComponentsContext.Provider>
  );
};

export const useGlobalComponents = () => {
  const { expandedMenu, setExpandedMenu } = useContext(GlobalComponentsContext);
  return { expandedMenu, setExpandedMenu };
};

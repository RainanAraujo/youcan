import React, { createContext, useContext, useState, useEffect } from "react";
import { Text } from "react-native";
import Menu from "../components/Menu";
export const GlobalComponentsContext = createContext();

export const GlobalComponents = ({ children }) => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [temp, setTemp] = useState(null);
  useEffect(() => {
    if (expandedMenu) {
      setTemp(expandedMenu);
    }
  }, [expandedMenu]);
  return (
    <GlobalComponentsContext.Provider value={{ expandedMenu, setExpandedMenu }}>
      {children}
      <Menu open={expandedMenu != null} onClose={() => setExpandedMenu(null)}>
        {temp}
      </Menu>
    </GlobalComponentsContext.Provider>
  );
};

export const useGlobalComponents = () => {
  const { expandedMenu, setExpandedMenu } = useContext(GlobalComponentsContext);
  return { expandedMenu, setExpandedMenu };
};

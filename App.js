import React from "react";
import Routes from "./routes";
import { View } from "react-native";
import {
  useFonts,
  Lato_300Light as LatoLight,
  Lato_400Regular as LatoRegular,
  Lato_700Bold as LatoBold,
  Lato_900Black as LatoBlack,
} from "@expo-google-fonts/lato";
import { UserProvider } from "./src/context/userContext";
import { GlobalComponents } from "./src/context/globalComponentsContext";

export default function App() {
  let [fontsLoaded] = useFonts({
    LatoLight,
    LatoRegular,
    LatoBold,
    LatoBlack,
  });
  if (!fontsLoaded) {
    return <View />;
  }
  return (
    <UserProvider>
      <GlobalComponents>
        <Routes />
      </GlobalComponents>
    </UserProvider>
  );
}

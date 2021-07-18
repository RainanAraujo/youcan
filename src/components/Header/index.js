import React, { useEffect } from "react";
import { View, BackHandler } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, Title, ButtonBack } from "./styles";

export default function Header({ navigation: { goBack }, title }) {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const backAction = () => {
    goBack();
    return true;
  };

  return (
    <Container>
      <ButtonBack onPress={() => goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={28} color="black" />
      </ButtonBack>
      <Title>{title}</Title>
      <View />
    </Container>
  );
}

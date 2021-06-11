import React from "react";
import { Container } from "./styles";
import { StatusBar } from "react-native";
import LionDialogue from "./../LionDialogue";
import HappyLion from "../../../assets/images/happyLion.png";
export default function SelectUserType({ navigation }) {
  return (
    <Container>
      <StatusBar backgroundColor="#fff" />
      <LionDialogue Lion={HappyLion} TextDialogue="Olá, fulano" />
    </Container>
  );
}

import React from "react";
import { Container } from "./styles";
import { SafeAreaView, StatusBar, Text } from "react-native";
import SelectUserType from "./../../components/SelectUserType";
export default function Register() {
  return (
    <Container>
      <StatusBar backgroundColor="#fff" />
      <SelectUserType />
    </Container>
  );
}

import React from "react";
import {
  Container,
  Logo,
  Title,
  Description,
  Link,
  Information,
} from "./styles";
import { SafeAreaView, StatusBar, Text } from "react-native";

export default function Register() {
  return (
    <Container>
      <StatusBar backgroundColor="#fff" />
      <Text>Registrar</Text>
    </Container>
  );
}

import React from "react";
import { Container } from "./styles";
import { SafeAreaView, StatusBar, Text } from "react-native";

export default function Home() {
  return (
    <Container>
      <StatusBar backgroundColor="#fff" />
      <Text>Pagina inicial</Text>
    </Container>
  );
}

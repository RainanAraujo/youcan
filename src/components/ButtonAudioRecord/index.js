import React from "react";
import { Container, Text } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
export default function ButtonAudioRecord({ onPress }) {
  return (
    <Container onPress={onPress}>
      <Text>Gravar audio</Text>
      <FontAwesome name="microphone" size={20} color="#fff" />
    </Container>
  );
}

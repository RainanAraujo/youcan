import React from "react";
import { Container, Text } from "./styles";
import { Ionicons } from "@expo/vector-icons";
export default function NewTopicButton({ text, onPress }) {
  return (
    <Container onPress={onPress}>
      <Text>{text}</Text>
      <Ionicons name="add" size={24} color="#F2C029" />
    </Container>
  );
}

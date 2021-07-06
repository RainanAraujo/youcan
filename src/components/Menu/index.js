import React from "react";
import { Container } from "./styles";
import { Feather } from "@expo/vector-icons";
export default function Menu({
  onPress,

  title,
  Icon,
}) {
  return (
    <Container onPress={onPress}>
      <Feather name="menu" size={24} color="#070C17" />
    </Container>
  );
}

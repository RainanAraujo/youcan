import React from "react";
import { Container, Text } from "./styles";

export default function Button({ Icon, text, onPress }) {
  return (
    <Container onPress={onPress}>
      {Icon && <Icon />}
      <Text isButtonIcon={Icon}>{text}</Text>
    </Container>
  );
}

import React from "react";
import { Container, Text } from "./styles";

export default function Button({ Icon, text }) {
  return (
    <Container>
      {Icon && <Icon />}
      <Text isButtonIcon={Icon}>{text}</Text>
    </Container>
  );
}

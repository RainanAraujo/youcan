import React from "react";
import { Container, Text } from "./styles";

export default function PreviewAnswer({ type, text }) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}

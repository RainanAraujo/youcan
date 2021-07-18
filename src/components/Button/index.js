import React from "react";
import { Container, Text } from "./styles";

export default function Button({ Icon, text, onPress, buttonText }) {
  return (
    <Container onPress={onPress} isButtonText={buttonText}>
      {Icon && <Icon />}
      <Text isButtonIcon={Icon} isButtonText={buttonText}>
        {text}
      </Text>
    </Container>
  );
}

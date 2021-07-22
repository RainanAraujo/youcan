import React from "react";
import { Container, Text } from "./styles";

export default function Button({
  Icon,
  text,
  onPress,
  buttonText,
  buttonSmall,
  gray,
}) {
  return (
    <Container
      gray={gray}
      onPress={onPress}
      isButtonText={buttonText}
      buttonSmall={buttonSmall}
    >
      {Icon && <Icon />}
      <Text isButtonIcon={Icon} isButtonText={buttonText} gray={gray}>
        {text}
      </Text>
    </Container>
  );
}

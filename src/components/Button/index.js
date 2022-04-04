import React, { useState } from "react";
import { Container, Text } from "./styles";
import { ActivityIndicator } from "react-native";

export default function Button({
  Icon,
  text,
  onPress,
  buttonText,
  buttonSmall,
  gray,
  loading,
  disable,
}) {
  return (
    <Container
      gray={gray}
      onPress={loading || disable ? null : onPress}
      isButtonText={buttonText}
      buttonSmall={buttonSmall}
      disable={loading || disable}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <>
          {Icon && <Icon />}
          <Text isButtonIcon={Icon} isButtonText={buttonText} gray={gray}>
            {text}
          </Text>
        </>
      )}
    </Container>
  );
}

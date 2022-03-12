import React from "react";
import { Container, Title, Button, LeftContent, RightContent } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
export default function ButtonNotification({
  onPress,

  title,
  Icon,
  type,
}) {
  return (
    <Container type={type} onPress={onPress}>
      {Icon && <Icon />}
      <Title type={type}>{title}</Title>
    </Container>
  );
}

import React from "react";
import {
  Container,
  Title,
  Description,
  LeftContent,
  RightContent,
} from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export default function InteractionButton({
  onPress,
  title,
  description,
  Icon,
  type,
  onDelete,
}) {
  return (
    <Container type={type} onPress={onPress}>
      <LeftContent>
        <Title type={type}>{title}</Title>
        <Description type={type}>{description}</Description>
      </LeftContent>
      <RightContent>{Icon && <Icon />}</RightContent>
    </Container>
  );
}

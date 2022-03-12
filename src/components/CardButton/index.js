import React from "react";
import {
  Container,
  Category,
  Title,
  Description,
  HeaderCategory,
  Button,
  LeftContent,
  RightContent,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
export default function CardButton({
  onPress,
  category,
  title,
  description,
  Icon,
  type,
}) {
  return (
    <Container type={type} onPress={onPress}>
      <LeftContent>
        <HeaderCategory>
          {Icon && <Icon />}
          <Category type={type}> {category}</Category>
        </HeaderCategory>
        <Title type={type}>{title}</Title>
        <Description type={type}>{description}</Description>
      </LeftContent>
      <RightContent>
        <Button>
          <MaterialIcons name="arrow-forward-ios" size={24} color="#070C17" />
        </Button>
      </RightContent>
    </Container>
  );
}

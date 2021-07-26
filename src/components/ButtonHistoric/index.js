import React from "react";
import {
  Container,
  Category,
  Title,
  Description,
  HeaderCategory,
  Tag,
  TexTag,
  LeftContent,
  RightContent,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
export default function ButtonHistoric({ onPress, date, day, Icon, type }) {
  return (
    <Container onPress={onPress}>
      <LeftContent>
        <HeaderCategory>
          <MaterialIcons name="history" size={20} color="#929292" />
          <Category> {date}</Category>
        </HeaderCategory>
        <Title type={type}>{day}</Title>
      </LeftContent>
      <RightContent>
        <Tag>
          <TexTag>Tristeza</TexTag>
        </Tag>
        <Tag>
          <TexTag>Emocional</TexTag>
        </Tag>
        <Tag>
          <TexTag>Tristesa</TexTag>
        </Tag>
        <Tag default>
          <TexTag>Não informado</TexTag>
        </Tag>
      </RightContent>
    </Container>
  );
}

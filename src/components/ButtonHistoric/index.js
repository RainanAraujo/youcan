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
import { timestampToDayMonth, timestampToDayName } from "../../utils/date";

export default function ButtonHistoric({ onPress, date, tags }) {
  console.log(tags);

  return (
    <Container onPress={onPress}>
      <LeftContent>
        <HeaderCategory>
          <MaterialIcons name="history" size={20} color="#929292" />
          <Category> {timestampToDayMonth(date)}</Category>
        </HeaderCategory>
        <Title>{timestampToDayName(date)}</Title>
      </LeftContent>
      <RightContent>
        {tags?.map((tag) => (
          <Tag>
            <TexTag>{tag}</TexTag>
          </Tag>
        )) || (
          <Tag default>
            <TexTag>Não informado</TexTag>
          </Tag>
        )}
      </RightContent>
    </Container>
  );
}

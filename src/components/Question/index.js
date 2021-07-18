import React, { useState } from "react";
import {
  Container,
  QuestionText,
  Description,
  Or,
  Option,
  TextOption,
  TagsContainer,
} from "./styles";
import Input from "../Input";
import ButtonAudioRecord from "../ButtonAudioRecord";
import CheckBox from "@react-native-community/checkbox";
import TagAdd from "../TagAdd";

export default function Question() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <Container>
      <QuestionText>Que dia é hoje?</QuestionText>
      <Description>
        Descreva pra eu seu dia ai rapaz, faz um favor Descreva pra eu seu dia
        ai rapaasdfosadf
      </Description>

      <Input Placeholder="Digite sua resposta" />
      <Or>ou</Or>
      <ButtonAudioRecord />
      <Option>
        <CheckBox
          disabled={false}
          tintColors={{ true: "#F2C029" }}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <TextOption>asas</TextOption>
      </Option>

      <TagAdd />
      <TagAdd />
      <TagAdd />
    </Container>
  );
}

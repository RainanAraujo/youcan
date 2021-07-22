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

export default function Question({ questionData }) {
  const { name, description, dataType, options } = questionData;

  const typeSelector = {
    text: <Input Placeholder="Digite sua resposta" />,
    textOrAudio: (
      <>
        <Input Placeholder="Digite sua resposta" />
        <Or>ou</Or>
        <ButtonAudioRecord />
      </>
    ),
    multiply: (
      <>
        {options.map((option) => (
          <Option>
            <CheckBox
              disabled={false}
              tintColors={{ true: "#F2C029" }}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <TextOption>{option}</TextOption>
          </Option>
        ))}
      </>
    ),
    tags: (
      <>
        <TagAdd />
        <TagAdd />
        <TagAdd />
      </>
    ),
  };

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <Container>
      <QuestionText>{name || "[Preencha esse campo]"}</QuestionText>
      <Description>{description || "[Preencha esse campo]"}</Description>
      {typeSelector[dataType]}
    </Container>
  );
}

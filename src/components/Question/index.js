import React, { useEffect, useState } from "react";
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

export default function Question({ questionData, onChange }) {
  const { name, description, dataType, options } = questionData || {};
  const [text, setText] = useState("");
  const [tags, setTags] = useState([]);
  const [audio, setAudio] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const inputTypes = {
      text,
      tags,
      textOrAudio: { text, audio },
      multiply: selectedOptions,
    };
    onChange(inputTypes[dataType]);
  }, [text, tags, audio, selectedOptions]);

  useEffect(() => {
    setText("");
    setTags([]);
    setAudio("");
    setSelectedOptions(options.map(() => false));
  }, [questionData]);

  const inputTypes = {
    text: <Input onChangeText={setText} Placeholder="Digite sua resposta" />,
    textOrAudio: (
      <>
        <Input onChangeText={setText} Placeholder="Digite sua resposta" />
        <Or>ou</Or>
        <ButtonAudioRecord onRecord={setAudio} />
      </>
    ),
    multiply: (
      <>
        {options?.map((option, index) => (
          <Option>
            <CheckBox
              value={selectedOptions[index]}
              disabled={false}
              tintColors={{ true: "#F2C029" }}
              onValueChange={(newValue) =>
                setSelectedOptions((list) => {
                  list[index] = newValue;
                  return list.slice();
                })
              }
            />
            <TextOption>{option}</TextOption>
          </Option>
        ))}
      </>
    ),
    tags: (
      <>
        <TagAdd
          onChange={(value) =>
            setTags((list) => {
              list[0] = value;
              return list;
            })
          }
        />
        <TagAdd
          onChange={(value) =>
            setTags((list) => {
              list[1] = value;
              return list;
            })
          }
        />
        <TagAdd
          onChange={(value) =>
            setTags((list) => {
              list[2] = value;
              return list;
            })
          }
        />
      </>
    ),
  };

  return (
    <Container>
      <QuestionText>{name || "[Preencha esse campo]"}</QuestionText>
      <Description>{description || "[Preencha esse campo]"}</Description>
      {inputTypes[dataType]}
    </Container>
  );
}

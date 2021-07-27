import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  Label,
  DropDown,
  DropDownContainer,
  Option,
  Circle,
  titleOption,
  RemoveOption,
} from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Header from "../../components/Header";

import Input from "../../components/Input";
import Button from "../../components/Button";
import NewTopicButton from "../../components/NewTopicButton";
import { Ionicons } from "@expo/vector-icons";
import { editQuestion, createQuestion } from "../../services/firestore";

export default function AnnotationEditor({ navigation, route }) {
  const _question = route.params?.question || {};

  const [title, setTitle] = useState(_question.title || "");
  const [annotation, setAnnotation] = useState(_question.annotation || "");
  const [dataType, setDataType] = useState(_question.dataType || "text");
  const [options, setOptions] = useState(_question.options || []);

  const saveQuestion = async () => {
    if ([title, annotation, dataType, options].some((val) => val != null)) {
      const question = {
        userConnectionID: selectedUser.userConnectionID,
        title,
        annotation,
        dataType,
        options,
      };
      console.log(question);
      if (route.params?.question) {
        await editQuestion(_question.questionID, question);
      } else {
        await createQuestion(question);
      }
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <StatusBar backgroundColor="#fff" />
        {route.params?.question == null ? (
          <Header
            title="Criar anotação"
            onBackButtonPress={() => navigation.goBack()}
          />
        ) : (
          <Header
            title="Editar anotação"
            onBackButtonPress={() => navigation.goBack()}
          />
        )}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <>
            <Label>Título</Label>
            <Input
              value={title}
              onChangeText={(value) => setTitle(value)}
            ></Input>
            <Label>Anotação</Label>
            <Input
              bigArea
              value={annotation}
              onChangeText={(value) => setAnnotation(value)}
            ></Input>

            <Button text="Salvar" onPress={saveQuestion} />
            <Button
              buttonText
              text="Visualizar pergunta"
              onPress={() =>
                navigation.navigate("questionPreview", {
                  question: {
                    userConnectionID: selectedUser.userConnectionID,
                    title,
                    annotation,
                    dataType,
                    options,
                  },
                })
              }
            />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

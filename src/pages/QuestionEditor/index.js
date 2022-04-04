import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  Label,
  DropDown,
  DropDownContainer,
  Option,
  Circle,
  NameOption,
  RemoveOption,
  TrashButton,
} from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Header from "../../components/Header";
import { useUserContext } from "../../context/userContext";
import Input from "../../components/Input";
import Button from "../../components/Button";
import NewTopicButton from "../../components/NewTopicButton";
import { Ionicons } from "@expo/vector-icons";
import {
  editQuestion,
  createQuestion,
  deleteQuestion,
} from "../../services/firestore";
import { FontAwesome5 } from "@expo/vector-icons";

export default function QuestionEditor({ navigation, route }) {
  const _question = route.params?.question || {};

  const { selectedUser } = useUserContext();
  const [name, setName] = useState(_question.name || "");
  const [description, setDescription] = useState(_question.description || "");
  const [dataType, setDataType] = useState(_question.dataType || "text");
  const [options, setOptions] = useState(_question.options || []);

  const saveQuestion = async () => {
    const question = {
      userConnectionID: selectedUser.userConnectionID,
      name,
      description,
      dataType,
      options,
    };
    if (route.params?.question) {
      await editQuestion(_question.id, question);
    } else {
      await createQuestion(question);
    }
    navigation.goBack();
  };

  const deleteHandle = () => {
    if (route.params?.question == null) {
      navigation.goBack();
    } else {
      deleteQuestion(_question.id)
        .then(() => navigation.goBack())
        .catch((err) => console.log(err));
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <StatusBar backgroundColor="#fff" />
        <Header
          title={
            route.params?.question == null
              ? "Criar pergunta"
              : "Editar pergunta"
          }
          onBackButtonPress={() => navigation.goBack()}
        />
        <TrashButton onPress={deleteHandle}>
          <FontAwesome5 name="trash" size={16} color="#FE6161" />
        </TrashButton>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <>
            <Label>Pergunta</Label>
            <Input
              value={name}
              onChangeText={(value) => setName(value)}
            ></Input>
            <Label>Detalhes</Label>
            <Input
              value={description}
              onChangeText={(value) => setDescription(value)}
            ></Input>
            <Label>Tipo de resposta</Label>
            <DropDownContainer>
              <DropDown
                mode="dropdown"
                selectedValue={dataType}
                onValueChange={(value) => setDataType(value)}
              >
                <DropDown.Item label="Texto" value="text" />
                <DropDown.Item label="Texto ou Aúdio" value="textOrAudio" />
                <DropDown.Item label="Múltipla Escolha" value="multiply" />
                <DropDown.Item label="Tags de Sentimento" value="tags" />
              </DropDown>
            </DropDownContainer>
            {dataType == "multiply" && (
              <>
                <NewTopicButton
                  text="Adicionar Escolha"
                  onPress={() => setOptions([...options, options.length + 1])}
                />
                {options.length > 0 &&
                  options.map((item, index) => (
                    <Option key={index}>
                      <Circle />
                      <NameOption
                        value={item}
                        onChangeText={(textChanged) =>
                          options.splice(index, 1, textChanged)
                        }
                        selectionColor="#F2C029"
                        focus={true}
                        autoFocus={true}
                      />
                      <RemoveOption
                        onPress={() =>
                          setOptions(
                            options.filter((value, idx) => idx != index)
                          )
                        }
                      >
                        <Ionicons
                          name="md-trash-bin-sharp"
                          size={16}
                          color="#FE6161"
                        />
                      </RemoveOption>
                    </Option>
                  ))}
              </>
            )}
            <Button
              disable={[name, description, dataType, options].some(
                (val) => val != null
              )}
              text="Salvar"
              onPress={saveQuestion}
            />
            <Button
              buttonText
              text="Visualizar pergunta"
              onPress={() =>
                navigation.navigate("questionPreview", {
                  question: {
                    userConnectionID: selectedUser.userConnectionID,
                    name,
                    description,
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

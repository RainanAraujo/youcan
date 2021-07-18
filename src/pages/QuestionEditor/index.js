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
} from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Header from "../../components/Header";
import { useSelectedUser } from "../../context/selectedUserContext";
import Input from "../../components/Input";
import Button from "../../components/Button";
import NewTopicButton from "../../components/NewTopicButton";
import { Ionicons } from "@expo/vector-icons";

export default function QuestionEditor({ navigation }) {
  const { selectedUser } = useSelectedUser();
  const [dataType, setDataType] = useState();
  const [options, setOptions] = useState([]);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <StatusBar backgroundColor="#fff" />
        <Header title="Editar pergunta" navigation={navigation} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <>
            <Label>Pergunta</Label>
            <Input></Input>
            <Label>Detalhes</Label>
            <Input></Input>
            <Label>Tipo de resposta</Label>
            <DropDownContainer>
              <DropDown
                mode="dropdown"
                selectedValue={dataType}
                onValueChange={(itemValue, itemIndex) => setDataType(itemValue)}
              >
                <DropDown.Item
                  label="Selecionar"
                  value=""
                  selectedValue
                  enabled={false}
                />
                <DropDown.Item label="Áudio" value="audio" />
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
            <Button text="Salvar" onPress={() => console.log(options)} />
            <Button buttonText text="Visualizar pergunta" />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

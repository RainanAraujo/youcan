import React, { useState } from "react";
import { Container, DropDown, DropDownContainer, Label } from "./styles";
import { StatusBar, ScrollView, Alert } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function FormPatient({ onValidate, loading }) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [schooling, setSchooling] = useState("");

  const validForm = () => {
    if ([name, phoneNumber, age, schooling].some((str) => str === "")) {
      Alert.alert("Erro", "Formulário invalido");
    } else {
      onValidate({ name, phoneNumber, age, schooling });
    }
  };

  return (
    <Container>
      <StatusBar backgroundColor="#fff" />
      <ScrollView>
        <Label>Nome</Label>
        <Input value={name} onChangeText={(text) => setName(text)} />
        <Label>Telefone</Label>
        <Input
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <Label>Idade</Label>
        <Input value={age} onChangeText={(text) => setAge(text)} />
        <Label>Escolaridade</Label>
        <DropDownContainer>
          <DropDown
            mode="dropdown"
            selectedValue={schooling}
            onValueChange={(itemValue, itemIndex) => setSchooling(itemValue)}
          >
            <DropDown.Item
              label="Selecionar"
              value=""
              selectedValue
              enabled={false}
            />
            <DropDown.Item label="Fundamental - Incompleto" value="FI" />
            <DropDown.Item label="Fundamental - Completo" value="FC" />
            <DropDown.Item label="Médio - Incompleto" value="MI" />
            <DropDown.Item label="Médio - Completo" value="MC" />
            <DropDown.Item label="Superior - Incompleto" value="SI" />
            <DropDown.Item label="Superior - Completo" value="SC" />
          </DropDown>
        </DropDownContainer>
        <Button text="Finalizar" loading={loading} onPress={validForm}></Button>
      </ScrollView>
    </Container>
  );
}

import React, { useState } from "react";
import { Container, DropDown, DropDownContainer, Label } from "./styles";
import { StatusBar } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function FormPatient({ onValidate }) {
  const [schooling, setSchooling] = useState();
  return (
    <Container>
      <StatusBar backgroundColor="#fff" />
      <Label>Telefone</Label>
      <Input />
      <Label>Idade</Label>
      <Input />
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
      <Button text="Finalizar" onPress={onValidate}></Button>
    </Container>
  );
}

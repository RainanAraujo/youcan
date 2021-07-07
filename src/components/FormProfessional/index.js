import React, { useState } from "react";
import { Container, DropDown, DropDownContainer, Label } from "./styles";
import { StatusBar } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function FormProfessional({ onValidate }) {
  const [schooling, setSchooling] = useState();
  return (
    <Container>
      <StatusBar backgroundColor="#fff" />
      <Label>Instituição de Trabalho (CAPS)</Label>
      <Input />
      <Label>Profissão</Label>
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
          <DropDown.Item label="Psiquiatra" value="psychiatrist" />
          <DropDown.Item label="Psicologo" value="psychologist" />
          <DropDown.Item
            label="Terapeuta Ocupacional"
            value="occupationalTherapist"
          />
        </DropDown>
      </DropDownContainer>
      <Label>CRP</Label>
      <Input />
      <Button text="Finalizar" onPress={onValidate}></Button>
    </Container>
  );
}

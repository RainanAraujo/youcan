import React, { useState } from "react";
import { Container, DropDown, DropDownContainer, Label } from "./styles";
import { StatusBar, Alert } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function FormProfessional({ onValidate }) {
  const [name, setName] = useState("");
  const [CAPS, setCAPS] = useState("");
  const [schooling, setSchooling] = useState("");
  const [CRP, setCRP] = useState("");

  const validForm = () => {
    console.log({ name, CAPS, schooling, CRP });
    if ([name, CAPS, schooling, CRP].some((str) => str === "")) {
      Alert.alert("Erro", "Formulário invalido");
    } else {
      onValidate({ name, CAPS, schooling, CRP });
    }
  };

  return (
    <Container>
      <StatusBar backgroundColor="#fff" />
      <Label>Nome</Label>
      <Input value={name} onChangeText={(text) => setName(text)} />
      <Label>Instituição de Trabalho (CAPS)</Label>
      <Input value={CAPS} onChangeText={(text) => setCAPS(text)} />
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
      <Input value={CRP} onChangeText={(text) => setCRP(text)} />
      <Button text="Finalizar" onPress={validForm}></Button>
    </Container>
  );
}

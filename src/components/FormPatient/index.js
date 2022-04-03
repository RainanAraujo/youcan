import React, { useState } from "react";
import { Container, DropDown, DropDownContainer, Label } from "./styles";
import { StatusBar, ScrollView, Alert } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import DateTimePicker from "@react-native-community/datetimepicker";
import ButtonPicker from "../../components/ButtonPicker";
import { MaterialIcons } from "@expo/vector-icons";

export default function FormPatient({ onValidate, loading }) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState(new Date());
  const [schooling, setSchooling] = useState("");
  const [showDate, setShowDate] = useState(false);

  const validForm = () => {
    if ([name, phoneNumber, age, schooling].some((str) => str === "")) {
      Alert.alert("Erro", "Formulário invalido");
    } else {
      onValidate({ name, phoneNumber, age, schooling });
    }
  };

  return (
    <Container>
      {showDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={age}
          mode={"date"}
          is24Hour={true}
          display="default"
          minimumDate={new Date()}
          onChange={(evt, value) => {
            setShowDate(false);
            const selectedDate = value || date;

            setAge(new Date(selectedDate));
          }}
          onTouchCancel={() => setShowDate(false)}
        />
      )}
      <StatusBar backgroundColor="#fff" />
      <ScrollView>
        <Label>Nome</Label>
        <Input value={name} onChangeText={(text) => setName(text)} />
        <Label>Telefone</Label>
        <Input
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <Label>Data de Nascimento</Label>

        <ButtonPicker
          text={age.getDate() + "-" + age.getMonth() + "-" + age.getFullYear()}
          onPress={() => setShowDate(true)}
          Icon={() => (
            <MaterialIcons name="date-range" size={24} color="#373D53" />
          )}
        />

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

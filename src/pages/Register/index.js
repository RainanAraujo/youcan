import React, { useState, useEffect } from "react";
import { Container, ScrollView, Title, Registration } from "./styles";
import { BackHandler, StatusBar, View } from "react-native";
import SelectUserType from "./../../components/SelectUserType";
import FormPatient from "../../components/FormPatient";
import FormProfessional from "../../components/FormProfessional";

export default function Register({ navigation }) {
  const [typeUserSelected, setTypeUserSelected] = useState("");

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const backAction = () => {
    setTypeUserSelected("");
    return true;
  };

  return (
    <Container>
      <StatusBar backgroundColor="#fff" />
      <ScrollView>
        {typeUserSelected == "" && (
          <SelectUserType
            OnPressPatient={() => setTypeUserSelected("patient")}
            OnPressProfessional={() => setTypeUserSelected("professional")}
          />
        )}
        {typeUserSelected == "patient" && (
          <Registration>
            <Title>Precisamos de algumas informações para continuar</Title>
            <FormPatient onValidate={() => navigation.replace("homePatient")} />
          </Registration>
        )}
        {typeUserSelected == "professional" && (
          <Registration>
            <Title>Precisamos de algumas informações para continuar</Title>
            <FormProfessional
              onValidate={() => navigation.replace("homePatient")}
            />
          </Registration>
        )}
      </ScrollView>
    </Container>
  );
}

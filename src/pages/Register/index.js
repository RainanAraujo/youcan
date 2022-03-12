import React, { useState, useEffect } from "react";
import { Container, ScrollView, Title, Registration } from "./styles";
import { BackHandler, StatusBar, View, Alert } from "react-native";
import SelectUserType from "./../../components/SelectUserType";
import FormPatient from "../../components/FormPatient";
import FormProfessional from "../../components/FormProfessional";
import {
  registerPatient,
  registerProfessional,
} from "../../services/firestore";
import { currentUser } from "../../services/auth";

export default function Register({ navigation }) {
  const [typeUserSelected, setTypeUserSelected] = useState("");
  const { uid, photoURL } = currentUser();
  const [loading, setLoading] = useState(false);

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
            <FormPatient
              loading={loading}
              onValidate={(userData) => (
                registerPatient(uid, { photoURL, ...userData })
                  .then(() => navigation.replace("homePatient"))
                  .catch(
                    () => (
                      setLoading(false),
                      Alert.alert("Erro", "Não foi possível registar usuário")
                    )
                  ),
                setLoading(true)
              )}
            />
          </Registration>
        )}
        {typeUserSelected == "professional" && (
          <Registration>
            <Title>Precisamos de algumas informações para continuar</Title>
            <FormProfessional
              loading={loading}
              onValidate={(userData) => (
                registerProfessional(uid, { photoURL, ...userData })
                  .then(() => navigation.replace("homeProfessional"))
                  .catch(
                    () => (
                      setLoading(false),
                      Alert.alert("Erro", "Não foi possível registar usuário")
                    )
                  ),
                setLoading(true)
              )}
            />
          </Registration>
        )}
      </ScrollView>
    </Container>
  );
}

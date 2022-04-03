import React from "react";
import {
  Container,
  DescriptionPage,
  OptionsUserCategory,
  Option,
  Image,
  UserCategory,
} from "./styles";
import { StatusBar } from "react-native";
import LionDialogue from "./../LionDialogue";
import HappyLion from "../../../assets/images/happyLion.png";
import Person from "../../../assets/images/person.png";
import Professional from "../../../assets/images/professional.png";
import { currentUser } from "../../services/auth";
export default function SelectUserType({
  OnPressPatient,
  OnPressProfessional,
}) {
  return (
    <Container>
      <StatusBar backgroundColor="#fff" />
      <LionDialogue
        Lion={HappyLion}
        TextDialogue={"Olá, " + currentUser().displayName}
      />
      <DescriptionPage>
        Para iniciarmos preciso saber em que situação você se encontra no
        momento.
      </DescriptionPage>
      <OptionsUserCategory>
        <Option onPress={OnPressPatient}>
          <Image source={Person}></Image>
          <UserCategory>Paciente</UserCategory>
        </Option>
        <Option onPress={OnPressProfessional}>
          <Image source={Professional}></Image>
          <UserCategory>Profissional</UserCategory>
        </Option>
      </OptionsUserCategory>
    </Container>
  );
}

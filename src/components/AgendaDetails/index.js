import React, { useState, useEffect } from "react";
import {
  Container,
  Avatar,
  Data,
  Day,
  UserInformation,
  Date,
  DateText,
  TopInformation,
  BottomInformation,
  ButtonRoom,
  Room,
} from "./styles";
import { Linking } from "react-native";
import { getUserData } from "../../services/firestore";

export default function AgendaDetails({ patientID, onPress, link }) {
  const [patientData, setPatientData] = useState(null);
  useEffect(() => {
    if (patientID) {
      getUserData(patientID).then((data) => setPatientData(data));
    }
  }, [patientID]);

  return (
    <Container>
      <TopInformation>
        <Avatar
          source={{
            uri: "https://conteudo.imguol.com.br/c/noticias/f1/2019/11/02/a-nasa-elegeu-como-foto-astronomica-do-dia-em-22-de-outubro-esta-imagem-da-via-lactea-capturada-por-jheison-huerta-no-salar-de-uyuni-na-bolivia-1572723035380_v2_450x337.jpg",
          }}
        />
        <Data>
          <Day>{"Terça-Feira"}</Day>
          <UserInformation>
            {"Emanuelly Ribeiro"} | {"Psicóloga"}
          </UserInformation>
        </Data>
        <Date>
          <DateText>16/06</DateText>
        </Date>
      </TopInformation>
      <BottomInformation>
        <ButtonRoom
          onPress={() => {
            Linking.openURL(link);
          }}
        >
          <Room>{"lçsdkfmsdlk"}</Room>
        </ButtonRoom>
      </BottomInformation>
    </Container>
  );
}

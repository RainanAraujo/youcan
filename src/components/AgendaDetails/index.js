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
  TrashButton,
  DateHour,
  Hour,
  Place,
} from "./styles";
import { Linking } from "react-native";
import { getUserData } from "../../services/firestore";
import { FontAwesome5 } from "@expo/vector-icons";

export default function AgendaDetails({ patientID, onPress, link, onDelete }) {
  const [patientData, setPatientData] = useState(null);
  useEffect(() => {
    if (patientID) {
      getUserData(patientID).then((data) => setPatientData(data));
    }
  }, [patientID]);

  return (
    <Container>
      {onDelete && (
        <TrashButton onPress={onDelete}>
          <FontAwesome5 name="trash" size={16} color="#FE6161" />
        </TrashButton>
      )}
      <TopInformation>
        <Avatar
          source={{
            uri: "https://conteudo.imguol.com.br/c/noticias/f1/2019/11/02/a-nasa-elegeu-como-foto-astronomica-do-dia-em-22-de-outubro-esta-imagem-da-via-lactea-capturada-por-jheison-huerta-no-salar-de-uyuni-na-bolivia-1572723035380_v2_450x337.jpg",
          }}
        />
        <Data>
          <DateHour>
            <Day>{"Terça-Feira"}</Day>
            <Hour>17h</Hour>
          </DateHour>
          <Place>Local: CAPS Codó</Place>
          <UserInformation>
            {"Emanuelly Ribeiro"} | {"Psicóloga"}
          </UserInformation>
        </Data>
        <Date>
          <DateText>16/06</DateText>
        </Date>
      </TopInformation>
      {/* caso seja reunião online */}
      <BottomInformation>
        <ButtonRoom
          onPress={() => {
            Linking.openURL(link);
          }}
        >
          <Room>{"Link Meet"}</Room>
        </ButtonRoom>
      </BottomInformation>
    </Container>
  );
}

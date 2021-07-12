import React from "react";
import {
  Container,
  Avatar,
  Data,
  Alerts,
  Alert,
  Name,
  Diagnostic,
} from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function ButtonPatient({
  onPress,
  avatar,
  name,
  diagnostic,
  alertYellow,
  alertGreen,
  alertRed,
}) {
  return (
    <Container onPress={onPress}>
      <Avatar
        source={{
          uri: "https://psicoter.com.br/wp-content/uploads/2019/01/pessoa-flexivel-seja-mais-flexivel-800x533.jpg",
        }}
      />
      <Data>
        <Name>Jasmim Pereira</Name>
        <Diagnostic>Depressão</Diagnostic>
      </Data>
      <Alerts>
        {alertGreen && (
          <Alert type="green">
            <MaterialIcons name="done" size={14} color="#fff" />
          </Alert>
        )}
        {alertYellow && (
          <Alert type="yellow">
            <Ionicons name="alert-outline" size={14} color="#fff" />
          </Alert>
        )}
        {alertRed && (
          <Alert type="red">
            <Ionicons name="alert-outline" size={14} color="#fff" />
          </Alert>
        )}
      </Alerts>
    </Container>
  );
}

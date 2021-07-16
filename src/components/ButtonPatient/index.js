import React, { useState, useEffect } from "react";
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
import { getUserData } from "../../services/firestore";

export default function ButtonPatient({ patientID, status, onPress }) {
  const [patientData, setPatientData] = useState(null);

  const alertGreen = true;
  const alertRed = true;
  const alertYellow = true;

  useEffect(() => {
    if (patientID) {
      getUserData(patientID).then((data) => setPatientData(data));
    }
  }, [patientID]);

  return (
    <Container onPress={onPress}>
      <Avatar
        source={{
          uri: patientData?.photoURL,
        }}
      />
      <Data>
        <Name>{patientData?.name}</Name>
        <Diagnostic>{status}</Diagnostic>
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

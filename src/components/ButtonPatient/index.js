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

import { Ionicons, Feather } from "@expo/vector-icons";
import { getUserData } from "../../services/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ButtonPatient({ patientID, status, onPress }) {
  const [patientData, setPatientData] = useState(null);

  const [alertBlue, setAlertBlue] = useState(false);
  const [alertRed, setAlertRed] = useState(false);
  const [alertYellow, setAlertYellow] = useState(false);

  useEffect(() => {
    if (patientID) {
      getUserData(patientID).then(async (data) => {
        setPatientData(data);
        const lastUpdateTime = data.lastUpdate.toDate().getTime();
        const lastAlertTime = data.lastAlertTime?.toDate().getTime() || 0;

        const lastCheckedUpdateTime = await AsyncStorage.getItem(
          `${patientID}-update`
        )
          .then((value) => parseInt(value))
          .catch(() => 0);

        const lastCheckedAlertTime = await AsyncStorage.getItem(
          `${patientID}-alert`
        )
          .then((value) => parseInt(value))
          .catch(() => 0);

        const daysWithoutUpdate = Math.floor(
          (Date.now() - lastUpdateTime) / (24 * 3600 * 1000)
        );

        const daysWithoutAlert = Math.floor(
          (Date.now() - lastAlertTime) / (24 * 3600 * 1000)
        );

        if (Math.min(daysWithoutUpdate, daysWithoutAlert) > 7) {
          setAlertRed(true);
        }

        if (lastAlertTime != lastCheckedAlertTime) {
          setAlertYellow(true);
        }
        if (lastCheckedUpdateTime != lastUpdateTime) {
          setAlertBlue(true);
        }
      });
    }
  }, [patientID]);

  return (
    <Container onPress={() => onPress(patientData)}>
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
        {alertYellow && (
          <Alert type="yellow">
            <Ionicons name="alert-outline" size={14} color="#fff" />
          </Alert>
        )}
        {alertRed && (
          <Alert type="red">
            <Feather name="clock" size={14} color="#fff" />
          </Alert>
        )}
      </Alerts>
    </Container>
  );
}

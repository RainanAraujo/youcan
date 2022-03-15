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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { parse } from "react-native-svg";

export default function ButtonPatient({ patientID, status, onPress }) {
  const [patientData, setPatientData] = useState(null);

  const [alertGreen, setAlertGreen] = useState(false);
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
        if (daysWithoutUpdate > 7) {
          setAlertYellow(true);
        }

        if (lastAlertTime > lastCheckedAlertTime) {
          await AsyncStorage.setItem(
            `${patientID}-alert`,
            lastAlertTime.toString()
          );
          setAlertRed(true);
        }
        console.log(lastCheckedUpdateTime, lastUpdateTime);
        if (lastCheckedUpdateTime == lastUpdateTime) {
          setAlertGreen(true);
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

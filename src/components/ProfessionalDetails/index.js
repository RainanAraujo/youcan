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

export default function ProfessionalDetails({ professionalID }) {
  const [professionalData, setProfessionalData] = useState({});
  useEffect(() => {
    if (professionalID) {
      getUserData(professionalID).then((data) => setProfessionalData(data));
    }
  }, [professionalID]);

  return (
    <Container>
      <TopInformation>
        <Avatar
          source={{
            uri: professionalData.photoURL,
          }}
        />
        <Data>
          <Day>{professionalData.name}</Day>
          <UserInformation>{professionalData.schooling}</UserInformation>
        </Data>
      </TopInformation>
    </Container>
  );
}

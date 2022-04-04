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
import { currentUser } from "../../services/auth";
import { timestampToDayMonth, timestampToDayName } from "../../utils/date";

export default function MeetDetails({ meetData, onPress, onDelete }) {
  const [participantData, setParticipantData] = useState({});
  const { uid } = currentUser();

  useEffect(() => {
    const participantID = meetData.participants.filter(
      (userID) => userID != uid
    )[0];
    if (participantID) {
      getUserData(participantID).then((data) => setParticipantData(data));
    }
  }, []);

  return (
    <Container>
      {meetData.participants.includes(uid) && onDelete && (
        <TrashButton onPress={onDelete}>
          <FontAwesome5 name="trash" size={16} color="#FE6161" />
        </TrashButton>
      )}
      <TopInformation>
        <Avatar
          source={{
            uri: participantData.photoURL,
          }}
        />
        <Data>
          <DateHour>
            <Day>{timestampToDayName(meetData.startIn)}</Day>
            <Hour>
              {(() => {
                const date = meetData.startIn.toDate();
                const hour = date.getHours();
                const min = date.getMinutes().toString().padStart(2, 0);
                return `${hour}:${min}h`;
              })()}
            </Hour>
          </DateHour>
          {meetData.meetType == "place" && <Place>Local: CAPS Codó</Place>}
          <UserInformation>
            {participantData.name} | {"Psicóloga"}
          </UserInformation>
        </Data>
        <Date>
          <DateText>{timestampToDayMonth(meetData.startIn)}</DateText>
        </Date>
      </TopInformation>
      {meetData.meetType == "online" && (
        <BottomInformation>
          <ButtonRoom
            onPress={() => {
              Linking.openURL(meetData.data);
            }}
          >
            <Room>{"Link Meets"}</Room>
          </ButtonRoom>
        </BottomInformation>
      )}
    </Container>
  );
}

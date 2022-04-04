import React, { useState, useEffect, useCallback } from "react";
import { Container, Label, DropDownContainer, DropDown } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import NewTopicButton from "../../components/NewTopicButton";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from "@expo/vector-icons";
import ButtonPicker from "../../components/ButtonPicker";
import { addMeet } from "../../services/firestore";
import { currentUser } from "../../services/auth";

export default function NewAgenda({ navigation, route }) {
  const { patientID } = route.params || {};
  const { uid } = currentUser();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [meetType, setMeetType] = useState(null);
  const [showTime, setShowTime] = useState(false);
  const [loading, setLoading] = useState(false);

  const [text, setText] = useState("");

  const newMeeting = async () => {
    setLoading(true);
    date.setHours(time.getHours());
    date.setMinutes(time.getMinutes());
    await addMeet(uid, patientID, {
      startIn: date,
      meetType,
      data: text,
    });
    navigation.pop();
  };

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <StatusBar backgroundColor="#fff" />
        {null == null ? (
          <Header
            title="Criar Reunião"
            onBackButtonPress={() => navigation.goBack()}
          />
        ) : (
          <Header
            title="Editar Reunião"
            onBackButtonPress={() => navigation.goBack()}
          />
        )}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <>
            {showDate && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"date"}
                is24Hour={true}
                display="default"
                minimumDate={new Date()}
                onChange={(evt, value) => {
                  setShowDate(false);
                  const selectedDate = value || date;
                  setDate(new Date(selectedDate));
                }}
                onTouchCancel={() => setShowDate(false)}
              />
            )}
            {showTime && (
              <DateTimePicker
                testID="timeTimePicker"
                value={time}
                mode={"time"}
                is24Hour={true}
                display="default"
                onChange={(evt, value) => {
                  setShowTime(false);
                  const selectedTime = value || date;
                  setTime(new Date(selectedTime));
                }}
                onTouchCancel={() => setShowTime(false)}
              />
            )}
            <Label>Data</Label>
            <ButtonPicker
              text={
                date.getDate() +
                "-" +
                date.getMonth() +
                "-" +
                date.getFullYear()
              }
              onPress={() => setShowDate(true)}
              Icon={() => (
                <MaterialIcons name="date-range" size={24} color="#373D53" />
              )}
            />
            <Label>Horas</Label>
            <ButtonPicker
              text={time.getHours() + "h"}
              onPress={() => setShowTime(true)}
              Icon={() => (
                <AntDesign name="clockcircleo" size={24} color="#373D53" />
              )}
            />
            <Label>Tipo de reunião</Label>
            <DropDownContainer>
              <DropDown
                mode="dropdown"
                selectedValue={meetType}
                onValueChange={(itemValue, itemIndex) => setMeetType(itemValue)}
              >
                <DropDown.Item
                  label="Selecionar"
                  selectedValue
                  enabled={false}
                />
                <DropDown.Item label="Online" value="online" />
                <DropDown.Item label="Presencial" value="place" />
              </DropDown>
            </DropDownContainer>
            {meetType && (
              <>
                {meetType == "online" ? (
                  <Label>Link da reunião meet</Label>
                ) : (
                  <Label>Local da reunião</Label>
                )}
                <Input value={text} onChangeText={(value) => setText(value)} />
              </>
            )}
            <Button loading={loading} text="Salvar" onPress={newMeeting} />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

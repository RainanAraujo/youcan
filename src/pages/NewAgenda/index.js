import React, { useState, useEffect, useCallback } from "react";
import { Container, Label } from "./styles";
import { SafeAreaView, ScrollView, StatusBar, Platform } from "react-native";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import NewTopicButton from "../../components/NewTopicButton";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from "@expo/vector-icons";

export default function NewAgenda({ navigation, route }) {
  // const { userConnectionID, annotation } = route.params || {};

  // const [title, setTitle] = useState(annotation?.title || "");
  // const [text, setText] = useState(annotation?.text || "");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  const [showTime, setShowTime] = useState(false);

  const [text, setText] = useState("");

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <StatusBar backgroundColor="#fff" />
        {/* {route.params?.annotation == null ? ( */}
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
                  const selectedDate = value || date;
                  setDate(new Date(selectedDate));
                  setShowDate(false);
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
                  const selectedTime = value || date;
                  setTime(new Date(selectedTime));
                  setShowTime(false);
                }}
                onTouchCancel={() => setShowTime(false)}
              />
            )}
            <Label>Data</Label>
            <Input
              value={date.getDate() + ""}
              onPress={() => setShowDate(true)}
              Icon={() => (
                <MaterialIcons name="date-range" size={24} color="#373D53" />
              )}
            />
            <Label>Horas</Label>+
            <Input
              value={time.getHours() + ""}
              onPress={() => setShowTime(true)}
              Icon={() => (
                <AntDesign name="clockcircleo" size={24} color="#373D53" />
              )}
            />
            <Label>Link da reunião</Label>
            <Input value={text} onChangeText={(value) => setText(value)} />
            <Button text="Salvar" />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

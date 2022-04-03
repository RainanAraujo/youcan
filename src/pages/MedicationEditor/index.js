import React, { useState, useEffect } from "react";
import { Container, Label, TextCentred } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import NewTopicButton from "../../components/NewTopicButton";
import { Ionicons } from "@expo/vector-icons";
import ButtonPicker from "../../components/ButtonPicker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MedicationEditor({ navigation, route }) {
  const [showTime, setShowTime] = useState(false);

  const { medication } = route.params || {};
  const [title, setTitle] = useState(medication?.title || "");
  const [initialHour, setInitialHour] = useState(
    new Date(medication?.initialHour || Date.now())
  );
  const [interval, setInterval] = useState(medication?.interval || 6);

  const saveMedicationAlert = async () => {
    const medicationID =
      medication?.id || Math.random().toString(36).substring(2);
    const medicationAlert = {
      id: medicationID,
      title,
      initialHour,
      interval,
    };
    if (title != null) {
      const dataString = await AsyncStorage.getItem("medications");
      if (dataString != null) {
        let data = JSON.parse(dataString);
        data.medications = data.medications.filter(
          (item) => item.id !== medicationID
        );
        data.medications.push(medicationAlert);
        await AsyncStorage.setItem("medications", JSON.stringify(data));

        navigation.goBack();
      } else {
        await AsyncStorage.setItem(
          "medications",
          JSON.stringify({ medications: [medicationAlert] })
        );
      }
    }
  };

  useEffect(() => {
    const numIntervals = 24 / interval;
    for (var i = 0; i < numIntervals; i++) {
      let currentTime = new Date(
        initialHour.getTime() + interval * 60 * 60 * 1000 * i
      );
    }
  }, [initialHour, interval]);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        {showTime && (
          <DateTimePicker
            testID="timeTimePicker"
            value={initialHour}
            mode={"time"}
            is24Hour={true}
            display="default"
            onChange={(evt, value) => {
              setInitialHour(new Date(value));
              setShowTime(false);
            }}
            onTouchCancel={() => setShowTime(false)}
          />
        )}
        <StatusBar backgroundColor="#fff" />
        {route.params?.medication == null ? (
          <Header
            title="Nova medicação"
            onBackButtonPress={() => navigation.goBack()}
          />
        ) : (
          <Header
            title="Editar medicação"
            onBackButtonPress={() => navigation.goBack()}
          />
        )}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <>
            <Label>Nome da medicação</Label>
            <Input
              value={title}
              onChangeText={(value) => setTitle(value)}
            ></Input>
            <Label>Intervalo de uso (horas)</Label>
            <Input
              type={"numeric"}
              value={interval}
              Placeholder={"8"}
              onChangeText={(value) => setInterval(value)}
            ></Input>
            <Label>Hora de início</Label>
            <ButtonPicker
              text={initialHour.getHours() + ":" + initialHour.getMinutes()}
              onPress={() => setShowTime(true)}
            />
            <Button text="Salvar" onPress={() => saveMedicationAlert()} />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

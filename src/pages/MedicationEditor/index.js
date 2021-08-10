import React, { useState, useEffect, useCallback } from "react";
import { Container, Label, ContainerHour, TextCentred, Hour } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import NewTopicButton from "../../components/NewTopicButton";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MedicationEditor({ navigation, route }) {
  const [showTime, setShowTime] = useState(false);

  const { medication } = route.params || {};
  const [title, setTitle] = useState(medication?.title || "");
  const [initialHour, setInitialHour] = useState(
    medication?.initialHour || new Date()
  );
  const [interval, setInterval] = useState(medication?.interval);
  const [hours, setHours] = useState(medication?.hours || []);

  const saveMedicationAlert = async () => {
    const medicationID =
      medication?.id || Math.random().toString(36).substring(2);
    const medicationAlert = {
      id: medicationID,
      title,
      initialHour,
      interval,
    };
    if ([title, text].some((val) => val != null)) {
      const dataString = await AsyncStorage.getItem("medications");
      if (dataString != null) {
        let data = JSON.parse(dataString);
        data.medication = data.medication.filter(
          (item) => item.id !== medicationID
        );
        console.log(data);
        data.medication.push(medicationAlert);
        await AsyncStorage.setItem("medications", JSON.stringify(data));

        navigation.goBack();
      } else {
        await AsyncStorage.setItem(
          "medication",
          JSON.stringify({ medications: [medicationAlert] })
        );
      }
    }
  };

  useEffect(() => {
    const numIntervals = 24 / interval;
    setHours([]);
    for (var i = 0; i < numIntervals; i++) {
      let currentTime = new Date(
        initialHour.getTime() + interval * 60 * 60 * 1000 * i
      );
      setHours((list) => {
        list.push(
          currentTime.getHours() + ":" + currentTime.getMinutes() + "h"
        );
        return list;
      });
    }
    console.log(hours);
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
              const selectedTime = value || time;
              setInitialHour(new Date(selectedTime));
              setShowTime(false);
            }}
            onTouchCancel={() => setShowTime(false)}
          />
        )}
        <StatusBar backgroundColor="#fff" />
        {route.params?.annotation == null ? (
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
            <Input
              value={time.getHours() + ":" + time.getMinutes()}
              onPress={() => setShowTime(true)}
            ></Input>
            <TextCentred>Horários de uso</TextCentred>
            <ContainerHour>
              {hours.map((item, index) => {
                return <Hour key={index}>{hours.length <= 5 && item}</Hour>;
              })}
            </ContainerHour>

            <Button text="Salvar" onPress={saveMedicationAlert} />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

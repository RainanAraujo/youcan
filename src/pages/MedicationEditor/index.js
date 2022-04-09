import React, { useState, useEffect } from "react";
import { Container, Label, DropDown, DropDownContainer } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ButtonPicker from "../../components/ButtonPicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";

export default function MedicationEditor({ navigation, route }) {
  const [showTime, setShowTime] = useState(false);

  const { medication } = route.params || {};
  const [title, setTitle] = useState(medication?.title || "");
  const [initialHour, setInitialHour] = useState(
    new Date(medication?.initialHour || Date.now())
  );
  const [interval, setInterval] = useState(medication?.interval);

  const saveMedicationAlert = async () => {
    const medicationID = medication?.id || Date.now();

    for (const notificationID in medication?.notificationChannels) {
      await Notifications.cancelScheduledNotificationAsync(notificationID);
    }

    notificationChannels = [];
    const hoursNumber = 24 / interval;
    for (const index of [...Array(hoursNumber).keys()]) {
      const notificationTime = new Date(
        initialHour.getTime() + index * interval * 60 * 60 * 1000
      );

      const notificationID = await Notifications.scheduleNotificationAsync({
        content: {
          title: "Hora de tomar " + title,
          body: "É fundamental tomar seus medicamentos no horário correto.",
        },
        trigger: {
          hour: notificationTime.getHours(),
          minute: notificationTime.getMinutes(),
          repeats: true,
        },
      });
      notificationChannels.push(notificationID);
    }

    const medicationAlert = {
      id: medicationID,
      title,
      initialHour,
      interval,
      notificationChannels,
    };
    if (title != null) {
      const dataString = await AsyncStorage.getItem("medications");
      if (dataString != null) {
        let data = JSON.parse(dataString);
        data.medications = data.medications.filter(
          (item) => item.id !== medicationID
        );
        data.medications.unshift(medicationAlert);
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
              setShowTime(false);
              value && setInitialHour(new Date(value));
            }}
            onTouchCancel={() => setShowTime(false)}
          />
        )}
        <StatusBar backgroundColor="#fff" />
        {medication == null ? (
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
            <DropDownContainer>
              <DropDown
                mode="dropdown"
                selectedValue={interval}
                onValueChange={(value) => setInterval(value)}
              >
                <DropDown.Item
                  label="Selecionar"
                  value=""
                  selectedValue
                  enabled={false}
                />
                <DropDown.Item label="4 horas" value={4} />
                <DropDown.Item label="6 horas" value={6} />
                <DropDown.Item label="8 horas" value={8} />
                <DropDown.Item label="12 horas" value={12} />
                <DropDown.Item label="24 horas" value={24} />
              </DropDown>
            </DropDownContainer>
            <Label>Hora de início</Label>
            <ButtonPicker
              text={
                initialHour.getHours() +
                ":" +
                initialHour.getMinutes().toString().padStart(2, 0) +
                "h"
              }
              onPress={() => setShowTime(true)}
            />
            <Button text="Salvar" onPress={() => saveMedicationAlert()} />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

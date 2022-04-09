import React, { useState, useEffect, useCallback } from "react";
import { Container, Name } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import NewTopicButton from "../../components/NewTopicButton";
import Header from "../../components/Header";
import MedicationButton from "../../components/MedicationButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";

export default function MedicationManage({ navigation }) {
  const [medications, setMedications] = useState([]);

  const onDeleteMedication = async (id) => {
    const dataString = await AsyncStorage.getItem("medications");
    const data = JSON.parse(dataString);
    const { notificationChannels } = data.medications.filter(
      (item) => item.id === id
    );
    for (const notificationID in notificationChannels) {
      await Notifications.cancelScheduledNotificationAsync(notificationID);
    }
    data.medications = data.medications.filter((item) => item.id !== id);
    await AsyncStorage.setItem("medications", JSON.stringify(data));
    setMedications(data.medications);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      AsyncStorage.getItem("medications")
        .then((dataString) => {
          const data = JSON.parse(dataString);
          if (data) {
            setMedications(data.medications);
          }
        })
        .catch((err) => console.log(err));
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <StatusBar backgroundColor="#fff" />
        <Header title="Receita" onBackButtonPress={() => navigation.goBack()} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <>
            <NewTopicButton
              text="Nova medicação"
              onPress={() => navigation.navigate("medicationEditor")}
            />

            {medications.map((medication) => {
              const { id, title, interval, initialHour } = medication;
              const initial = new Date(initialHour);
              const hours = [];
              const hoursNumber = 24 / interval;
              for (const index in [...Array(hoursNumber).keys()]) {
                const hour = initial.getHours();
                const min = initial.getMinutes().toString().padStart(2, 0);
                hours.push(`${hour}:${min}h`);
                initial.setTime(initial.getTime() + interval * 60 * 60 * 1000);
              }

              return (
                <MedicationButton
                  key={id}
                  onDelete={() => onDeleteMedication(id)}
                  name={title}
                  hours={hours.join(" | ")}
                  onPress={() =>
                    navigation.navigate("medicationEditor", {
                      medication,
                    })
                  }
                />
              );
            })}
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

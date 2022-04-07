import React, { useState, useEffect, useCallback } from "react";
import { Container, Name } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import NewTopicButton from "../../components/NewTopicButton";
import Header from "../../components/Header";
import MedicationButton from "../../components/MedicationButton";
import { useUserContext } from "../../context/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MedicationManage({ navigation }) {
  const { selectedUser } = useUserContext();
  const [medications, setMedications] = useState([]);

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
              const initial = new Date(medication.initialHour);
              const interval = medication.interval;
              const hours = [];
              for (const index of Array(3)) {
                const hour = initial.getHours();
                const min = initial.getMinutes().toString().padStart(2, 0);
                hours.push(`${hour}:${min}h`);
                initial.setTime(initial.getTime() + interval * 60 * 60 * 1000);
              }

              return (
                <MedicationButton
                  onDelete={async () => {
                    const dataString = await AsyncStorage.getItem(
                      "medications"
                    );
                    let data = JSON.parse(dataString);
                    data.medications = data.medications.filter(
                      (item) => item.id !== medication.id
                    );
                    await AsyncStorage.setItem(
                      "medications",
                      JSON.stringify(data)
                    );
                    setMedications(data.medications);
                  }}
                  name={medication.title}
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

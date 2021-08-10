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
            <Name>{selectedUser.name}</Name>
            <NewTopicButton
              text="Nova medicação"
              onPress={() => navigation.navigate("medicationEditor")}
            />

            {medications.map((medication) => (
              <MedicationButton
                name={medication.name}
                hours={"16H|17H|20H"}
                onPress={() =>
                  navigation.navigate("medicationEditor", {
                    medication,
                  })
                }
              />
            ))}
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

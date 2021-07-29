import React, { useState, useEffect, useCallback } from "react";
import { Container, Name } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import NewTopicButton from "../../components/NewTopicButton";
import Header from "../../components/Header";
import { useUserContext } from "../../context/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AgendaDetails from "../../components/AgendaDetails";

export default function Agenda({ navigation }) {
  const { selectedUser } = useUserContext();
  const [annotations, setAnnotations] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      AsyncStorage.getItem(selectedUser.userConnectionID)
        .then((dataString) => {
          const data = JSON.parse(dataString);
          if (data) {
            setAnnotations(data.annotations);
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
        <Header title="Agenda" onBackButtonPress={() => navigation.goBack()} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <>
            <Name>Jasmim Pereira</Name>
            <NewTopicButton
              text="Nova Reunião"
              onPress={() => navigation.navigate("newAgenda")}
            />
            <AgendaDetails />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

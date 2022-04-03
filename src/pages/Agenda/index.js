import React, { useState, useEffect, useCallback } from "react";
import { Container, Name } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import NewTopicButton from "../../components/NewTopicButton";
import Header from "../../components/Header";
import { useUserContext } from "../../context/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AgendaDetails from "../../components/AgendaDetails";
import { getMeets } from "../../services/firestore";

export default function Agenda({ navigation, route }) {
  const { isEditor } = route.params || {};
  const { selectedUser } = useUserContext();
  const [meets, setMeets] = useState([]);

  const loadMeets = async () => {
    const meets = await getMeets(selectedUser.uid);
    setMeets(meets);
  };

  useEffect(() => {
    loadMeets();
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
            {isEditor == true && (
              <NewTopicButton
                text="Nova reunião"
                onPress={() =>
                  navigation.navigate("newAgenda", {
                    patientID: selectedUser.uid,
                  })
                }
              />
            )}
            <AgendaDetails onDelete={() => {}} />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

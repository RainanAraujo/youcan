import React, { useState, useEffect, useCallback } from "react";
import { Container, Name } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import NewTopicButton from "../../components/NewTopicButton";
import Header from "../../components/Header";
import { useUserContext } from "../../context/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MeetDetails from "../../components/AgendaDetails";
import { deleteMeet, getMeets } from "../../services/firestore";

export default function Agenda({ navigation, route }) {
  const { isEditor, userID } = route.params || {};
  const { selectedUser } = useUserContext();
  const [meets, setMeets] = useState([]);

  const loadMeets = async () => {
    const meets = await getMeets(userID);
    setMeets(meets);
  };

  const removeMeet = async (meetID) => {
    await deleteMeet(meetID);
    setMeets((list) => list.filter((meet) => meet.id != meetID));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadMeets();
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
            {meets.map((meet) => (
              <MeetDetails
                meetData={meet}
                onDelete={() => removeMeet(meet.id)}
              />
            ))}
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

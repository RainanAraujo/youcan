import React, { useState, useEffect, useCallback } from "react";
import { Container, Name } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import NewTopicButton from "../../components/NewTopicButton";
import Header from "../../components/Header";
import MedicationButton from "../../components/MedicationButton";
import { useUserContext } from "../../context/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MedicationManage({ navigation }) {
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
            <Name>Jasmim Pereira</Name>
            <NewTopicButton
              text="Nova medicação"
              onPress={() => navigation.navigate("medicationEditor")}
            />

            <MedicationButton
              name={"Rifocina"}
              hours={"16H|17H|20H"}
              onPress={() =>
                navigation.navigate("medicationEditor", {
                  userConnectionID: selectedUser.userConnectionID,
                  annotation,
                })
              }
            />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

import React, { useState, useEffect } from "react";
import { Container, Name } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Header from "../../components/Header";
import { useUserContext } from "../../context/userContext";
import ProfessionalDetails from "../../components/ProfessionalDetails";
import { getProfessionalList } from "../../services/firestore";
import { currentUser } from "../../services/auth";

export default function YourProfessionals({ navigation }) {
  const { userConnections } = useUserContext();

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <StatusBar backgroundColor="#fff" />
        <Header
          title="Seus Profissionais"
          onBackButtonPress={() => navigation.goBack()}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          {userConnections.map((connection) => (
            <ProfessionalDetails professionalID={connection.professional} />
          ))}
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

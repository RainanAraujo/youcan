import React, { useState, useEffect, useCallback } from "react";
import { Container, Name } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import NewTopicButton from "../../components/NewTopicButton";
import Header from "../../components/Header";
import { useSelectedUser } from "../../context/selectedUserContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import InteractionButton from "../../components/InteractionButton";

export default function QuizManage({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <StatusBar backgroundColor="#fff" />
        <Header title="Questionário Diário" navigation={navigation} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <>
            <Name>Jasmim Pereira</Name>
            <NewTopicButton text="Nova Pergunta" />
            <InteractionButton
              onPress={() => navigation.navigate("questionEditor")}
              description="Audio / Texto"
              title="Descreva seu dia Hoje"
              Icon={() => (
                <MaterialCommunityIcons
                  name="briefcase-edit-outline"
                  size={26}
                  color="#373D53"
                />
              )}
              type="gray"
            />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

import React, { useState, useEffect, useCallback } from "react";
import { Container } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Question from "../../components/Question";
import Header from "../../components/Header";

export default function QuestionPreview({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <StatusBar backgroundColor="#fff" />
        <Header title="Visualizar Pergunta" navigation={navigation} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <>
            <Question />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

import React, { useState, useEffect, useCallback } from "react";
import { Container } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Question from "../../components/Question";
import Header from "../../components/Header";

export default function QuestionPreview({ navigation, route }) {
  const _question = route.params?.question || {};

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <StatusBar backgroundColor="#fff" />
        <Header
          title="Visualizar Pergunta"
          onBackButtonPress={() => navigation.goBack()}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <>
            <Question questionData={_question} />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

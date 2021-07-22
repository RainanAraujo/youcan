import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  ButtonBack,
  Header,
  ProgressBarContainer,
  ProgressBar,
  ButtonGroup,
} from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Question from "../../components/Question";
import Button from "../../components/Button";
import { MaterialIcons } from "@expo/vector-icons";

export default function QuizDiary({ navigation }) {
  const questions = [
    { name: "teste", description: "teste", dataType: "text", options: [] },
    { name: "teste", description: "teste", dataType: "text", options: [] },
    { name: "teste", description: "teste", dataType: "text", options: [] },
  ];
  const [step, setStep] = useState(1);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <StatusBar backgroundColor="#fff" />
      <Container>
        <Header>
          <ButtonBack onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-left" size={28} color="black" />
          </ButtonBack>
          <ProgressBarContainer>
            <ProgressBar range={100 / questions.length} currentStep={step} />
          </ProgressBarContainer>
        </Header>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <>
            <Question />
            <ButtonGroup>
              <Button
                text={"Voltar"}
                buttonSmall
                gray
                onPress={() => setStep(step - 1)}
              />
              <Button
                text={step == questions.length ? "Finalizar" : "Próximo"}
                buttonSmall
                onPress={() => setStep(step + 1)}
              />
            </ButtonGroup>
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

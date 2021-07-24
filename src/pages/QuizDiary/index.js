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
    { name: "teste", description: "teste", dataType: "tags", options: [] },
    {
      name: "teste",
      description: "teste",
      dataType: "textOrAudio",
      options: [],
    },
    {
      name: "teste",
      description: "teste",
      dataType: "multiply",
      options: ["teste", "teste2", "teste3"],
    },
  ];
  const [questiona, setQuestions] = useState([]);
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < questions.length) {
      setStep((value) => value + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep((value) => value - 1);
    }
  };

  useEffect(() => {}, []);

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
            <Question questionData={questions[step - 1]} />
            <ButtonGroup>
              <Button
                text={"Voltar"}
                buttonSmall
                gray
                onPress={() => previousStep()}
              />
              <Button
                text={step == questions.length ? "Finalizar" : "Próximo"}
                buttonSmall
                onPress={() => nextStep()}
              />
            </ButtonGroup>
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

import React, { useState, useEffect } from "react";
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
import { currentUser } from "../../services/auth";
import { getQuestionList, createAnswer } from "../../services/firestore";
import { uploadFile } from "../../services/storage";
import { formatDate } from "../../utils/date";

export default function QuizDiary({ navigation, route }) {
  const { userConnections } = route.params;
  const { uid } = currentUser();
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState({});
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const nextStep = async () => {
    const question = questions[step - 1];

    if (step <= questions.length) {
      setLoading(true);
      let currentAnswer = Object.assign({}, answer);

      if (question.dataType === "textOrAudio" && answer.audio !== "") {
        console.log(question.dataType);
        const formattedDate = formatDate();
        currentAnswer.audio = await uploadFile(
          uid,
          question.id + "_" + formattedDate,
          answer.audio
        );
      }
      await createAnswer(uid, question.id, {
        dataType: question.dataType,
        questionText: question.description,
        data: currentAnswer,
      });
      if (step < questions.length) {
        setStep((value) => value + 1);
      } else {
        navigation.goBack();
      }
      setLoading(false);
    }
  };

  const previousStep = async () => {
    if (step > 1) {
      setStep((value) => value - 1);
    } else {
      navigation.goBack();
    }
  };

  useEffect(() => {
    console.log(userConnections);
    const userConnectionsIDList = userConnections.map(
      (userConnection) => userConnection.id
    );
    getQuestionList(userConnectionsIDList).then((list) => setQuestions(list));
  }, []);

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
            {questions.length > 0 && (
              <Question
                questionData={questions[step - 1]}
                onChange={setAnswer}
              />
            )}
            <ButtonGroup>
              <Button text={"Voltar"} buttonSmall gray onPress={previousStep} />
              <Button
                loading={loading}
                text={step == questions.length ? "Finalizar" : "Próximo"}
                buttonSmall
                onPress={nextStep}
              />
            </ButtonGroup>
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

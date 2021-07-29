import React, { useState, useEffect, useCallback } from "react";
import { Container, Name, Period, Status, Title, Question } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import PreviewAnswer from "../../components/PreviewAnswer";
import Header from "../../components/Header";
import ButtonAudioPlay from "../../components/ButtonAudioPlay";
import { timestampToDayMonth } from "../../utils/date";
import { useUserContext } from "../../context/userContext";

export default function Historic({ navigation, route }) {
  const { selectedUser } = useUserContext();
  const answerList = route.params?.answer || [];

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <StatusBar backgroundColor="#fff" />
        <Header
          title="Histórico"
          onBackButtonPress={() => navigation.goBack()}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <>
            <Period>{timestampToDayMonth(answerList[0].createdAt)}</Period>
            <Title>Acontecimento extraordinário</Title>
            <ButtonAudioPlay currentTime={30} timeTotal={60} />
            <PreviewAnswer
              text={
                "Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto "
              }
            />
            <Title>Relato do dia</Title>
            {answerList.map((answer) => {
              const question = selectedUser.questions.filter(
                (item) => item.id === answer.questionID
              )[0];

              console.log(answer);

              if (answer.dataType === "text") {
                if (answer.data === null) return;
                return (
                  <>
                    <Question>{question.description} | Texto</Question>
                    <PreviewAnswer text={answer.data} />
                  </>
                );
              } else if (answer.dataType === "textOrAudio") {
                return (
                  <>
                    <Question>{question.description} | Texto ou Áudio</Question>
                    {answer.data.text != "" && (
                      <PreviewAnswer text={answer.data.text} />
                    )}
                    {answer.data.audio != "" && (
                      <ButtonAudioPlay uri={answer.data.audio} />
                    )}
                  </>
                );
              } else if (answer.dataType === "multiply") {
                let text = "";
                for (let index in answer.data) {
                  if (answer.data[index]) {
                    text +=
                      (text == "" ? "" : ", ") + selectedUser.options[index];
                  }
                }
                return (
                  <>
                    <Question>
                      {question.description} | Múltipla Escolha
                    </Question>
                    <PreviewAnswer text={text} />
                  </>
                );
              } else if (answer.dataType === "tags") {
                if (answer.data.length === 0) return;
                let text = "";
                for (let item of answer.data) {
                  text += (text == "" ? "" : ", ") + item;
                }
                return (
                  <>
                    <Question>
                      {question.description} | Tags de Sentimento
                    </Question>
                    <PreviewAnswer text={text} />
                  </>
                );
              }
            })}
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

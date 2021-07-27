import React, { useState, useEffect, useCallback } from "react";
import { Container, Name, Period, Status, Title, Question } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import PreviewAnswer from "../../components/PreviewAnswer";
import Header from "../../components/Header";
import ButtonAudioPlay from "../../components/ButtonAudioPlay";

export default function Historic({ navigation, route }) {
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
            <Period>26/06</Period>
            <Status>Neste deia você sentiu: ALEGRIA</Status>
            <Title>Acontecimento extraordinário</Title>
            <ButtonAudioPlay currentTime={30} timeTotal={60} />
            <PreviewAnswer
              text={
                "Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto Teste de texto "
              }
            />
            <Title>Relato do dia</Title>

            <Question>
              Qual seu humor que poderia descrever seu dia hoje?
            </Question>
            <PreviewAnswer text={"Teste de texto T"} />
            <Question>Descreva como foi seu dia.</Question>
            <ButtonAudioPlay currentTime={30} timeTotal={60} />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

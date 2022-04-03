import React, { useState, useEffect, useCallback } from "react";
import { Container, QuestionText } from "./styles";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import Header from "../../components/Header";
import Button from "../../components/Button";
import TagAdd from "../../components/TagAdd";
import { Description } from "../../components/Question/styles";
import ButtonAudioRecord from "../../components/ButtonAudioRecord";
import Input from "../../components/Input";

export default function RegisterEvent({ navigation, route }) {
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <StatusBar backgroundColor="#fff" />
      <Container>
        <Header
          title="Registrar Acontecimento"
          onBackButtonPress={() => navigation.goBack()}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <>
            <Description>
              Deixe registrado caso você está passando por uma forte emoção
              momentânea.
            </Description>
            <QuestionText>Como você se sente? (opcional)</QuestionText>

            <TagAdd onChange={() => {}}></TagAdd>
            <TagAdd onChange={() => {}}></TagAdd>
            <TagAdd onChange={() => {}}></TagAdd>

            <QuestionText>Fale comigo</QuestionText>
            <Input bigArea={true} Placeholder={"Digite aqui"}></Input>
            <ButtonAudioRecord></ButtonAudioRecord>
            <View style={{ height: 20 }} />
            <Button loading={loading} text={"Salvar"} />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

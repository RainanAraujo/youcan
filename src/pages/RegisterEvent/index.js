import React, { useState, useEffect, useCallback } from "react";
import { Container, QuestionText } from "./styles";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import Header from "../../components/Header";
import Button from "../../components/Button";
import TagAdd from "../../components/TagAdd";
import { Description } from "../../components/Question/styles";
import ButtonAudioRecord from "../../components/ButtonAudioRecord";
import Input from "../../components/Input";
import { createAlert } from "../../services/firestore";
import { currentUser } from "../../services/auth";
import { uploadFile } from "../../services/storage";

export default function RegisterEvent({ navigation, route }) {
  const { uid } = currentUser();
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([null, null, null]);
  const [text, setText] = useState("");
  const [audio, setAudio] = useState("");

  const updateTags = (value, index) => {
    setTags((tags) => {
      tags[index] = value;
      return tags.slice();
    });
  };

  const newAlert = async () => {
    setLoading(true);
    let audioURL = "";
    if (audio != "") {
      audioURL = await uploadFile(uid, "alert_" + Date.now(), audio);
    }
    await createAlert(uid, {
      tags,
      textOrAudio: {
        text,
        audio: audioURL,
      },
    });
    navigation.goBack();
  };

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

            <TagAdd onChange={(value) => updateTags(value, 0)}></TagAdd>
            <TagAdd onChange={(value) => updateTags(value, 1)}></TagAdd>
            <TagAdd onChange={(value) => updateTags(value, 2)}></TagAdd>

            <QuestionText>Fale comigo</QuestionText>
            <Input
              value={text}
              onChangeText={setText}
              bigArea={true}
              Placeholder={"Digite aqui"}
            ></Input>
            <ButtonAudioRecord onRecord={setAudio}></ButtonAudioRecord>
            <View style={{ height: 20 }} />
            <Button loading={loading} text={"Salvar"} onPress={newAlert} />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

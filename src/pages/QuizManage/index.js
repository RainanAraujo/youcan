import React, { useState, useEffect, useCallback } from "react";
import { Container, Name } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import NewTopicButton from "../../components/NewTopicButton";
import Header from "../../components/Header";
import { useUserContext } from "../../context/userContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import InteractionButton from "../../components/InteractionButton";
import { getQuestionList } from "../../services/firestore";

export default function QuizManage({ navigation }) {
  const { selectedUser } = useUserContext();

  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getQuestionList([selectedUser.userConnectionID])
        .then((list) => setQuestionList(list))
        .catch((err) => console.log(err));
    });

    return unsubscribe;
  }, [navigation]);

  const textTypeSelector = {
    text: "Texto",
    textOrAudio: "Audio / Texto",
    multiply: "múltipla Escolha",
    tags: "Tags de sentimento",
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <StatusBar backgroundColor="#fff" />
        <Header
          title="Questionário Diário"
          onBackButtonPress={() => navigation.goBack()}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <>
            <Name>{selectedUser.name}</Name>
            <NewTopicButton
              text="Nova Pergunta"
              onPress={() =>
                navigation.navigate("questionEditor", {
                  question: null,
                })
              }
            />
            {questionList.map((question) => (
              <InteractionButton
                onPress={() =>
                  navigation.navigate("questionEditor", { question })
                }
                description={textTypeSelector[question.dataType]}
                title={question.name}
                Icon={() => (
                  <MaterialCommunityIcons
                    name="briefcase-edit-outline"
                    size={26}
                    color="#373D53"
                  />
                )}
                type="gray"
              />
            ))}
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

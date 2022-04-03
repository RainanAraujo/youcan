import React, { useState, useEffect, useCallback } from "react";
import { Container, Name, Period } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Input from "../../components/Input";
import Header from "../../components/Header";
import ButtonHistoric from "../../components/ButtonHistoric";
import { getAnswers } from "../../services/firestore";
import { MaterialIcons } from "@expo/vector-icons";
import { useUserContext } from "../../context/userContext";
import { formatDate } from "../../utils/date";

export default function HistoricPatient({ navigation, route }) {
  const { selectedUser } = useUserContext();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    getAnswers(selectedUser.questions.map((item) => item.id))
      .then((list) => {
        const dates = [
          ...new Set(list.map((item) => formatDate(item.createdAt))),
        ];
        const answersGroups = [];
        for (let date of dates) {
          answersGroups.push(
            list.filter((item) => formatDate(item.createdAt) === date)
          );
        }
        console.log(answersGroups);
        setAnswers(answersGroups);
      })
      .catch((err) => console.log(err));
  }, []);

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
            <Name>{selectedUser.name}</Name>
            <Input
              Icon={() => (
                <MaterialIcons name="date-range" size={24} color="#373D53" />
              )}
              Placeholder="Filtrar por data"
            />
            <Period>Este mês</Period>
            {answers.map((answer) => (
              <ButtonHistoric
                date={answer[0].createdAt}
                onPress={() => navigation.navigate("historic", { answer })}
                tags={answer.filter((item) => item.dataType == "tags")[0]?.data}
              />
            ))}
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

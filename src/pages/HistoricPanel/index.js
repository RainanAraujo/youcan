import React, { useState, useEffect, useCallback } from "react";
import { Container, Name, Period } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Input from "../../components/Input";
import Header from "../../components/Header";
import ButtonHistoric from "../../components/ButtonHistoric";
import { getAnswers } from "../../services/firestore";
import { MaterialIcons } from "@expo/vector-icons";
import { useUserContext } from "../../context/userContext";
import {
  timestampToDayMonth,
  timestampToDayName,
  getFormattedDate,
} from "../../utils/date";

export default function HistoricPanel({ navigation, route }) {
  const { selectedUser } = useUserContext();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    getAnswers(selectedUser.questions.map((item) => item.id))
      .then((list) => {
        const dates = [
          ...new Set(list.map((item) => getFormattedDate(item.createdAt))),
        ];
        const answersGroups = [];
        for (let date of dates) {
          answersGroups.push(
            list.filter((item) => getFormattedDate(item.createdAt) === date)
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
                day={timestampToDayName(answer[0].createdAt)}
                date={timestampToDayMonth(answer[0].createdAt)}
                onPress={() => navigation.navigate("historic", { answer })}
              />
            ))}
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

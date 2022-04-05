import React, { useState, useEffect, useCallback } from "react";
import { Container, Name, Period } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Input from "../../components/Input";
import Header from "../../components/Header";
import ButtonHistoric from "../../components/ButtonHistoric";
import {
  getAlerts,
  getAnswers,
  getQuestionList,
} from "../../services/firestore";
import { formatDate } from "../../utils/date";

export default function HistoricPanel({ navigation, route }) {
  const { userConnections } = route.params || {};
  const [eventsGroups, setEventsGroups] = useState([]);

  const loadAnswers = async (userConnectionsIDList) => {
    const targetUser = userConnections[0].patient;
    const questions = await getQuestionList(userConnectionsIDList);
    const answersList = await getAnswers(questions.map((item) => item.id));
    const alertsList = await getAlerts(targetUser);
    const dates = [
      ...new Set(
        [...answersList, ...alertsList].map((item) =>
          formatDate(item.createdAt)
        )
      ),
    ];
    const eventGroupsList = [];

    for (let date of dates) {
      const answersFromDate = answersList.filter(
        (item) => formatDate(item.createdAt) === date
      );
      const alertsFromDate = alertsList.filter(
        (item) => formatDate(item.createdAt) === date
      );
      eventGroupsList.push({
        answers: answersFromDate.length > 0 ? answersFromDate : null,
        alerts: alertsFromDate.length > 0 ? alertsFromDate : null,
      });
    }
    setEventsGroups(eventGroupsList);
  };

  useEffect(() => {
    const userConnectionsIDList = userConnections.map(
      (userConnection) => userConnection.id
    );
    console.log(userConnections);
    loadAnswers(userConnectionsIDList);
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
            <Period>Este mês</Period>
            {eventsGroups.map((eventGroup, index) => {
              const tags = [
                ...(eventGroup.answers?.filter(
                  (item) => item.dataType == "tags"
                ) || []),
                ...(eventGroup.alerts?.map((item) => {
                  data: item.tags;
                }) || []),
              ];

              return (
                <ButtonHistoric
                  key={index}
                  date={(eventGroup.answers || eventGroup.alerts)[0]?.createdAt}
                  onPress={() =>
                    navigation.navigate("historic", { eventGroup })
                  }
                  tags={tags[0]?.data}
                />
              );
            })}
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

import React, { useEffect, useState } from "react";
import {
  Container,
  Topic,
  Title,
  Avatar,
  Name,
  ProfileDescriptions,
  LeftContent,
  RightContent,
  Description,
  Status,
  Item,
  TextItem,
} from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import ButtonNotification from "../../components/ButtonNotification";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../../components/Header";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import InteractionButton from "../../components/InteractionButton";
import { useUserContext } from "../../context/userContext";
import {
  getAlerts,
  getAnswers,
  getQuestionList,
} from "../../services/firestore";
import { timeDiffFormatter, getAge } from "../../utils/date";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PatientDetails({ navigation }) {
  const { selectedUser, setSelectedUser } = useUserContext();
  const [newAlertPopup, setAlertPopup] = useState(false);
  const [newUpdatePopup, setUpdatePopup] = useState(false);

  const updateLastTime = async () => {
    const lastUpdateTime = selectedUser.lastUpdate.toDate().getTime();
    const lastAlertTime = selectedUser.lastAlertTime?.toDate().getTime() || 0;

    const lastCheckedUpdateTime = await AsyncStorage.getItem(
      `${selectedUser.uid}-update`
    )
      .then((value) => parseInt(value))
      .catch(() => 0);

    const lastCheckedAlertTime = await AsyncStorage.getItem(
      `${selectedUser.uid}-alert`
    )
      .then((value) => parseInt(value))
      .catch(() => 0);

    if (lastUpdateTime != lastCheckedUpdateTime) {
      setUpdatePopup(true);
      AsyncStorage.setItem(
        `${selectedUser.uid}-update`,
        lastUpdateTime.toString()
      );
    }

    if (lastAlertTime != lastCheckedAlertTime) {
      setAlertPopup(true);
      AsyncStorage.setItem(
        `${selectedUser.uid}-alert`,
        lastAlertTime.toString()
      );
    }
  };

  useEffect(() => {
    updateLastTime();
    getQuestionList([selectedUser.userConnectionID])
      .then((list) =>
        setSelectedUser((data) => {
          data.questions = list;
          return data;
        })
      )
      .catch((err) => console.log(err));
  });

  const lastUpdate = async () => {
    let date = selectedUser.lastUpdate.toDate();
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const answersList = await getAnswers(
      selectedUser.questions.map((item) => item.id),
      date
    );
    navigation.navigate("historic", {
      eventGroup: {
        answers: answersList.length > 0 ? answersList : null,
      },
    });
  };

  const lastAlert = async () => {
    let date = selectedUser.lastAlertTime?.toDate();
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const alertsList = await getAlerts(selectedUser.uid, date);
    navigation.navigate("historic", {
      eventGroup: {
        alerts: alertsList.length > 0 ? alertsList : null,
      },
    });
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <StatusBar backgroundColor="#fff" />
        <Header
          title="Visão Geral"
          onBackButtonPress={() => navigation.goBack()}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <>
            <ProfileDescriptions>
              <LeftContent>
                <Avatar
                  source={{
                    uri: selectedUser.photoURL,
                  }}
                />
              </LeftContent>
              <RightContent>
                <Name>{selectedUser.name}</Name>

                <Status>
                  <Item>
                    <Title>Idade</Title>
                    <TextItem>
                      {getAge(selectedUser.birthDate.toDate())}
                    </TextItem>
                  </Item>
                  <Item>
                    <Title>Última atualização</Title>
                    <TextItem>
                      {timeDiffFormatter(selectedUser.lastUpdate.toDate())}
                    </TextItem>
                  </Item>
                </Status>
              </RightContent>
            </ProfileDescriptions>
            {(newAlertPopup || newUpdatePopup) && <Topic>Avisos</Topic>}
            {newUpdatePopup && (
              <ButtonNotification
                onPress={lastUpdate}
                title="Último relato diário"
                Icon={() => (
                  <MaterialCommunityIcons
                    name="account-clock-outline"
                    size={20}
                    color="#fff"
                  />
                )}
              />
            )}
            {newAlertPopup && (
              <ButtonNotification
                onPress={lastAlert}
                title="Registrou um Alerta"
                type="yellow"
                Icon={() => (
                  <Ionicons name="alert-outline" size={14} color="#fff" />
                )}
              />
            )}
            <Topic>Interações</Topic>
            <InteractionButton
              onPress={() =>
                navigation.navigate("agenda", {
                  userID: selectedUser.uid,
                  isEditor: true,
                })
              }
              description="Exibir/Adicionar agendas do paciente."
              title="Agenda"
              Icon={() => (
                <Ionicons name="book-outline" size={40} color="#373D53" />
              )}
              type="gray"
            />
            <InteractionButton
              onPress={() => navigation.navigate("annotation")}
              description="Adicionar observações sobre o paciente."
              title="Anotações"
              Icon={() => <Feather name="list" size={40} color="#373D53" />}
              type="gray"
            />
            <InteractionButton
              description="Editar/Adicionar uma receita médica para este paciente"
              title="Histórico"
              Icon={() => (
                <MaterialIcons name="history" size={40} color="#373D53" />
              )}
              type="gray"
              onPress={() =>
                navigation.navigate("historicPatient", {
                  userConnections: [
                    {
                      id: selectedUser.userConnectionID,
                      patient: selectedUser.uid,
                    },
                  ],
                })
              }
            />
            <InteractionButton
              description="Editar/Adicionar perguntas no questionário diário"
              title="Questionário diário"
              Icon={() => (
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={40}
                  color="#373D53"
                />
              )}
              type="gray"
              onPress={() => navigation.navigate("quizManage")}
            />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

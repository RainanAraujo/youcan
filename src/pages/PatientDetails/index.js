import React, { useEffect } from "react";
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
import { getQuestionList } from "../../services/firestore";
import { timeDiffFormatter } from "../../utils/date";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PatientDetails({ navigation }) {
  const { selectedUser, setSelectedUser } = useUserContext();

  useEffect(() => {
    const lastUpdateTime = selectedUser.lastUpdate.toDate().getTime();
    AsyncStorage.setItem(
      `${selectedUser.uid}-update`,
      lastUpdateTime.toString()
    );
    getQuestionList([selectedUser.userConnectionID])
      .then((list) =>
        setSelectedUser((data) => {
          data.questions = list;
          return data;
        })
      )
      .catch((err) => console.log(err));
  });

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
                    <TextItem>{selectedUser.age}</TextItem>
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
            <Topic>Avisos</Topic>
            <ButtonNotification
              title="Último relato diário"
              Icon={() => (
                <MaterialCommunityIcons
                  name="account-clock-outline"
                  size={20}
                  color="#fff"
                />
              )}
            />
            <ButtonNotification
              title="Registrou um Alerta"
              type="yellow"
              Icon={() => (
                <Ionicons name="alert-outline" size={14} color="#fff" />
              )}
            />
            <Topic>Interações</Topic>
            <InteractionButton
              onPress={() => navigation.navigate("agenda", { isEditor: true })}
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
              onPress={() => navigation.navigate("historicPanel")}
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

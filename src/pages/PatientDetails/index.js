import React, { useState, useEffect, useCallback } from "react";
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
import { useSelectedUser } from "../../context/selectedUserContext";

export default function PatientDetails({ navigation }) {
  const { selectedUser } = useSelectedUser();

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <StatusBar backgroundColor="#fff" />
        <Header title="Visão Geral" navigation={navigation} />
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
                <Description>Depressão</Description>
                <Status>
                  <Item>
                    <Title>Idade</Title>
                    <TextItem>{selectedUser.age}</TextItem>
                  </Item>
                  <Item>
                    <Title>Última atualização</Title>
                    <TextItem>Há 5 dias</TextItem>
                  </Item>
                  <Item>
                    <Title>Tag da semana</Title>
                    <TextItem>Tristeza</TextItem>
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
              description="Adicionar observações sobre o paciente."
              title="Anotações"
              Icon={() => <Feather name="list" size={40} color="#fff" />}
              type="red"
            />
            <InteractionButton
              description="Editar/Adicionar uma receita médica para este paciente"
              title="Histórico"
              Icon={() => (
                <MaterialIcons name="history" size={40} color="#fff" />
              )}
              type="blue"
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

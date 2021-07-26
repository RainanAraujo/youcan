import React, { useState, useEffect, useCallback } from "react";
import { Container, Name, Period } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Input from "../../components/Input";
import Header from "../../components/Header";
import ButtonHistoric from "../../components/ButtonHistoric";

import { MaterialIcons } from "@expo/vector-icons";

export default function HistoricPanel({ navigation, route }) {
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
            <Name>Jasmim Pereira</Name>
            <Input
              Icon={() => (
                <MaterialIcons name="date-range" size={24} color="#373D53" />
              )}
              Placeholder="Filtrar por data"
            />
            <Period>Este mês</Period>
            <ButtonHistoric
              day="Terça-Feira"
              date="26/06"
              onPress={() => navigation.navigate("historic")}
            />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

import React, { useState, useEffect, useCallback } from "react";
import { Container, Name, Period } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";

import Header from "../../components/Header";

export default function Historic({ navigation, route }) {
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
            <Name>26/06</Name>
            <Status></Status>
            <Title></Title>
            <Title></Title>
            <Question></Question>
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

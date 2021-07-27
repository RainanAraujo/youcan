import React, { useState, useEffect, useCallback } from "react";
import { Container, Name } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import NewTopicButton from "../../components/NewTopicButton";
import Header from "../../components/Header";
import AnswerButton from "../../components/AnnotationButton";

export default function Annotation({ navigation, route }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <StatusBar backgroundColor="#fff" />
        <Header
          title="Anotações"
          onBackButtonPress={() => navigation.goBack()}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <>
            <Name>Jasmim Pereira</Name>
            <NewTopicButton
              text="Nova Anotação"
              onPress={() =>
                navigation.navigate("annotationEditor", {
                  question: null,
                })
              }
            />
            <AnswerButton
              title="Anotação do dia em que ele vomitou na roupa"
              description="asasdfçlsad asdç lasd çlfksad çlfasd çflasçldsaçldf çlas   asçld açsldçasld çlasdçl sa dlasç dçlasdçl  çlasd çlasfasdçf~lasmdf çasld mfsçal m"
            />
            <AnswerButton
              title="Anotação do dia em que ele vomitou na roupa"
              description="asasdfçlsad asdç lasd çlfksad çlfasd çflasçldsaçldf çlas   asçld açsldçasld çlasdçl sa dlasç dçlasdçl  çlasd çlasfasdçf~lasmdf çasld mfsçal m"
            />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

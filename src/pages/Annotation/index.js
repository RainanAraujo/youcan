import React, { useState, useEffect, useCallback } from "react";
import { Container, Name } from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import NewTopicButton from "../../components/NewTopicButton";
import Header from "../../components/Header";
import AnnotationButton from "../../components/AnnotationButton";
import { useUserContext } from "../../context/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Annotation({ navigation }) {
  const { selectedUser } = useUserContext();
  const [annotations, setAnnotations] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      AsyncStorage.getItem(selectedUser.userConnectionID)
        .then((dataString) => {
          const data = JSON.parse(dataString);
          if (data) {
            setAnnotations(data.annotations);
          }
        })
        .catch((err) => console.log(err));
    });
    return unsubscribe;
  }, [navigation]);

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
                  userConnectionID: selectedUser.userConnectionID,
                  annotation: null,
                })
              }
            />
            {annotations?.map((annotation) => (
              <AnnotationButton
                title={annotation.title}
                description={annotation.text}
                onPress={() =>
                  navigation.navigate("annotationEditor", {
                    userConnectionID: selectedUser.userConnectionID,
                    annotation,
                  })
                }
              />
            ))}
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

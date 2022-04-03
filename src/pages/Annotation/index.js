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
            <Name>{selectedUser.name}</Name>
            <NewTopicButton
              text="Nova Anotação"
              onPress={() =>
                navigation.navigate("annotationEditor", {
                  userConnectionID: selectedUser.userConnectionID,
                  annotation: null,
                })
              }
            />
            {annotations.map((annotation) => (
              <AnnotationButton
                title={annotation.title}
                description={annotation.text}
                onDelete={async () => {
                  const dataString = await AsyncStorage.getItem(
                    selectedUser.userConnectionID
                  );
                  let data = JSON.parse(dataString);
                  data.annotations = data.annotations.filter(
                    (item) => item.id !== annotation.id
                  );
                  await AsyncStorage.setItem(
                    selectedUser.userConnectionID,
                    JSON.stringify(data)
                  );
                  setAnnotations(data.annotations);
                }}
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

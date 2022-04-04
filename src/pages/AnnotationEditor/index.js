import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  Label,
  DropDown,
  DropDownContainer,
  Option,
  Circle,
  titleOption,
  RemoveOption,
} from "./styles";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import NewTopicButton from "../../components/NewTopicButton";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AnnotationEditor({ navigation, route }) {
  const { userConnectionID, annotation } = route.params || {};

  const [title, setTitle] = useState(annotation?.title || "");
  const [text, setText] = useState(annotation?.text || "");
  const [loading, setLoading] = useState(false);

  const saveAnnotation = async () => {
    const annotationID =
      annotation?.id || Math.random().toString(36).substring(2);
    if ([title, text].some((val) => val != null)) {
      setLoading(true);
      const dataString = await AsyncStorage.getItem(userConnectionID);
      if (dataString != null) {
        let data = JSON.parse(dataString);
        data.annotations = data.annotations.filter(
          (item) => item.id !== annotationID
        );
        console.log(data);
        data.annotations.push({
          id: annotationID,
          title,
          text,
        });
        await AsyncStorage.setItem(userConnectionID, JSON.stringify(data));
        navigation.goBack();
      } else {
        await AsyncStorage.setItem(
          userConnectionID,
          JSON.stringify({ annotations: [{ id: annotationID, title, text }] })
        );
      }
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <StatusBar backgroundColor="#fff" />
        {route.params?.annotation == null ? (
          <Header
            title="Criar anotação"
            onBackButtonPress={() => navigation.goBack()}
          />
        ) : (
          <Header
            title="Editar anotação"
            onBackButtonPress={() => navigation.goBack()}
          />
        )}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <>
            <Label>Título</Label>
            <Input
              value={title}
              onChangeText={(value) => setTitle(value)}
            ></Input>
            <Label>Anotação</Label>
            <Input
              bigArea
              value={text}
              onChangeText={(value) => setText(value)}
            ></Input>

            <Button loading={loading} text="Salvar" onPress={saveAnnotation} />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

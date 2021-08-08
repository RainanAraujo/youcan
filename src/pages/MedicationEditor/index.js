import React, { useState, useEffect, useCallback } from "react";
import { Container, Label, ContainerHour, TextCentred, Hour } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import NewTopicButton from "../../components/NewTopicButton";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MedicationEditor({ navigation, route }) {
  const { userConnectionID, annotation } = route.params || {};
  const [showTime, setShowTime] = useState(false);
  const [title, setTitle] = useState(annotation?.title || "");
  const [text, setText] = useState(annotation?.text || "");
  const [time, setTime] = useState(new Date());
  const [useInterval, setUseInterval] = useState();
  const [hours, setHours] = useState([]);

  const saveAnnotation = async () => {
    const annotationID =
      annotation?.id || Math.random().toString(36).substring(2);
    if ([title, text].some((val) => val != null)) {
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

  useEffect(() => {
    const numIntervals = 24 / useInterval;
    setHours([]);
    for (var i = 0; i < numIntervals; i++) {
      let currentTime = new Date(
        time.getTime() + useInterval * 60 * 60 * 1000 * i
      );
      setHours((list) => {
        list.push(
          currentTime.getHours() + ":" + currentTime.getMinutes() + "h"
        );
        return list;
      });
    }
    console.log(hours);
  }, [time, useInterval]);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        {showTime && (
          <DateTimePicker
            testID="timeTimePicker"
            value={time}
            mode={"time"}
            is24Hour={true}
            display="default"
            onChange={(evt, value) => {
              const selectedTime = value || time;
              setTime(new Date(selectedTime));
              setShowTime(false);
            }}
            onTouchCancel={() => setShowTime(false)}
          />
        )}
        <StatusBar backgroundColor="#fff" />
        {route.params?.annotation == null ? (
          <Header
            title="Nova medicação"
            onBackButtonPress={() => navigation.goBack()}
          />
        ) : (
          <Header
            title="Editar medicação"
            onBackButtonPress={() => navigation.goBack()}
          />
        )}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <>
            <Label>Nome da medicação</Label>
            <Input
              value={title}
              onChangeText={(value) => setTitle(value)}
            ></Input>
            <Label>Intervalo de uso (horas)</Label>
            <Input
              type={"numeric"}
              value={useInterval}
              Placeholder={"8"}
              onChangeText={(value) => setUseInterval(value)}
            ></Input>
            <Label>Hora de início</Label>
            <Input
              value={time.getHours() + ":" + time.getMinutes()}
              onPress={() => setShowTime(true)}
            ></Input>
            <TextCentred>Horários de uso</TextCentred>
            <ContainerHour>
              {hours.map((item, index) => {
                return <Hour key={index}>{hours.length <= 5 && item}</Hour>;
              })}
            </ContainerHour>

            <Button text="Salvar" onPress={saveAnnotation} />
          </>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

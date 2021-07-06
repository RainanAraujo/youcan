import React from "react";
import { Container, Topic } from "./styles";
import { SafeAreaView, StatusBar } from "react-native";
import CardButton from "../../components/CardButton";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export default function Home() {
  return (
    <Container>
      <StatusBar backgroundColor="#fff" />
      <Topic>Avisos</Topic>
      <Topic>Sobre você</Topic>
      <CardButton
        category="Alerta"
        description="Registrar alguma grande experiência positiva ou negativa neste momento."
        title="Está acontecendo algo?"
        Icon={() => <FontAwesome5 name="heartbeat" size={18} color="#FFD4D4" />}
        type="red"
      />
      <CardButton
        category="Ultima Semana"
        description="Baseado em seus relatos diários, tristeza foi a tag utilizada com mais frequência."
        title="Tristeza"
        Icon={() => <MaterialIcons name="history" size={18} color="#929292" />}
      />
    </Container>
  );
}

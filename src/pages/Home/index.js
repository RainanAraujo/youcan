import React from "react";
import {
  Container,
  Topic,
  Title,
  Header,
  Profile,
  Name,
  Avatar,
} from "./styles";
import { SafeAreaView, StatusBar } from "react-native";
import CardButton from "../../components/CardButton";
import Menu from "../../components/Menu";
import ButtonNotification from "../../components/ButtonNotification";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Home() {
  return (
    <Container>
      <StatusBar backgroundColor="#fff" />
      <Header>
        <Menu />
        <Profile>
          <Name>Jasmim Pereira</Name>
          <Avatar
            source={{
              uri: "https://psicoter.com.br/wp-content/uploads/2019/01/pessoa-flexivel-seja-mais-flexivel-800x533.jpg",
            }}
          />
        </Profile>
      </Header>
      <Title>Dashboard</Title>
      <Topic>Avisos</Topic>
      <ButtonNotification
        title="Nova agenda de atendimento"
        Icon={() => (
          <MaterialCommunityIcons
            name="account-clock-outline"
            size={20}
            color="#fff"
          />
        )}
      />
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

import React, { useState, useEffect } from "react";
import {
  Container,
  Topic,
  Title,
  Header,
  Profile,
  Name,
  Avatar,
  ButtonMenu,
} from "./styles";
import { SafeAreaView, StatusBar } from "react-native";
import CardButton from "../../components/CardButton";
import Menu from "../../components/Menu";
import ButtonNotification from "../../components/ButtonNotification";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { currentUser } from "../../services/auth";
import { getUserData } from "../../services/firestore";

export default function HomePatient() {
  const [expandedMenu, setExpandedMenu] = useState(false);
  const [userData, setUserData] = useState({});

  const { uid } = currentUser();

  useEffect(() => {
    getUserData(uid).then((data) => setUserData(data));
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <StatusBar backgroundColor="#fff" />
        <Menu open={expandedMenu} onClose={() => setExpandedMenu(false)} />
        <Header>
          <ButtonMenu onPress={() => setExpandedMenu(true)}>
            <Feather name="menu" size={24} color="#070C17" />
          </ButtonMenu>
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
          Icon={() => (
            <FontAwesome5 name="heartbeat" size={18} color="#FFD4D4" />
          )}
          type="red"
        />
        <CardButton
          category="Ultima Semana"
          description="Baseado em seus relatos diários, tristeza foi a tag utilizada com mais frequência."
          title="Tristeza"
          Icon={() => (
            <MaterialIcons name="history" size={18} color="#929292" />
          )}
        />
      </Container>
    </SafeAreaView>
  );
}

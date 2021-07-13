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
  ButtonOption,
  TextOption,
} from "./styles";
import { SafeAreaView, StatusBar, Text } from "react-native";
import CardButton from "../../components/CardButton";
import Menu from "../../components/Menu";
import ButtonNotification from "../../components/ButtonNotification";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { currentUser } from "../../services/auth";
import { getUserData } from "../../services/firestore";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
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
        <Menu open={expandedMenu} onClose={() => setExpandedMenu(false)}>
          <ButtonOption>
            <Ionicons name="qr-code" size={22} color="#53555f" />
            <TextOption>Vincular Profissional</TextOption>
          </ButtonOption>
          <ButtonOption>
            <Ionicons name="ios-list-outline" size={22} color="#53555f" />
            <TextOption>Relatório pessoal</TextOption>
          </ButtonOption>
          <ButtonOption>
            <MaterialCommunityIcons name="pill" size={22} color="#53555f" />
            <TextOption>Receita médica</TextOption>
          </ButtonOption>
          <ButtonOption>
            <MaterialCommunityIcons name="history" size={22} color="#53555f" />
            <TextOption>Agenda</TextOption>
          </ButtonOption>
          <ButtonOption>
            <Feather name="user" size={22} color="#53555f" />
            <TextOption>Seus profissionais</TextOption>
          </ButtonOption>
          <ButtonOption>
            <SimpleLineIcons name="location-pin" size={22} color="#53555f" />
            <TextOption>Localizar atendimento</TextOption>
          </ButtonOption>
          <ButtonOption>
            <MaterialCommunityIcons
              name="exit-to-app"
              size={22}
              color="#FE6161"
            />
            <TextOption style={{ color: "#FE6161" }}>Sair</TextOption>
          </ButtonOption>
        </Menu>
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
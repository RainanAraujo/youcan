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
import Menu from "../../components/Menu";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { currentUser } from "../../services/auth";
import { getUserData } from "../../services/firestore";
import { Ionicons } from "@expo/vector-icons";
import Input from "../../components/Input";
import ButtonPatient from "../../components/ButtonPatient";

export default function HomeProfessional() {
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
            <TextOption>Código de vinculação</TextOption>
          </ButtonOption>
          <ButtonOption>
            <Ionicons name="ios-list-outline" size={22} color="#53555f" />
            <TextOption>Sua Agenda</TextOption>
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
        <Input
          Icon={() => (
            <Ionicons name="ios-search-outline" size={24} color="black" />
          )}
          Placeholder="Buscar paciente"
        />
        <ButtonPatient alertYellow alertGreen alertRed />
      </Container>
    </SafeAreaView>
  );
}

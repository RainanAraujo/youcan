import React, { useState, useEffect, useCallback } from "react";
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
import { BackHandler, SafeAreaView, StatusBar, Text } from "react-native";
import Menu from "../../components/Menu";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { currentUser } from "../../services/auth";
import { getUserData } from "../../services/firestore";
import { Ionicons } from "@expo/vector-icons";
import Input from "../../components/Input";
import ButtonPatient from "../../components/ButtonPatient";
import PopUp from "../../components/PopUp";
import { BarCodeScanner } from "expo-barcode-scanner";
import QRCode from "react-native-qrcode-svg";
import logoApp from "../../../assets/images/happyLion.png";

export default function HomeProfessional() {
  const [expandedMenu, setExpandedMenu] = useState(false);
  const [userData, setUserData] = useState({});
  const [enableScanner, setEnableScanner] = useState(false);
  const [popUpQRCode, setPopUpQRCode] = useState(false);
  const { uid } = currentUser();

  useEffect(() => {
    getUserData(uid).then((data) => setUserData(data));
  }, []);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const backAction = useCallback(() => {
    setEnableScanner(false);
    return true;
  }, [enableScanner]);

  const openCameraScan = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    if (status === "granted") {
      setEnableScanner(true);
    }
    return true;
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <StatusBar backgroundColor="#fff" />
        {!enableScanner ? (
          <>
            <PopUp
              open={popUpQRCode}
              title="Código de vinculação"
              description="Aqui está seu qrCode para vincular seus pacientes"
              onClose={() => setPopUpQRCode(false)}
            >
              <QRCode
                value={userData.uid}
                size={130}
                logoSize={28}
                logo={logoApp}
                logoBorderRadius={5}
                logoBackgroundColor="white"
              />
            </PopUp>
            <Menu open={expandedMenu} onClose={() => setExpandedMenu(false)}>
              <ButtonOption
                onPress={() => (setPopUpQRCode(true), setExpandedMenu(false))}
              >
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
          </>
        ) : (
          <BarCodeScanner style={{ width: "100%", height: "100%" }} />
        )}
      </Container>
    </SafeAreaView>
  );
}

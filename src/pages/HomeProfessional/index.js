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
import {
  BackHandler,
  SafeAreaView,
  StatusBar,
  Text,
  ScrollView,
  RefreshControl,
} from "react-native";
import Menu from "../../components/Menu";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { currentUser, signOut } from "../../services/auth";
import { getUserData, getPatientList } from "../../services/firestore";
import { Ionicons } from "@expo/vector-icons";
import ButtonPatient from "../../components/ButtonPatient";
import PopUp from "../../components/PopUp";
import QRCode from "react-native-qrcode-svg";
import logoApp from "../../../assets/images/happyLion.png";
import { useUserContext } from "../../context/userContext";
import shortid from "shortid";

export default function HomeProfessional({ navigation }) {
  const [expandedMenu, setExpandedMenu] = useState(false);
  const [userData, setUserData] = useState({});
  const [patientList, setPatientList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const [popUpQRCode, setPopUpQRCode] = useState(false);
  const { uid } = currentUser();
  const { setSelectedUser } = useUserContext();

  const loadPatientList = async () => {
    try {
      const patientList = await getPatientList(uid);
      setPatientList(patientList);
    } catch (err) {
      console.log(err);
    }
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadPatientList();
    setRefreshing(false);
  }, []);

  const logoff = async () => {
    await signOut();
    navigation.replace("welcomeApp");
  };

  useEffect(() => {
    getUserData(uid).then((data) => setUserData(data));
    loadPatientList();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <StatusBar backgroundColor="#fff" />

        <PopUp
          open={popUpQRCode}
          title="C??digo de vincula????o"
          description="Aqui est?? seu qrCode para vincular seus pacientes"
          onClose={() => {
            onRefresh();
            setPopUpQRCode(false);
          }}
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
            <TextOption>C??digo de vincula????o</TextOption>
          </ButtonOption>
          <ButtonOption
            onPress={() => navigation.navigate("agenda", { userID: uid })}
          >
            <Ionicons name="ios-list-outline" size={22} color="#53555f" />
            <TextOption>Sua Agenda</TextOption>
          </ButtonOption>
          <ButtonOption onPress={logoff}>
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
            <Name>{userData.name}</Name>
            <Avatar
              source={{
                uri: userData.photoURL,
              }}
            />
          </Profile>
        </Header>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#f2c029"]}
            />
          }
          style={{ width: "100%" }}
        >
          <Title>Dashboard</Title>

          {patientList.map((connectionData, index) => (
            <ButtonPatient
              key={shortid.generate()}
              onPress={(patientData) => {
                setSelectedUser({
                  ...patientData,
                  userConnectionID: connectionData.id,
                });
                navigation.navigate("patientDetails");
              }}
              patientID={connectionData.patient}
            />
          ))}
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

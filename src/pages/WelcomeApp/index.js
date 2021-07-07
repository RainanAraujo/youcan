import React from "react";
import {
  Container,
  Logo,
  Title,
  Description,
  Link,
  Information,
} from "./styles";
import { SafeAreaView, StatusBar } from "react-native";
import Button from "./../../components/Button";
import LogoApp from "./../../../assets/images/logoApp.png";
import { AntDesign } from "@expo/vector-icons";
import { auth, firebase } from "../../config/firebase";
import { signInWithGoogleAsync } from "../../services/auth";
import { isRegistered } from "../../services/firestore";

export default function WelcomeApp({ navigation }) {
  const checkUserStatus = async (userData) => {
    const registered = await isRegistered(userData.user.uid);
    if (registered) {
      navigation.replace("home");
    } else {
      navigation.replace("register");
    }
  };

  return (
    <Container>
      <StatusBar backgroundColor="#fff" />
      <Logo source={LogoApp} />
      <Information>
        <Title>Seu companheiro diário</Title>
        <Description>
          Buscamos auxiliar você e quem lhe ajuda, acompanhando com você suas
          experiências diárias.
        </Description>
      </Information>

      <Button
        onPress={() =>
          signInWithGoogleAsync().then((userData) => checkUserStatus(userData))
        }
        text="Login com Google"
        Icon={() => <AntDesign name="google" size={24} color="#fff" />}
      />
      <Link>Não possuo conta do Google</Link>
    </Container>
  );
}

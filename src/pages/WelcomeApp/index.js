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
export default function WelcomeApp() {
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
        text="Login com Google"
        Icon={() => <AntDesign name="google" size={24} color="#fff" />}
      />
      <Link>Não possuo conta do Google</Link>
    </Container>
  );
}

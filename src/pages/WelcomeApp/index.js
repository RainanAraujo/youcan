import React, { useEffect, useState } from "react";
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
import { getUserData } from "../../services/firestore";
import { currentUser } from "../../services/auth";

export default function WelcomeApp({ navigation }) {
  const [loading, setLoading] = useState(false);

  const checkUserStatus = async (userID) => {
    getUserData(userID)
      .then((user) => {
        if (user.type === "patient") {
          navigation.replace("homePatient");
        } else {
          navigation.replace("homeProfessional");
        }
      })
      .catch(() => {
        navigation.replace("register");
      });
  };

  useEffect(() => {
    if (currentUser() != null) {
      setLoading(true);
      checkUserStatus(currentUser().uid);
    }
  }, []);

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
        onPress={() => (
          signInWithGoogleAsync().then((userData) =>
            checkUserStatus(userData.user.uid)
          ),
          setLoading(true)
        )}
        text="Login com Google"
        Icon={() => <AntDesign name="google" size={24} color="#fff" />}
        loading={loading}
      />
      <Link>Não possuo conta do Google</Link>
    </Container>
  );
}

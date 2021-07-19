import React, { useState, useContext } from "react";
import { Container, Text, TitleMenu, DescriptionMenu } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useGlobalComponents } from "../../context/globalComponentsContext";
import Input from "../Input";
import { Value } from "react-native-reanimated";

export default function TagAdd({ onPress }) {
  const { setExpandedMenu } = useGlobalComponents();
  const [tag, setTag] = useState("Tag");
  return (
    <>
      <Container
        onPress={() =>
          setExpandedMenu(() => (
            <>
              <TitleMenu>Palavra Chave</TitleMenu>
              <DescriptionMenu>
                Busque e selecione uma palavra que defina você no momento.
              </DescriptionMenu>
              <Input
                onChangeText={(value) => setTag(value)}
                Icon={() => (
                  <Ionicons name="ios-search-outline" size={24} color="black" />
                )}
                Placeholder="Buscar palavra chave"
              />
            </>
          ))
        }
      >
        <Text>{tag}</Text>
        <Ionicons name="add" size={20} color="#f2c029" />
      </Container>
    </>
  );
}

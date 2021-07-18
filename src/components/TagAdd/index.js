import React, { useState, useContext } from "react";
import { Container, Text, TitleMenu, DescriptionMenu } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { GlobalComponentsContext } from "../../context/globalComponentsContext";
import Input from "../Input";

export default function TagAdd({ onPress }) {
  const [expandedMenu, setExpandedMenu] = useState(false);
  const GlobalComponents = useContext(GlobalComponentsContext);
  return (
    <>
      <Container onPress={() => setExpandedMenu(true)}>
        <Text>Tag</Text>
        <Ionicons name="add" size={20} color="#f2c029" />
      </Container>
      <GlobalComponents.Menu
        open={expandedMenu}
        onClose={() => setExpandedMenu(false)}
      >
        <TitleMenu>Palavra Chave</TitleMenu>
        <DescriptionMenu>
          Busque e selecione uma palavra que defina você no momento.
        </DescriptionMenu>
        <Input
          Icon={() => (
            <Ionicons name="ios-search-outline" size={24} color="black" />
          )}
          Placeholder="Buscar palavra chave"
        />
      </GlobalComponents.Menu>
    </>
  );
}

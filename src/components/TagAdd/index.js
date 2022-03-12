import React, { useState, useEffect } from "react";
import {
  Container,
  Text,
  TitleMenu,
  DescriptionMenu,
  FeelingButton,
  FeelingText,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useGlobalComponents } from "../../context/globalComponentsContext";
import Input from "../Input";
import { Value } from "react-native-reanimated";
import feelings from "../../../assets/json/feelings.json";
import { FlatList, ScrollView } from "react-native";

import { SafeAreaView, KeyboardAvoidingView } from "react-native";

const MenuExpanded = ({ onSubmit, onClose }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <TitleMenu>Palavra Chave</TitleMenu>
      <DescriptionMenu>
        Busque e selecione uma palavra que defina você no momento.
      </DescriptionMenu>
      <Input
        value={search}
        onChangeText={(value) => {
          setSearch(value);
        }}
        Icon={() => (
          <Ionicons name="ios-search-outline" size={24} color="black" />
        )}
        Placeholder="Buscar palavra chave"
      />
      <FlatList
        style={{ width: "100%" }}
        data={feelings.data.filter((word) =>
          word.toUpperCase().includes(search.toUpperCase())
        )}
        renderItem={(word, index) => {
          return (
            <FeelingButton onPress={() => (onSubmit(word.item), onClose())}>
              <FeelingText>{word.item}</FeelingText>
            </FeelingButton>
          );
        }}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default function TagAdd({ onChange }) {
  const { setExpandedMenu } = useGlobalComponents();
  const [tag, setTag] = useState("");

  useEffect(() => {
    onChange(tag);
  }, [tag]);

  return (
    <SafeAreaView>
      <Container
        onPress={() =>
          setExpandedMenu(() => (
            <MenuExpanded
              onSubmit={setTag}
              onClose={() => setExpandedMenu(null)}
            />
          ))
        }
      >
        <Text>{tag == "" ? "Tag" : tag}</Text>
        <Ionicons name="add" size={20} color="#f2c029" />
      </Container>
    </SafeAreaView>
  );
}

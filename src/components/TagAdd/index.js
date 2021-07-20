import React, { useState, useContext } from "react";
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

export default function TagAdd({ onPress }) {
  const { setExpandedMenu } = useGlobalComponents();

  const [tag, setTag] = useState("Tag");
  return (
    <SafeAreaView>
      <Container
        onPress={() =>
          setExpandedMenu(() => (
            <>
              <TitleMenu>Palavra Chave</TitleMenu>
              <DescriptionMenu>
                Busque e selecione uma palavra que defina você no momento.
              </DescriptionMenu>
              <Input
                value={tag == "Tag" ? null : tag}
                onChangeText={(value) => setTag(value)}
                Icon={() => (
                  <Ionicons name="ios-search-outline" size={24} color="black" />
                )}
                Placeholder="Buscar palavra chave"
              />
              <FlatList
                style={{ width: "100%" }}
                data={feelings.data.filter((word) =>
                  word.toUpperCase().includes(tag.toUpperCase())
                )}
                renderItem={(item) => {
                  return (
                    <FeelingButton onPress={() => setTag(item.item)}>
                      <FeelingText>{item.item + " "}</FeelingText>
                    </FeelingButton>
                  );
                }}
                keyExtractor={(item) => item.index}
                showsVerticalScrollIndicator={false}
              />
            </>
          ))
        }
      >
        <Text>{tag}</Text>
        <Ionicons name="add" size={20} color="#f2c029" />
      </Container>
    </SafeAreaView>
  );
}

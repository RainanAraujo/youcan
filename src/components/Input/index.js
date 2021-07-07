import React from "react";
import { Container, TextInput, IconViewer } from "./styles";
import { AntDesign } from "@expo/vector-icons";
export default function Input({ Icon, Placeholder, onChangeText, value }) {
  return (
    <Container>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        icon={Icon ? true : false}
        selectionColor="#F2C029"
        placeholder={Placeholder}
      />
      {Icon && (
        <IconViewer>
          <AntDesign name="google" size={24} color="#929292" />
        </IconViewer>
      )}
    </Container>
  );
}

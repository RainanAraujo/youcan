import React from "react";
import { Container, TextInput, IconViewer } from "./styles";

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
          <Icon />
        </IconViewer>
      )}
    </Container>
  );
}

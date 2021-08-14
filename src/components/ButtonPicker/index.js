import React from "react";
import { Container, TextButton, IconViewer } from "./styles";

export default function ButtonPicker({ Icon, onPress, text }) {
  return (
    <Container onPress={onPress}>
      {Icon && (
        <IconViewer>
          <Icon />
        </IconViewer>
      )}
      <TextButton>{text}</TextButton>
    </Container>
  );
}

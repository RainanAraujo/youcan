import React from "react";
import { Container, TextInput, IconViewer } from "./styles";

export default function Input({
  Icon,
  Placeholder,
  onChangeText,
  value,
  bigArea,
}) {
  return (
    <Container>
      <TextInput
        bigArea={bigArea}
        multiline={bigArea && true}
        onChangeText={onChangeText}
        value={value}
        icon={Icon ? true : false}
        selectionColor="#F2C029"
        placeholder={Placeholder}
        textAlignVertical={bigArea && "top"}
      />
      {Icon && (
        <IconViewer>
          <Icon />
        </IconViewer>
      )}
    </Container>
  );
}

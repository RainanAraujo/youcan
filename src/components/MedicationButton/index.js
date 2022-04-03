import React, { useState } from "react";
import { Container, Title, Description, TrashButton } from "./styles";

import { Feather } from "@expo/vector-icons";

export default function MedicationButton({ onPress, name, hours, onDelete }) {
  return (
    <Container onPress={onPress}>
      <TrashButton onPress={onDelete}>
        <Feather name="trash" size={18} color="#FE6161" />
      </TrashButton>
      <Title>{name}</Title>
      <Description>{hours}</Description>
    </Container>
  );
}

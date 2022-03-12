import React, { useState } from "react";
import {
  Container,
  Title,
  Description,
  Date,
  ButtonDown,
  TrashButton,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function MedicationButton({ onPress, name, hours }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Container onPress={onPress}>
      <Title>{name}</Title>
      <Description>{hours}</Description>
    </Container>
  );
}

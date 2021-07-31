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

export default function AnnotationButton({
  onPress,
  title,
  description,
  onDelete,
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Container onPress={onPress}>
      <TrashButton onPress={onDelete}>
        <FontAwesome5 name="trash" size={16} color="#FE6161" />
      </TrashButton>
      <Title>{title}</Title>

      {expanded ? (
        <Description>{description}</Description>
      ) : (
        <Description multiline={true} numberOfLines={2}>
          {description}
        </Description>
      )}

      <Date>26/06</Date>

      <ButtonDown
        onPress={() => (expanded ? setExpanded(false) : setExpanded(true))}
      >
        {expanded ? (
          <AntDesign name="caretup" size={16} color="#F2C029" />
        ) : (
          <AntDesign name="caretdown" size={16} color="#F2C029" />
        )}
      </ButtonDown>
    </Container>
  );
}

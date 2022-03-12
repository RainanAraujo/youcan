import React from "react";
import {
  Container,
  LionImage,
  DialogueBubble,
  DialogueBubbleText,
} from "./styles";
import { StatusBar } from "react-native";
export default function LionDialogue({ Lion, TextDialogue }) {
  return (
    <Container>
      <StatusBar backgroundColor="#fff" />
      <LionImage source={Lion} />
      <DialogueBubble>
        <DialogueBubbleText>{TextDialogue}</DialogueBubbleText>
      </DialogueBubble>
    </Container>
  );
}

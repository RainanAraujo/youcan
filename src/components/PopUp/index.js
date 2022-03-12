import React, { useRef, useState, useEffect } from "react";
import { Animated, Dimensions } from "react-native";
import {
  Container,
  Wrapper,
  Divider,
  ButtonClose,
  TextButtonClose,
  TitleText,
  DescriptionText,
} from "./styles";

export default function PopUp({ title, description, open, onClose, ...props }) {
  return (
    <Container open={open}>
      <Wrapper>
        {title && <TitleText>{title}</TitleText>}
        {description && <DescriptionText>{description}</DescriptionText>}
        {props.children}
        <Divider />
        <ButtonClose onPress={onClose}>
          <TextButtonClose>Ok</TextButtonClose>
        </ButtonClose>
      </Wrapper>
    </Container>
  );
}

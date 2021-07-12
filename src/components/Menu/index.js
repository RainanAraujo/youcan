import React, { useRef, useState, useEffect } from "react";
import { Animated, Dimensions } from "react-native";
import {
  Container,
  MenuContainer,
  ButtonClose,
  BackgroundMenu,
} from "./styles";

export default function Menu(props) {
  const expandMenuAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    props.open == true && expandMenuIn();
  }, [props.open]);

  const expandMenuIn = () => {
    Animated.timing(expandMenuAnim, {
      toValue: -Dimensions.get("window").height * 0.6,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const expandMenuOut = () => {
    Animated.timing(expandMenuAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Container
      open={props.open}
      onPress={() => (
        expandMenuOut(),
        setTimeout(() => {
          props.onClose();
        }, 100)
      )}
      activeOpacity={1}
    >
      <MenuContainer
        style={{
          transform: [
            {
              translateY: expandMenuAnim,
            },
          ],
        }}
      >
        <ButtonClose
          onPress={() => (
            expandMenuOut(),
            setTimeout(() => {
              props.onClose();
            }, 100)
          )}
        />
        {props.children}
      </MenuContainer>
    </Container>
  );
}

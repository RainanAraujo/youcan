import React, { useRef, useState, useEffect } from "react";
import { Animated, Dimensions } from "react-native";
import {
  Container,
  MenuContainer,
  ButtonClose,
  BackgroundMenu,
} from "./styles";

export default function Menu({ open, onClose }) {
  const expandMenuAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    open == true && expandMenuIn();
  }, [open]);

  const expandMenuIn = () => {
    Animated.timing(expandMenuAnim, {
      toValue: -Dimensions.get("window").height * 0.6,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const expandMenuOut = () => {
    Animated.timing(expandMenuAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Container
      open={open}
      onPress={() => (
        expandMenuOut(),
        setTimeout(() => {
          onClose();
        }, 300)
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
              onClose();
            }, 300)
          )}
        />
      </MenuContainer>
    </Container>
  );
}

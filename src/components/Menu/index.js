import React, { useRef, useState, useEffect } from "react";
import {
  Animated,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import {
  Container,
  MenuContainer,
  ButtonClose,
  BackgroundMenu,
} from "./styles";

export default function Menu(props) {
  const expandMenuAnim = useRef(new Animated.Value(0)).current;
  const [lastColor, setLastColor] = useState();

  useEffect(() => {
    props.open == true && expandMenuIn();
  }, [props.open]);

  const expandMenuIn = () => {
    StatusBar.setBackgroundColor("#00000030");
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
    }).start(() => StatusBar.setBackgroundColor("#fff"));
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
      <KeyboardAvoidingView
        behavior={"position"}
        keyboardVerticalOffset={-100}
        style={{ position: "relative", zIndex: 3, flex: 1 }}
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
      </KeyboardAvoidingView>
    </Container>
  );
}

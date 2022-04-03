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

export default function Menu({ children, open, onClose }) {
  const [visible, setVisible] = useState(false);

  const expandMenuAnim = useRef(new Animated.Value(0)).current;
  const [lastColor, setLastColor] = useState();
  const [heightMenuContainer, setHeightMenuContainer] = useState(0);

  const onLayout = (event) => {
    setHeightMenuContainer(event.nativeEvent.layout.height);
  };
  useEffect(() => {
    if (open) {
      expandMenuIn();
    } else {
      expandMenuOut();
    }
  }, [open, heightMenuContainer]);

  const expandMenuIn = () => {
    StatusBar.setBackgroundColor("#00000030");
    setVisible(true);
    Animated.timing(expandMenuAnim, {
      toValue: -heightMenuContainer,
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
    setTimeout(() => {
      onClose();
      setVisible(false);
      StatusBar.setBackgroundColor("#fff");
    }, 200);
  };

  return (
    <Container open={visible} onPress={() => expandMenuOut()} activeOpacity={1}>
      <KeyboardAvoidingView
        behavior={"position"}
        keyboardVerticalOffset={-100}
        style={{ position: "relative", zIndex: 3, flex: 1 }}
      >
        <MenuContainer
          onLayout={onLayout}
          style={{
            transform: [
              {
                translateY: expandMenuAnim,
              },
            ],
          }}
        >
          <ButtonClose onPress={() => expandMenuOut()} />
          {children}
        </MenuContainer>
      </KeyboardAvoidingView>
    </Container>
  );
}

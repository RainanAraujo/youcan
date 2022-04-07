import React, { useRef, useState, useEffect } from "react";
import {
  Animated,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { Container, MenuContainer, ButtonClose } from "./styles";

export default function Menu({ children, open, height, onClose }) {
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
    setVisible(true);
    StatusBar.setBackgroundColor("#00000030");
    Animated.timing(expandMenuAnim, {
      toValue: -(heightMenuContainer + 20),
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const expandMenuOut = () => {
    Animated.timing(expandMenuAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
      StatusBar.setBackgroundColor("#fff");
      onClose();
    });
  };

  return (
    <Container open={visible} onPress={() => expandMenuOut()} activeOpacity={1}>
      <KeyboardAvoidingView
        behavior={"position"}
        keyboardVerticalOffset={-100}
        style={{ position: "relative", zIndex: 3, flex: 1 }}
      >
        <MenuContainer
          height={height}
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

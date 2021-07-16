import React, { useRef, useState, useEffect } from "react";
import { Animated, Dimensions } from "react-native";
import { Easing } from "react-native-reanimated";
import { Container, Message } from "./styles";

export default function FeedbackAction({ message, onClose }) {
  const feedbackActionAnim = useRef(new Animated.Value(0)).current;
  const [open, setOpen] = useState(true);

  useEffect(() => {
    feedbackActionIn(() => {
      setTimeout(() => {
        feedbackActionOut(() => {
          setOpen(false);
          onClose();
        });
      }, 2600);
    });
  }, []);

  const feedbackActionIn = (onFinish) => {
    Animated.timing(feedbackActionAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start(onFinish);
  };

  const feedbackActionOut = (onFinish) => {
    Animated.timing(feedbackActionAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start(onFinish);
  };
  return (
    <Container
      style={{
        opacity: feedbackActionAnim,
      }}
      open={open}
    >
      <Message>{message}</Message>
    </Container>
  );
}

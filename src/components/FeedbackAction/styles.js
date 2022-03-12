import styled, { css } from "styled-components/native";
import { Dimensions, Animated } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const Container = styled(Animated.View)`
  z-index: 999;
  background-color: #e8e8e860;
  border-radius: 100px;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  bottom: 30px;
  ${(props) =>
    props.open == true
      ? css`
          display: flex;
          position: absolute;
        `
      : css`
          display: none;
          position: relative;
        `}
`;

export const Message = styled.Text`
  color: #000;
`;

import styled, { css } from "styled-components/native";
import { Dimensions, Animated } from "react-native";
const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;

export const Container = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  left: 0px;
  background-color: #00000030;
  height: ${deviceHeight}px;
  width: ${deviceWidth}px;
  display: flex;
  overflow: hidden;
  align-items: center;
  ${(props) =>
    props.open == false
      ? css`
          display: none;
          position: relative;
        `
      : css`
          display: flex;
        `};
`;

export const MenuContainer = styled(Animated.View)`
  position: relative;
  z-index: 2;
  background-color: #fff;
  width: ${deviceWidth}px;
  elevation: 15;
  top: ${deviceHeight}px;
  padding: 20px;
  align-items: center;
  border-radius: 20px;
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
`;

export const ButtonClose = styled.TouchableOpacity`
  width: 50px;
  height: 7px;
  border-radius: 20px;
  background-color: #dfdfdf;
  margin-bottom: 20px;
`;

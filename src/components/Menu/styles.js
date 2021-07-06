import styled, { css } from "styled-components/native";
import { Dimensions, Animated } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const Container = styled.TouchableOpacity`
  position: absolute;
  z-index: 999;
  left: 0px;
  background-color: #00000030;
  height: ${deviceHeight * 1.1}px;
  width: ${deviceWidth * 1}px;
  display: flex;
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
  height: ${deviceHeight * 0.6}px;
  background-color: #fff;
  width: 100%;
  elevation: 15;
  top: ${deviceHeight * 1 + 50}px;
  padding: 20px;
  align-items: center;
  border-radius: 20px;
`;

export const ButtonClose = styled.TouchableOpacity`
  width: 50px;
  height: 7px;
  border-radius: 20px;
  background-color: #dfdfdf;
`;

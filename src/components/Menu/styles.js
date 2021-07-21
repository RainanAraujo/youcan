import styled, { css } from "styled-components/native";
import { Dimensions, Animated } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const Container = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  left: 0px;
  background-color: #00000030;
  height: ${deviceHeight * 1.1}px;
  width: ${deviceWidth * 1}px;
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
  height: ${deviceHeight * 0.6}px;
  background-color: #fff;
  width: ${deviceWidth * 1}px;
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
  margin-bottom: 20px;
`;

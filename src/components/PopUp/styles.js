import styled, { css } from "styled-components/native";
import { Dimensions, Animated } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const Container = styled.View`
  z-index: 2;
  background-color: #00000030;
  height: ${deviceHeight * 1.1}px;
  width: ${deviceWidth * 1}px;
  justify-content: center;
  align-items: center;
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

export const Wrapper = styled.View`
  padding: 16px;
  background-color: #fff;

  width: ${deviceWidth * 0.7}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 0.3px;
  background-color: #f2c029;
  margin-top: 18px;
`;

export const ButtonClose = styled.TouchableOpacity`
  width: 100%;
  margin-top: 14px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextButtonClose = styled.Text`
  color: #f2c029;
  font-family: "LatoRegular";
`;

export const TitleText = styled.Text`
  text-align: center;
  font-family: "LatoBold";
  font-size: 18px;
  margin: 14px 0;
`;
export const DescriptionText = styled.Text`
  text-align: center;
  font-family: "LatoRegular";
  font-size: 14px;
  margin-bottom: 12px;
  color: #929292;
  width: 90%;
`;

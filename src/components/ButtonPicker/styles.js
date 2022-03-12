import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;

export const Container = styled.TouchableOpacity`
  background-color: #f5f6fa;
  border-radius: 10px;
  width: ${deviceWidth * 0.9}px;
  padding: 18px 0;
  display: flex;
  margin-top: 8px;
  margin-bottom: 14px;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #7a7d87;
  font-family: "LatoRegular";
  font-size: 16px;
  padding: 0 50px;
`;

export const IconViewer = styled.View`
  position: absolute;
  left: 15px;
  top: 15px;
`;

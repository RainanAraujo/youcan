import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;

export const Container = styled.View`
  position: relative;
  margin-top: 8px;
  margin-bottom: 6px;
`;

export const TextInput = styled.TextInput`
  width: ${deviceWidth * 0.9}px;
  padding: 0 15px;
  ${(props) =>
    props.icon &&
    css`
      padding-left: 50px;
    `}

  height:  ${(props) => (props.bigArea ? 200 : 55)}px;
  background-color: #f5f6fa;
  border-radius: 10px;
  color: #7a7d87;
  font-family: "LatoRegular";
  font-size: 16px;
  ${(props) =>
    props.textAlignVertical &&
    css`
      padding-top: 12px;
    `}
`;

export const IconViewer = styled.View`
  position: absolute;
  left: 15px;
  top: 15px;
`;

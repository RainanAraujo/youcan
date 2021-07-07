import styled from "styled-components/native";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const LionImage = styled.Image``;

export const DialogueBubble = styled.View`
  padding: 30px;
  background-color: #f5f4f9;
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  margin-bottom: 60px;
  margin-left: 20px;
`;

export const DialogueBubbleText = styled.Text`
  font-size: 14px;
  font-family: "LatoRegular";
`;

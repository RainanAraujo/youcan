import styled from "styled-components/native";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const Container = styled.View`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  padding: 20px 20px;
  padding-bottom: 0;
  background-color: #fff;
`;

export const ButtonGroup = styled.View`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const QuestionText = styled.Text`
  color: #7e7e7e;
  font-size: 18px;
  margin-bottom: 12px;
  margin-top: 12px;
  font-weight: bold;
`;

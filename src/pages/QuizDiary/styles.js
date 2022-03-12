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

export const ButtonBack = styled.TouchableOpacity`
  width: 10%;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
`;

export const ProgressBarContainer = styled.View`
  width: 90%;
  background-color: #f2e1ae;
  height: 16px;
  border-radius: 10px;
`;

export const ProgressBar = styled.View`
  width: ${(props) => props.range * props.currentStep}%;
  height: 100%;
  background-color: #f2c029;
  border-radius: 10px;
`;

export const ButtonGroup = styled.View`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

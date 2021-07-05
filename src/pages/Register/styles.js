import styled from "styled-components/native";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 30px 20px;
  background-color: #fff;
`;

export const ScrollView = styled.ScrollView``;

export const Title = styled.Text`
  color: #070c17;
  font-family: "LatoBold";
  font-size: 22px;
  text-align: center;
  margin-bottom: 60px;
`;

export const Registration = styled.View`
  min-height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

import styled from "styled-components/native";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  padding: 30px 20px;
  background-color: #fff;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  font-family: "LatoBold";
  font-size: 22px;
  color: #070c17;
`;

export const Description = styled.Text`
  font-family: "LatoRegular";
  color: #7a7d87;
  font-size: 17px;
  text-align: center;
`;

export const Link = styled.Text`
  font-family: "LatoRegular";
  color: #385feb;
`;

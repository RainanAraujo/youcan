import styled from "styled-components/native";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const Container = styled.View`
  display: flex;
  align-items: center;

  height: 100%;
  padding: 30px 20px;
  background-color: #fff;
`;

export const Topic = styled.Text`
  margin-top: 12px;
  margin-bottom: 8px;
  width: 100%;
  font-size: 18px;
  font-family: "LatoBold";
  color: #7e7e7e;
`;

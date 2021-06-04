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

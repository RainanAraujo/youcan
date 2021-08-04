import styled from "styled-components/native";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const Container = styled.View`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 20px 20px;
  padding-bottom: 0;
  background-color: #fff;
`;

export const Period = styled.Text`
  text-align: left;
  width: 100%;
  color: #070c17;
  font-family: "LatoBold";
  font-size: 20px;
  margin-bottom: 6px;
`;

export const Status = styled.Text`
  text-align: left;
  width: 100%;
  color: #7e7e7e;
  font-family: "LatoRegular";
  font-size: 14px;
  margin-bottom: 14px;
`;

export const Title = styled.Text`
  text-align: left;
  width: 100%;
  color: #7e7e7e;
  font-family: "LatoBold";
  font-size: 18px;
  margin-bottom: 4px;
`;

export const Question = styled.Text`
  text-align: left;
  width: 100%;
  color: #070c17;
  font-family: "LatoRegular";
  font-size: 14px;
  margin-bottom: 4px;
  margin-top: 4px;
`;

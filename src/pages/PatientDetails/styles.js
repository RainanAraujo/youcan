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

export const Topic = styled.Text`
  margin-top: 12px;
  margin-bottom: 8px;
  width: 100%;
  font-size: 18px;
  font-family: "LatoBold";
  color: #7e7e7e;
`;

export const Name = styled.Text`
  color: #070c17;
  font-family: "LatoBold";
  font-size: 18px;
`;

export const Avatar = styled.Image`
  margin-right: 12px;
  width: 80px;
  height: 80px;
  border-radius: 100px;
  border: 2px solid #f2c029;
`;

export const ProfileDescriptions = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const LeftContent = styled.View`
  width: 28%;
`;

export const RightContent = styled.View`
  width: 72%;
`;

export const Description = styled.Text`
  color: #05aff2;
  font-family: "LatoRegular";
  font-size: 12px;
  margin-bottom: 4px;
`;

export const Status = styled.View`
  width: 100%;
  background-color: #f5f6fa;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  padding: 8px;
`;

export const Item = styled.View`
  margin: 0 6px;
`;

export const Title = styled.Text`
  width: 100%;
  font-size: 10px;
  font-family: "LatoRegular";
  color: #929292;
  margin-bottom: 2px;
`;

export const TextItem = styled.Text`
  width: 100%;
  font-size: 14px;
  font-family: "LatoRegular";
  color: #070c17;
`;

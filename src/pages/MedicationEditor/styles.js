import styled from "styled-components/native";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
import { Picker } from "@react-native-picker/picker";

export const Container = styled.View`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 20px 20px;
  padding-bottom: 0;
  background-color: #fff;
`;

export const Label = styled.Text`
  text-align: left;
  width: 100%;
  color: #363c51;
  font-family: "LatoRegular";
  font-size: 14px;
`;

export const ContainerHour = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin: 12px 0;
`;

export const TextCentred = styled.Text`
  text-align: center;
  font-size: 16px;
  font-family: "LatoRegular";
  margin: 12px 0;
`;

export const Hour = styled.Text`
  font-size: 22px;
  font-family: "LatoRegular";
  color: #7a7d87;
`;

export const DropDownContainer = styled.View`
  margin-top: 8px;
  margin-bottom: 8px;
  width: ${deviceWidth * 0.9}px;
  padding: 0 8px;
  height: 65px;
  background-color: #f5f6fa;
  border-radius: 10px;
  color: #7a7d87;
  font-family: "LatoRegular";
  font-size: 16px;
`;

export const DropDown = styled(Picker)`
  width: 100%;
  height: 65px;
  color: #7a7d87;
  font-family: "LatoRegular";
  font-size: 16px;
`;

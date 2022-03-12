import styled from "styled-components/native";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
import { Picker } from "@react-native-picker/picker";

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${deviceWidth * 0.9}px;
`;

export const DropDown = styled(Picker)`
  width: 100%;
  height: 65px;
  color: #7a7d87;
  font-family: "LatoRegular";
  font-size: 16px;
`;

export const DropDownContainer = styled.View`
  margin-top: 8px;
  margin-bottom: 14px;
  width: ${deviceWidth * 0.9}px;
  padding: 0 8px;
  height: 65px;
  background-color: #f5f6fa;
  border-radius: 10px;
  color: #7a7d87;
  font-family: "LatoRegular";
  font-size: 16px;
`;

export const Label = styled.Text`
  text-align: left;
  width: 100%;
  color: #363c51;
  font-family: "LatoRegular";
  font-size: 14px;
`;

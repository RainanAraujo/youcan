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

export const Option = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px 0;
`;

export const Circle = styled.View`
  border-radius: 100px;
  width: 20px;
  height: 20px;
  border: 2px solid #f5f6fa;
  margin-right: 10px;
`;

export const NameOption = styled.TextInput`
  color: #373d53;
  font-family: "LatoRegular";
  font-size: 14px;
  padding-left: 4px;
  padding-right: 4px;
  background-color: #f5f6fa;
  border-radius: 5px;
`;

export const RemoveOption = styled.TouchableOpacity`
  margin-left: 8px;
`;

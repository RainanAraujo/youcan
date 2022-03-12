import styled from "styled-components/native";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
import { Picker } from "@react-native-picker/picker";

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
`;

export const QuestionText = styled.Text`
  text-align: center;
  width: 100%;
  color: #070c17;
  font-family: "LatoBold";
  font-size: 22px;
  margin-top: 10px;
  margin-bottom: 12px;
`;

export const Description = styled.Text`
  text-align: center;
  width: 100%;
  color: #7a7d87;
  font-family: "LatoRegular";
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 20px;
`;

export const Or = styled.Text`
  text-align: center;
  width: 100%;
  color: #7a7d87;
  font-family: "LatoRegular";
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 12px;
`;

export const Option = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 14px 0;
`;

export const TextOption = styled.Text`
  text-align: center;
  color: #7a7d87;
  font-family: "LatoBold";
  font-size: 16px; ;
`;

export const TagsContainer = styled.View``;

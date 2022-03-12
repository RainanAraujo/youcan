import styled from "styled-components/native";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  margin-top: 40%;
`;

export const DescriptionPage = styled.Text`
  font-size: 16px;
  font-family: "LatoRegular";
  text-align: center;
  color: #7a7d87;
  margin: 30px 0;
  line-height: 23px;
`;

export const OptionsUserCategory = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  padding: 20px;
  background-color: #ebf9ff;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  border-radius: 10px;
`;

export const Image = styled.Image``;

export const UserCategory = styled.Text`
  margin-top: 15px;
  font-family: "LatoBold";
  color: #05aff2;
  font-size: 16px;
`;

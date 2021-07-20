import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 8px 16px;
  border-radius: 10px;
  border: 1px solid #f2c029;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Text = styled.Text`
  color: #f2c029;
  font-family: "LatoBold";
  font-size: 18px;
  margin-right: 10px;
  text-align: center;
`;

export const TitleMenu = styled.Text`
  font-family: "LatoBold";
  font-size: 18px;
  text-align: center;
  color: #373d53;
`;

export const FeelingButton = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  border-bottom-width: 1px;
  border-bottom-color: #f5f6fa;
`;

export const FeelingText = styled.Text`
  font-family: "LatoRegular";
  font-size: 16px;
  text-align: center;
  color: #373d53;
`;
export const DescriptionMenu = styled.Text`
  font-family: "LatoRegular";
  font-size: 14px;
  text-align: center;
  color: #7a7d87;
  margin-top: 8px;
  margin-bottom: 12px;
`;

import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 12px;
  width: 120px;
  border: 2px solid #f2c029;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px 0;
  justify-content: space-between;
`;

export const Text = styled.Text`
  color: #f2c029;
  font-family: "LatoBold";
  font-size: 18px;
  text-align: center;
`;

export const TitleMenu = styled.Text`
  font-family: "LatoBold";
  font-size: 18px;
  text-align: center;
  color: #373d53;
`;
export const DescriptionMenu = styled.Text`
  font-family: "LatoRegular";
  font-size: 12px;
  text-align: center;
  color: #7a7d87;
  margin-top: 8px;
  margin-bottom: 12px;
`;

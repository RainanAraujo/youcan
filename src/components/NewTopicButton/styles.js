import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 12px 16px;
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
  font-family: "LatoRegular";
  font-size: 14px;
  text-align: center;
`;

import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 18px 32px;
  background-color: #05aff2;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
`;

export const Text = styled.Text`
  color: #fff;
  font-family: "LatoBold";
  font-size: 18px;
  text-align: center;
`;

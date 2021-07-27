import styled, { css } from "styled-components/native";

export const Container = styled.View`
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

export const Timer = styled.Text`
  color: #fff;
  font-family: "LatoRegular";
  font-size: 16px;
  text-align: center;
`;

export const ProgressBarContainer = styled.View`
  width: 150px;
  background-color: #ffffff40;
  height: 8px;
  border-radius: 10px;
`;

export const ProgressBar = styled.View`
  width: ${(props) => (props.currentTime / props.timeTotal) * 100}%;
  background-color: #fff;
  height: 100%;
  border-radius: 10px;
`;

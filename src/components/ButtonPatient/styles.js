import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 18px;
  background-color: #f5f6fa;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 8px 0;
  position: relative;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  margin-right: 10px;
`;

export const Data = styled.View`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
`;

export const Alerts = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  right: 18px;
`;

export const Alert = styled.View`
  width: 20px;
  height: 20px;
  margin: 0 2px;
  border-radius: 100px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.type
      ? (props.type == "yellow" && "#F2C029") ||
        (props.type == "red" && "#FE6161") ||
        (props.type == "green" && "#36D994")
      : "transparent"};
`;

export const Name = styled.Text`
  color: #070c17;
  font-family: "LatoBold";
`;

export const Diagnostic = styled.Text`
  color: #070c17;
  font-family: "LatoLight";
  font-size: 12px;
`;

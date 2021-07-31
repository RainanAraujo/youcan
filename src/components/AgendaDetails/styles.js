import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 18px;
  background-color: #f5f6fa;
  border-radius: 10px;
  display: flex;

  margin: 8px 0;
  position: relative;
`;

export const TopInformation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const BottomInformation = styled.View`
  margin-top: 10px;
`;

export const ButtonRoom = styled.TouchableOpacity`
  width: 100%;
  padding: 14px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2c029;

  border-radius: 12px;
`;

export const Room = styled.Text`
  color: #fff;
  font-family: "LatoBold";
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

export const Day = styled.Text`
  color: #070c17;
  font-family: "LatoBold";
  margin-bottom: 2px;
`;

export const UserInformation = styled.Text`
  color: #070c17;
  font-family: "LatoLight";
  font-size: 12px;
`;

export const Date = styled.View`
  padding: 4px 12px;
  background-color: #f2c029;
  border-radius: 100px;
`;

export const DateText = styled.Text`
  color: #fff;
  font-family: "LatoBold";
`;

export const TrashButton = styled.TouchableOpacity`
  width: 100%;
  align-items: flex-end;
  margin-bottom: 6px;
`;

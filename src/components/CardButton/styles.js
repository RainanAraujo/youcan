import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 18px;
  background-color: ${(props) =>
    props.type
      ? (props.type == "yellow" && "#F2C029") ||
        (props.type == "red" && "#FE6161") ||
        (props.type == "green" && "#36D994")
      : "#F5F6FA"};
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

  ${(props) =>
    props.isButtonIcon &&
    css`
      width: 100%;
      padding-right: 15px;
    `}
`;

export const Category = styled.Text`
  color: ${(props) =>
    props.type
      ? (props.type == "yellow" && "#fff") ||
        (props.type == "red" && "#FFD4D4") ||
        (props.type == "green" && "#fff")
      : "#929292"};
`;

export const Title = styled.Text`
  color: ${(props) =>
    props.type
      ? (props.type == "yellow" && "#fff") ||
        (props.type == "red" && "#fff") ||
        (props.type == "green" && "#fff")
      : "#05AFF2"};
  font-size: 18px;
  font-family: "LatoBold";
  margin: 12px 0;
`;

export const Description = styled.Text`
  color: ${(props) =>
    props.type
      ? (props.type == "yellow" && "#fff") ||
        (props.type == "red" && "#fff") ||
        (props.type == "green" && "#fff")
      : "#929292"};
  font-size: 12px;
  font-family: "LatoRegular";
`;

export const HeaderCategory = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 100px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  elevation: 2;
`;

export const LeftContent = styled.View`
  width: 70%;
`;

export const RightContent = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
`;

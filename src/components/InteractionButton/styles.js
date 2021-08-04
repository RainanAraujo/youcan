import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 18px;
  background-color: ${(props) =>
    props.type
      ? (props.type == "yellow" && "#F2C029") ||
        (props.type == "red" && "#FE6161") ||
        (props.type == "green" && "#36D994") ||
        (props.type == "gray" && "#F5F6FA") ||
        (props.type == "blue" && "#05AFF2")
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

export const Title = styled.Text`
  color: ${(props) =>
    props.type
      ? (props.type == "yellow" && "#fff") ||
        (props.type == "red" && "#fff") ||
        (props.type == "green" && "#fff") ||
        (props.type == "gray" && "#373D53") ||
        (props.type == "blue" && "#fff")
      : "#05AFF2"};
  font-size: 18px;
  font-family: "LatoBold";
  margin: 8px 0;
  margin-top: 0;
`;

export const Description = styled.Text`
  color: ${(props) =>
    props.type
      ? (props.type == "yellow" && "#fff") ||
        (props.type == "red" && "#fff") ||
        (props.type == "green" && "#fff") ||
        (props.type == "gray" && "#373D53") ||
        (props.type == "blue" && "#fff")
      : "#929292"};
  font-size: 12px;
  font-family: "LatoRegular";
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

export const TrashButton = styled.TouchableOpacity`
  width: 100%;
  align-items: flex-end;
  margin-bottom: 6px;
`;


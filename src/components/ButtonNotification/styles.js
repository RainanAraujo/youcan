import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 18px;
  background-color: ${(props) =>
    props.type
      ? (props.type == "yellow" && "#F2C029") ||
        (props.type == "red" && "#FE6161") ||
        (props.type == "green" && "#36D994")
      : "#36D994"};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 8px 0;
`;

export const Title = styled.Text`
  color: ${(props) =>
    props.type
      ? (props.type == "yellow" && "#fff") ||
        (props.type == "red" && "#fff") ||
        (props.type == "green" && "#fff")
      : "#fff"};
  font-size: 16px;
  font-family: "LatoBold";
  margin-left: 12px;
`;

import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 18px 32px;
  background-color: #f2c029;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${(props) =>
    props.gray == true &&
    css`
      background-color: #f5f6fa;
    `}
  ${(props) =>
    props.buttonSmall == true
      ? css`
          width: 48%;
        `
      : css`
          width: 100%;
        `}

  ${(props) =>
    !props.isButtonIcon &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.isButtonText == true &&
    css`
      background-color: transparent;
      width: auto;
    `}
`;

export const Text = styled.Text`
  color: #fff;
  font-family: "LatoBold";
  font-size: 18px;
  text-align: center;

  ${(props) =>
    props.gray == true &&
    css`
      color: #373d53;
    `}

  ${(props) =>
    props.isButtonIcon &&
    css`
      width: 100%;
      padding-right: 15px;
    `}
  ${(props) =>
    props.isButtonText == true &&
    css`
      color: #f2c029;
      font-size: 16px;
    `}
`;

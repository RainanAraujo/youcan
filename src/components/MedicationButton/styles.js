import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 18px;
  background-color: #f5f6fa;
  border-radius: 10px;
  display: flex;

  align-items: flex-start;
  justify-content: space-between;
  margin: 8px 0;
  position: relative;
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
  color: #070c17;
  font-size: 18px;
  font-family: "LatoBold";
  margin: 8px 0;
  margin-top: 0;
`;

export const Description = styled.Text`
  color: #929292;
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

export const Date = styled.Text`
  margin-top: 12px;
  width: 100%;
  text-align: right;
  color: #929292;
  font-size: 12px;
  font-family: "LatoRegular";
`;

export const ButtonDown = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
  top: 16px;
`;

export const TrashButton = styled.TouchableOpacity`
  position: absolute;
  right: 12px;
  top: 12px;
`;

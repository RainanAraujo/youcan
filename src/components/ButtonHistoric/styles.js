import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 18px;
  background-color: #f5f6fa;
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
  color: #929292;
`;

export const Title = styled.Text`
  color: #373d53;
  font-size: 18px;
  font-family: "LatoBold";
  margin: 12px 0;
  margin-top: 4px;
`;

export const Description = styled.Text`
  color: #929292;
  font-size: 12px;
  font-family: "LatoRegular";
`;

export const HeaderCategory = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Tag = styled.View`
  background-color: #f2c029;
  border-radius: 5px;
  width: 100%;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px 0;
  ${(props) =>
    props.default &&
    css`
      background-color: #fe6161;
    `}
`;

export const TexTag = styled.Text`
  color: #fff;
  font-size: 12px;
  font-family: "LatoBold";
  text-align: center;
`;

export const LeftContent = styled.View`
  width: 60%;
`;

export const RightContent = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
`;

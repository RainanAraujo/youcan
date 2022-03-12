import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
import { SearchBar } from "react-native-elements";

export const Container = styled.View`
  position: relative;
  margin-top: 8px;
  margin-bottom: 14px;
  width: 100%;
`;

export const SearchInput = styled(SearchBar)`
  width: 100%;
  padding: 0 15px;
  ${(props) =>
    props.icon &&
    css`
      padding-left: 50px;
    `}
  height: 35px;
  background-color: #f5f6fa;
  border-radius: 10px;
  color: #7a7d87;
  font-family: "LatoRegular";
  font-size: 16px;
`;

export const IconViewer = styled.View`
  position: absolute;
  left: 15px;
  top: 15px;
`;

import styled from "styled-components/native";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const Container = styled.View`
  display: flex;
  align-items: center;

  height: 100%;
  padding: 30px 20px;
  background-color: #fff;
`;

export const Topic = styled.Text`
  margin-top: 12px;
  margin-bottom: 8px;
  width: 100%;
  font-size: 18px;
  font-family: "LatoBold";
  color: #7e7e7e;
`;

export const Title = styled.Text`
  margin-top: 12px;
  margin-bottom: 8px;
  width: 100%;
  font-size: 22px;
  font-family: "LatoBold";
  color: #070c17;
`;

export const Header = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-bottom: 16px;
`;

export const Profile = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Name = styled.Text`
  color: #070c17;
  font-family: "LatoBold";
`;

export const Avatar = styled.Image`
  margin-left: 12px;
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

export const ButtonMenu = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonOption = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 14px 8px;
  align-items: center;
`;
export const TextOption = styled.Text`
  margin-left: 16px;
  color: #53555f;
  font-family: "LatoRegular";
  font-size: 16px;
`;

export const ButtonQuestionaryDiary = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 30px;
`;
export const LionImage = styled.Image``;

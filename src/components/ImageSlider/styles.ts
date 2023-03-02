import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

type ImageIndexProps = {
  active: boolean;
};

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.text : theme.colors.shape};

  margin-left: 8px;
  border-radius: 3px;
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: ${RFValue(133)}px;

  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
  width: ${RFValue(280)}px;
  height: ${RFValue(133)}px;
`;

import styled from "styled-components/native";

type ImageIndexProps = {
  active: boolean;
};

export const Container = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.text : theme.colors.shape};

  margin-left: 8px;
  border-radius: 3px;
`;

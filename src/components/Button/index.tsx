import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

import { Container, Title } from "./styles";

type ButtonProps = {
  title: string;
  color?: string;
  onPress: () => void;
  enable?: boolean;
  loading?: boolean;
  light?: boolean;
};

export function Button({
  title,
  color,
  onPress,
  enable = true,
  loading = false,
  light = false,
}: ButtonProps) {
  const theme = useTheme();
  return (
    <Container
      color={color ? color : theme.colors.main}
      onPress={onPress}
      enabled={enable}
      style={{ opacity: enable === false || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}

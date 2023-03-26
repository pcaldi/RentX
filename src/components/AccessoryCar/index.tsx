import React from "react";
import { useTheme } from "styled-components";

import { SvgProps } from "react-native-svg";

import { Container, Name } from "./styles";

type AccessoryCarProps = {
  name: string;
  icon: React.FC<SvgProps>;
};

export function AccessoryCar({ name, icon: Icon }: AccessoryCarProps) {
  const theme = useTheme();
  return (
    <Container>
      <Icon width={32} height={32} color={theme.colors.header} />
      <Name>{name}</Name>
    </Container>
  );
}

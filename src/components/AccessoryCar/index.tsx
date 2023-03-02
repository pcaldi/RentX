import React from "react";

import { SvgProps } from "react-native-svg";

import { Container, Name } from "./styles";

type AccessoryCarProps = {
  name: string;
  icon: React.FC<SvgProps>;
};

export function AccessoryCar({ name, icon: Icon }: AccessoryCarProps) {
  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  );
}

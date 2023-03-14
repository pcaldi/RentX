import React from "react";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

import { Container, IconContainer, InputText } from "./styles";

type InputProps = TextInputProps & {
  iconName: React.ComponentProps<typeof Feather>["name"];
};

export function Input({ iconName, ...rest }: InputProps) {
  const theme = useTheme();
  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>
      <InputText {...rest} />
    </Container>
  );
}

// ...rest - pega todo o restante das propriedades do componente, nesse caso o Input

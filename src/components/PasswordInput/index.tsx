import React, { useState } from "react";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Container, IconContainer, InputText } from "./styles";

type InputProps = TextInputProps & {
  iconName: React.ComponentProps<typeof Feather>["name"];
};

export function PasswordInput({ iconName, ...rest }: InputProps) {
  const theme = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  function handlePasswordVisibility() {
    setIsPasswordVisible((oldState) => !oldState); // Pega o estado anterior e inverte ele.
  }

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>

      <InputText secureTextEntry={isPasswordVisible} {...rest} />

      <BorderlessButton onPress={handlePasswordVisibility}>
        <IconContainer>
          <Feather
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  );
}

// ...rest - pega todo o restante das propriedades do componente, nesse caso o Input

import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useAuth } from "../../hooks/auth";

import { BackButton } from "../../components/BackButton";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton,
  Content,
  Options,
  Option,
  OptionTitle,
  Section,
} from "./styles";
import { PasswordInput } from "../../components/PasswordInput";

export function Profile() {
  const [option, setOption] = useState<"dataEdit" | "passwordEdit">("dataEdit");
  const theme = useTheme();
  const navigation = useNavigation();
  const { user } = useAuth();

  function handleBack() {
    navigation.goBack();
  }

  function handleSignOut() {}

  function handleOptionEdit(selected: "dataEdit" | "passwordEdit") {
    setOption(selected);
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <HeaderTop>
              <BackButton color={theme.colors.shape} onPress={handleBack} />
              <HeaderTitle>Editar Perfil</HeaderTitle>
              <LogoutButton onPress={handleSignOut}>
                <Feather name="power" size={24} color={theme.colors.shape} />
              </LogoutButton>
            </HeaderTop>
            <PhotoContainer>
              <Photo source={{ uri: "https://github.com/pcaldi.png" }} />
              <PhotoButton onPress={() => {}}>
                <Feather name="camera" size={24} color={theme.colors.shape} />
              </PhotoButton>
            </PhotoContainer>
          </Header>
          {/* Utilizando o useBottomTabBarHeight() faz com que apareça o ultimo
            input junto ao teclado.  */}
          <Content style={{ marginBottom: useBottomTabBarHeight() }}>
            <Options>
              <Option
                active={option === "dataEdit"}
                onPress={() => handleOptionEdit("dataEdit")}
              >
                <OptionTitle active={option === "dataEdit"}>Dados</OptionTitle>
              </Option>

              <Option
                active={option === "passwordEdit"}
                onPress={() => handleOptionEdit("passwordEdit")}
              >
                <OptionTitle active={option === "passwordEdit"}>
                  Trocar senha
                </OptionTitle>
              </Option>
            </Options>
            {option === "dataEdit" ? (
              <Section>
                <Input
                  iconName="user"
                  placeholder="Nome"
                  defaultValue={user.name}
                  autoCorrect={false}
                />
                <Input
                  iconName="mail"
                  editable={false}
                  defaultValue={user.email}
                />
                <Input
                  iconName="credit-card"
                  placeholder="CNH"
                  defaultValue={user.driver_license}
                  keyboardType="numeric"
                />
              </Section>
            ) : (
              <Section>
                <PasswordInput iconName="lock" placeholder="Senha atual" />
                <PasswordInput iconName="lock" placeholder="Nova senha" />
                <PasswordInput iconName="lock" placeholder="Repetir senha" />
              </Section>
            )}
            {/*  <Button title="Salvar alterações" /> */}
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

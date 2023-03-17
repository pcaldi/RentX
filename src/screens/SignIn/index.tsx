import React, { useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView, // Possibilita o usuário ver os botões Login/Criar conta, quando selecionado o input.
  // Permite minimizar o teclado clicando em qualquer lugar da tela.
  Keyboard,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as Yup from "yup";
import { useTheme } from "styled-components";

import { useAuth } from "../../hooks/auth";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";

import { Container, Header, Title, SubTitle, Form, Footer } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme();
  const navigation = useNavigation();
  const { signIn } = useAuth();

  async function handleSigIn() {
    try {
      const scheme = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório.")
          .email("Digite um e-mail válido."),
        password: Yup.string().required("Senha obrigatória"),
      });

      await scheme.validate({ email, password });
      Alert.alert("Tudo certo!");

      signIn({ email, password });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Erro!", error.message);
      } else {
        Alert.alert("Erro na autenticação", "Verifique as credencias ");
      }
    }
  }

  function handleNewAccount() {
    navigation.navigate("SignUpFirstStep");
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <Header>
            <Title>Estamos {"\n"}quase lá.</Title>
            <SubTitle>
              Faça seu login para começar {"\n"}uma experiência incrível.
            </SubTitle>
          </Header>
          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />

            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
          </Form>
          <Footer>
            <Button
              title="Login"
              onPress={handleSigIn}
              enabled={true}
              loading={false}
            />
            <Button
              title="Criar conta gratuita"
              onPress={handleNewAccount}
              enabled={true}
              loading={false}
              color={theme.colors.background_secondary}
              light
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

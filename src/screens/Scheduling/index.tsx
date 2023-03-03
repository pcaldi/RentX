import React from "react";

import { BackButton } from "../../components/BackButton";
import ArrowSvg from "../../assets/arrow.svg";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./styles";

import { useTheme } from "styled-components";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";

export function Scheduling() {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton
          onPress={() => {}}
          color={theme.colors.background_secondary}
        />
        <Title>
          Escolha uma data {"\n"}
          de início e {"\n"}
          fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>02/03/23</DateValue>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>02/03/23</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content></Content>
      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}

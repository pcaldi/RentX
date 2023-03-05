import React from "react";
import { useTheme } from "styled-components";
import { StatusBar } from "react-native";

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";

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
import { useNavigation } from "@react-navigation/native";

export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmRent() {
    navigation.navigate("SchedulingDetails");
  }
  function handleBack() {
    navigation.goBack();
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton
          onPress={handleBack}
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
      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRent} />
      </Footer>
    </Container>
  );
}

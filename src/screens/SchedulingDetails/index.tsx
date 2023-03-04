import React from "react";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import { AccessoryCar } from "../../components/AccessoryCar";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Button } from "../../components/Button";

import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ForceSvg from "../../assets/force.svg";
import PeopleSvg from "../../assets/people.svg";
import ExchangeSvg from "../../assets/exchange.svg";

import {
  Container,
  Header,
  CarImage,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  AccessoryContainer,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./style";
import { useNavigation } from "@react-navigation/native";

export function SchedulingDetails() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmRent() {
    navigation.navigate("SchedulingComplete");
  }
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImage>
        <ImageSlider
          imageUrl={[
            "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/b810e10e-50cd-407d-8707-e5b5f8d4e0ea/10aefd6f-af69-4943-8d0c-66d27aaa0feb.png",
          ]}
        />
      </CarImage>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <AccessoryContainer>
          <AccessoryCar name="340km" icon={SpeedSvg} />
          <AccessoryCar name="3.2S" icon={AccelerationSvg} />
          <AccessoryCar name="800hp" icon={ForceSvg} />
          <AccessoryCar name="Gasoline" icon={GasolineSvg} />
          <AccessoryCar name="Manual" icon={ExchangeSvg} />
          <AccessoryCar name="2 pessoas" icon={PeopleSvg} />
        </AccessoryContainer>
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DIA</DateTitle>
            <DateValue>03/03/2023</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>03/03/2023</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirmRent}
        />
      </Footer>
    </Container>
  );
}

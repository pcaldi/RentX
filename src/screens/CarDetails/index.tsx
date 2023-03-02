import React from "react";

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
  About,
  AccessoryContainer,
  Footer,
} from "./style";

export function CarDetails() {
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
        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <Button title="Escolher período do aluguel" />
      </Footer>
    </Container>
  );
}

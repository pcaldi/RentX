import React from "react";

import { useTheme } from "styled-components";

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from "./styles";

import EnergySvg from "../../assets/energy.svg";
import { RFValue } from "react-native-responsive-fontsize";

type CarProps = {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
};
type DataCarProps = {
  data: CarProps;
};

export function Car({ data }: DataCarProps) {
  const theme = useTheme();
  return (
    <Container>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>
          <Type>
            <EnergySvg
              width={RFValue(20)}
              height={RFValue(20)}
              color={theme.colors.text_detail}
            />
          </Type>
        </About>
      </Details>
      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  );
}

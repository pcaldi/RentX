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

import { RectButtonProps } from "react-native-gesture-handler";
import { CarDTO } from "../../dtos/CarDto";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

type DataCarProps = RectButtonProps & {
  data: CarDTO;
};

export function Car({ data, ...rest }: DataCarProps) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);
  const theme = useTheme();
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{`R$ ${data.price}`}</Price>
          </Rent>
          <Type>
            <MotorIcon />
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

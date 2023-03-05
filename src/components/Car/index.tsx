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
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
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

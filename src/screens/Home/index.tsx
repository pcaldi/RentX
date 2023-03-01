import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { Container, Header, TotalCars, HeaderContent } from "./styles";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";

export function Home() {
  const carDataOne = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "ao dia",
      price: 120,
    },
    thumbnail:
      "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/b810e10e-50cd-407d-8707-e5b5f8d4e0ea/10aefd6f-af69-4943-8d0c-66d27aaa0feb.png",
  };
  const carDataTwo = {
    brand: "Porsche",
    name: "Panamera",
    rent: {
      period: "ao dia",
      price: 340,
    },
    thumbnail:
      "https://crdms.images.consumerreports.org/c_lfill,w_720,q_auto,f_auto/prod/cars/cr/model-years/15635-2023-porsche-panamera",
  };
  const carDataThree = {
    brand: "Chevrolet",
    name: "Corvette z06",
    rent: {
      period: "ao dia",
      price: 620,
    },
    thumbnail:
      "https://inv.assets.sincrod.com/ChromeColorMatch/us/TRANSPARENT_cc_2023CHC060008_01_1280_GD0.png",
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <Car data={carDataOne} />
      <Car data={carDataTwo} />
      <Car data={carDataThree} />
    </Container>
  );
}

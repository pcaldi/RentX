import React from "react";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import { Container, Header, CarImage } from "./style";

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
    </Container>
  );
}

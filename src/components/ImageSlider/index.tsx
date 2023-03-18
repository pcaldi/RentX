import React, { useState, useRef } from "react";
import { FlatList, ViewToken } from "react-native";

import { Bullet } from "../Bullet";

import { Container, ImageIndexes, CarImageWrapper, CarImage } from "./styles";

type CarImageProps = {
  imageUrl: {
    id: string;
    photo: string;
  }[];
};

type ChangedImageProps = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

export function ImageSlider({ imageUrl }: CarImageProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangedImageProps) => {
    const index = info.viewableItems[0].index ?? 0;
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexes>
        {
          // o map possui dois parâmetros, o item(o item em si que percorremos) e o index(a posição do item no array)
          // ao usar o underline, eu oculto o primeiro parâmetro visto que não irei usa-lo
          imageUrl.map((item, index) => (
            <Bullet key={index} active={index === imageIndex} />
          ))
        }
      </ImageIndexes>

      <FlatList
        data={imageUrl}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item.photo }} resizeMode="contain" />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  );
}

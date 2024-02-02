import React from 'react';
import { AddThumb, ImgThumb, Item, Overlay, Span, TextThumb } from './styled/List.styled';
import { formatData } from '../helpers/formatData';
import { Button, HeartButton } from '../pages/styled/main.styled';

const defaultImg = 'https://www.gavalimotors.com/adminpanel/assets/images/carnotfound.jpg'

const CarsListItem = ({ item }) => {
    const { make, model, year, rentalPrice, img } =
    item;
  
  const formatted = formatData(item)
  console.log(formatted);

    return (
      <Item>
        <ImgThumb>
          <Overlay />
          <img src={img ? img : defaultImg} alt={(make, model)} />
          <HeartButton isLiked={ true } />
        </ImgThumb>
        <TextThumb>
          <p>
            <span>{make} </span>
            <Span>{model && model}, </Span>
            <span>{year}</span>
          </p>
          <p>{rentalPrice}</p>
        </TextThumb>
        <AddThumb>
          <p>{formatted} </p>
        </AddThumb>
        <Button>Learn more</Button>
      </Item>
    );
};

export default CarsListItem;
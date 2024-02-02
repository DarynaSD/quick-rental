import React from 'react';
import { AddThumb, ImgThumb, Item, Overlay, Span, TextThumb } from './styled/List.styled';
import { formatData } from '../helpers/formatData';
import { Button, HeartButton } from '../pages/styled/main.styled';

const defaultImg = 'https://www.gavalimotors.com/adminpanel/assets/images/carnotfound.jpg'

const CarsListItem = ({ item, toggleFavorite }) => {
  const { make, model, year, rentalPrice, img, isLiked, id } = item;

  const formatted = formatData(item);

  const like = isLiked ? 'liked' : '';

  return (
    <Item>
      <ImgThumb>
        <Overlay />
        <img src={img ? img : defaultImg} alt={(make, model)} />
        <HeartButton isli={like} onClick={() => toggleFavorite(id)} />
      </ImgThumb>
      <TextThumb>
        <p>
          <span>{make}</span>
          <Span>{model && model.length < 10 && ` ${model}`}</Span>
          <span>{`, ${year}`}</span>
        </p>
        <p>{rentalPrice}</p>
      </TextThumb>
      <AddThumb>
        <p>{formatted} </p>
        <Button margin={'0'}>Learn more</Button>
      </AddThumb>
    </Item>
  );
};

export default CarsListItem;
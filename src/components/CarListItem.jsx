import React from 'react';
import { AddThumb, ImgThumb, Item, Overlay, Span, TextThumb } from './styled/List.styled';
import { formatData } from '../helpers/formatData';
import { Button, HeartButton } from '../pages/styled/main.styled';

const defaultImg = 'https://www.gavalimotors.com/adminpanel/assets/images/carnotfound.jpg'

const CarsListItem = ({
  item,
  toggleFavorite,
  handleModalOpen,
  handleDelModalOpen, page,
}) => {
  const { make, model, year, rentalPrice, img, isLiked, id } = item;

  const formatted = formatData(item);

  const like = isLiked ? 'liked' : '';

  return (
    <Item>
      <ImgThumb>
        <Overlay />
        <img src={img ? img : defaultImg} alt={(make, model)} />
        <HeartButton isli={like} onClick={
          page === 'favPage' ? () => handleDelModalOpen(id) : () => toggleFavorite(id)} />
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
        <Button
          type="button"
          margin={'0'}
          onClick={() => handleModalOpen(item)}
        >
          Learn more
        </Button>
      </AddThumb>
    </Item>
  );
};

export default CarsListItem;
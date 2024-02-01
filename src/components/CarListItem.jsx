import React from 'react';
import { ImgThumb, Item, Overlay, TextThumb } from './styled/List.styled';

const defaultImg = 'https://www.gavalimotors.com/adminpanel/assets/images/carnotfound.jpg'

const CarsListItem = ({ item }) => {
    const { make, model, year, rentalPrice, address, rentalCompany, img } =
      item;
    return (
      <Item>
        <ImgThumb>
          <Overlay />
          <img src={img ? img : defaultImg} alt={(make, model)} />
        </ImgThumb>
        <TextThumb>
          <p>
            <span>{make} </span>
            <span>{model && model}, </span>
            <span>{year}</span>
          </p>
          <p>{rentalPrice}</p>
        </TextThumb>
      </Item>
    );
};

export default CarsListItem;
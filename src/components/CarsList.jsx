import React from 'react';
import { nanoid } from '@reduxjs/toolkit';

import CarsListItem from './CarListItem';
import { List } from './styled/List.styled';

const CarsList = ({ cars }) => {
  return (
    <List>
      {cars.map(one => (
        <CarsListItem item={one} key={nanoid()}  />
      ))}
    </List>
  );
};

export default CarsList;
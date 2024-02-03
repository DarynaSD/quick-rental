import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import CarsListItem from './CarListItem';
import { List } from './styled/List.styled';
import { useSelector } from 'react-redux';
import { selectLoading } from '../redux/selectors';
import { Loader } from './Loader';
import { LoadMoreButton } from './styled/LoadMoreButton.styled';

const CarsList = ({ cars, toggleFavorite }) => {

  const [count, setCount] = useState(12);
  const isLoading = useSelector(selectLoading);
  const total = cars.length;
  const lastPage = total <= count;
    
  console.log('lastPage >>', lastPage);
  console.log(total - count);
  
    const handleLoadMore = () => {
      setCount(prev => prev + 12);
  };
  
  return (
    <List>
      {isLoading && <Loader />}
      {cars &&
        cars
          .slice(0, count)
          .map(one => (
            <CarsListItem
              item={one}
              toggleFavorite={toggleFavorite}
              key={nanoid()}
            />
          ))}

      { !lastPage ? (
        <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
      ) : null}
    </List>
  );
};

export default CarsList;
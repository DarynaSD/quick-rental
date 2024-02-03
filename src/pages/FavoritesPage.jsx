import React from 'react';
import { Section, Wrap } from './styled/main.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavCars } from '../redux/selectors';
import { toggleFavCars } from '../redux/slice';
import CarsList from '../components/CarsList';
import EmptyFavorites from '../components/EmptyFavorites';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favCars = useSelector(selectFavCars);
  console.log('favCars >>', favCars);

  const toggleFavorite = itemId => {
    dispatch(toggleFavCars(itemId));
  };

  return (
    <Wrap>
      <Section>
        {favCars.length ? (
          <CarsList cars={favCars} toggleFavorite={toggleFavorite} />
        ) : (
          <EmptyFavorites />
        )}
      </Section>
    </Wrap>
  );
};

export default FavoritesPage;

import React from 'react';
import { Section, Wrap } from './styled/main.styled';
import { useSelector } from 'react-redux';
import { selectFavCars } from '../redux/selectors';
import CarsList from '../components/CarsList';
import EmptyFavorites from '../components/EmptyFavorites';

const FavoritesPage = () => {
  const favCars = useSelector(selectFavCars);

  return (
    <Wrap>
      <Section>
        {favCars.length ? (
          <CarsList cars={favCars} page='favPage' />
        ) : (
          <EmptyFavorites />
        )}
      </Section>
    </Wrap>
  );
};

export default FavoritesPage;

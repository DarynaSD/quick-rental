import React, { useState } from 'react';
import { Section, Wrap } from './styled/main.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavCars } from '../redux/selectors';
import { toggleFavCars } from '../redux/slice';
import CarsList from '../components/CarsList';
import EmptyFavorites from '../components/EmptyFavorites';
import { DeleteModal } from '../components/DeleteModal';

const FavoritesPage = () => {
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const dispatch = useDispatch();
  const favCars = useSelector(selectFavCars);

  const toggleFavorite = itemId => {
    dispatch(toggleFavCars(itemId));
  };

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

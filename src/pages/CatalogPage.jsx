import React, { useEffect } from 'react';
import { Section, Wrap } from './styled/main.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from '../redux/thunk';
import CarsList from '../components/CarsList';
import { selectCars } from '../redux/selectors';
import { toggleFavCars } from '../redux/slice';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    if (!cars || !cars.length) dispatch(fetchAllCars());
  }, [dispatch, cars]);

  const toggleFavorite = itemId => {
    dispatch(toggleFavCars(itemId));
  };

  return (
    <Wrap>
      <Section>
        <CarsList cars={cars} toggleFavorite={toggleFavorite} />
      </Section>
    </Wrap>
  );
};

export default CatalogPage;

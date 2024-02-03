import React, { useEffect } from 'react';
import { Section, Wrap } from './styled/main.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from '../redux/thunk';
import CarsList from '../components/CarsList';
import {  selectVisibleCars } from '../redux/selectors';
import { toggleFavCars } from '../redux/slice';
import Form from '../components/Form';


const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectVisibleCars);

  useEffect(() => {
    if (!cars || !cars.length) dispatch(fetchAllCars());
  }, [dispatch, cars]);

  const toggleFavorite = itemId => {
    dispatch(toggleFavCars(itemId));
  };

  return (
    <Wrap>
      <Section>
        <Form/>
        <CarsList cars={cars} toggleFavorite={toggleFavorite} />
      </Section>
    </Wrap>
  );
};

export default CatalogPage;

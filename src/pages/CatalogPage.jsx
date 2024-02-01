import React, { useEffect } from 'react';
import { Section, Wrap } from './styled/main.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from '../redux/thunk';
import CarsList from '../components/CarsList';
import { selectCars } from '../redux/selectors';


const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    if (!cars || !cars.length) dispatch(fetchAllCars());
  }, [dispatch, cars]);

  return (
    <Wrap>
      <Section>
        <CarsList cars={cars} />
      </Section>
    </Wrap>
  );
};

export default CatalogPage;

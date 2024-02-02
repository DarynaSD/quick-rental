import React, { useEffect } from 'react';
import { Section, Wrap } from './styled/main.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from '../redux/thunk';
import CarsList from '../components/CarsList';
import { selectCars, selectFavCars } from '../redux/selectors';
import { addFavCars, deleteFavCars } from '../redux/slice';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const favorites = useSelector(selectFavCars);

  useEffect(() => {
    if (!cars || !cars.length) dispatch(fetchAllCars());
  }, [dispatch, cars]);

  const toggleFavorite = itemId => {
    const alreadyExist = favorites.find(item => item.id === itemId);
    console.log('alreadyExist >>', alreadyExist);
    if (alreadyExist) dispatch(deleteFavCars(itemId));

    const dontExist = cars.find(item => item.id === itemId);
    console.log('dontExist >>', dontExist);
    dispatch(addFavCars(dontExist));
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

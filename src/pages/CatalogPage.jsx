import React, { useEffect } from 'react';
import { Section, Wrap } from './styled/main.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from '../redux/thunk';
import CarsList from '../components/CarsList';
import { selectFilters, selectVisibleCars } from '../redux/selectors';
import { toggleFavCars } from '../redux/slice';
import Form from '../components/Form';
import { Empty } from 'components/styled/Empty.styled';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectVisibleCars);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    if ((!cars || !cars.length) && !filters) dispatch(fetchAllCars());
  }, [dispatch, cars, filters]);

  const toggleFavorite = itemId => {
    dispatch(toggleFavCars(itemId));
  };

  return (
    <Wrap>
      <Section>
        <Form  />
        {cars.length ? (
          <CarsList cars={cars} toggleFavorite={toggleFavorite} />
        ) : (
          <Empty>
            No cars were found by your request. Try search with other filter
            values.
          </Empty>
        )}
      </Section>
    </Wrap>
  );
};

export default CatalogPage;

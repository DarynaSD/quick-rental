import { createSelector } from '@reduxjs/toolkit';
// import { selectFilter } from '../redux/selectors';

export const selectLoading = state => state.cars.isLoading;

export const selectError = state => state.cars.error;

export const selectCars = state => state.cars.cars;

export const selectFilters = state => state.cars.filter;

export const selectFavCars = state => {
  const allCars = state.cars.cars;
  const favorites = allCars.filter(el => el.isLiked);
  return favorites;
};

export const selectVisibleCars = createSelector(
  [selectCars, selectFilters],
  (cars, { brand, price }) => {
    console.log('brand >>', brand);
      return cars
          .filter(one =>
      brand !== '' ? one.make.toLowerCase() === brand.toLowerCase() : one
      )
          .filter(one => {
              const formattedPrice = Number(one.rentalPrice.slice(1, one.rentalPrice.length));
              return price ? formattedPrice <= Number(price) : one}
    );
  }
);

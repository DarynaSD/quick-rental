// import { createSelector } from '@reduxjs/toolkit';
// import { selectFilter } from '../redux/selectors';

export const selectLoading = state => state.cars.isLoading;

export const selectError = state => state.cars.error;

export const selectCars = state => state.cars.cars;

export const selectFavCars = state => {
    const allCars = state.cars.cars;
    const favorites = allCars.filter(el => el.isLiked);
    return favorites;
}

// export const selectVisibleContacts = createSelector(
//   [selectCars, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
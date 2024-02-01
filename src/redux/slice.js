import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAllCars } from './thunk';


const getActions = type =>
  isAnyOf(fetchAllCars[type]);

const initialState = { cars: [], favorites: [], isLoading: false, error: null };

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.cars = action.payload;
      })
      .addMatcher(getActions('pending'), state => {
        state.isLoading = true;
      })
      .addMatcher(getActions('rejected'), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(getActions('fulfilled'), state => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const { addFavCars, deleteFavCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAllCars } from './thunk';


const getActions = type =>
  isAnyOf(fetchAllCars[type]);

const initialState = { cars: [], isLoading: false, error: null };

const carsSlice = createSlice({
  name: 'cars',
  initialState,

  reducers: {
    toggleFavCars: (state, { payload }) => {
      state.cars = state.cars.map((el) =>
        el.id === payload ? { ...el, isLiked: !el.isLiked } : el);
    },
  },

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

export const { toggleFavCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
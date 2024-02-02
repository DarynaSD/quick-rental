import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAllCars } from './thunk';


const getActions = type =>
  isAnyOf(fetchAllCars[type]);

const initialState = { cars: [], favorites: [], isLoading: false, error: null };

const carsSlice = createSlice({
  name: 'cars',
  initialState,

  // updateTodo: (state, { payload }) => {
	// 		state.todo = state.todo.map((el) =>
	// 			el.id === payload ? { ...el, completed: !el.completed } : el
	// 		)

  reducers: {
    addFavCars: (state, { payload }) => {
      console.log("payload in addFavCars >> ", payload);
  
      console.log("state.favorites", JSON.parse(JSON.stringify(state.favorites)))

      state.cars = state.cars.map((el) =>
        el.id === payload.id ? { ...el, isLiked: true } : el);
      
      state.favorites = state.favorites.length ? [payload, ...state.favorites] : [payload];
    },

    deleteFavCars: (state, { payload }) => {
      state.favorites = state.favorites.filter(el => el.id !== payload);
      console.log("payload in deleteFavCars >> ", payload);
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

export const { addFavCars, deleteFavCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
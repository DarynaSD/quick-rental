import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllCars = createAsyncThunk(
  'cars/fetchAllCars',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://65364b41c620ba9358ed4420.mockapi.io/adverts'
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

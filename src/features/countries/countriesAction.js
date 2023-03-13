import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//Show all countries

export const showCountries = createAsyncThunk(
  'countries/showCountries',
  async (_, thunkAPI) => {
    try {
      const response = await axios(`https://restcountries.com/v2/all`);
      return response.data;
    } catch (error) {
      const message = (error.response && error.response.data) || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

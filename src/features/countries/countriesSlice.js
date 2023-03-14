import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Show all countries

export const showCountries = createAsyncThunk(
  'countries/showCountries',
  async (_, thunkAPI) => {
    try {
      const response = await axios(`https://restcountries.com/v3.1/all`);
      return response.data;
    } catch (error) {
      const message = (error.response && error.response.data) || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//Search by cioc code

export const searchByCode = createAsyncThunk(
  'countries/searchByCode',
  async (code, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      return response.data;
    } catch (error) {
      const message = (error.response && error.response.data) || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  loading: false,
  countriesData: [],
  countrySearched: [],
  error: false,
  success: false,
  message: '',
  searchTerm: '',
};
const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(showCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(showCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.success = true;
      })
      .addCase(showCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countriesData = [];
      })
      .addCase(searchByCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchByCode.fulfilled, (state, action) => {
        state.loading = false;
        state.countrySearched = action.payload;
        state.success = true;
      })
      .addCase(searchByCode.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countrySearched = [];
      });
  },
});
export const { setSearchTerm } = countriesSlice.actions;
export default countriesSlice.reducer;

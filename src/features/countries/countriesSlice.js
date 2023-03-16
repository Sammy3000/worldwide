import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCountries = createAsyncThunk(
  'countries/getCountries',
  async () => {
    const result = await fetch('https://restcountries.com/v2/all');
    return result.json();
  }
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    loading: false,
    error: null,
    countries: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default countriesSlice.reducer;

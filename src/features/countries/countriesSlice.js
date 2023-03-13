import { createSlice } from '@reduxjs/toolkit';
import { Action } from '@remix-run/router';
import { showCountries } from './countriesAction';

const initialState = {
  loading: false,
  countriesData: [],
  countryData: [],
  error: false,
  success: false,
  message: '',
};
const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
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
      });
  },
});
export default countriesSlice.reducer;

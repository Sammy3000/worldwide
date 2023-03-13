import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  countriesData: [],
  countryData: [],
  error: false,
  success: false,
  meaasge: '',
};
const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});
export default countriesSlice.reducer;

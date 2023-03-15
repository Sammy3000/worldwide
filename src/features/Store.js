import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countriesSlice';

const Store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
export default Store;

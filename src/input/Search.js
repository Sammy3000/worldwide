import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../features/countries/countriesSlice';

const Search = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((store) => store.countries);
  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter country name..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;

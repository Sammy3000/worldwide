import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../../features/countries/countriesSlice';
import './Country.css';

function Country() {
  const { countries, loading, error } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  React.useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  React.useEffect(() => {
    setFilteredCountries(
      countries.filter((country) => country.name.toLowerCase().includes(searchTerm.toLowerCase())),
    );
  }, [countries, searchTerm]);

  if (loading) return <h2>Loading...</h2>;
  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search for a country..."
        />
      </div>
      <div className="countries-list-container">
        {filteredCountries.map((country) => (
          <div
            className="country-item"
            key={country.alpha3Code}
          >
            <Link to={`/countries/${country.alpha3Code}`}>
              <img
                src={country.flag}
                alt={country.name}
                className="country-flag"
              />
              <BsArrowRightCircle className="arrow-icon" />
              <div className="country-info">
                <h3 className="country-name">{country.name}</h3>
                <p className="country-timezone">{country.capital}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Country;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showCountries } from '../features/countries/countriesSlice';
// import '../styles/Country.css';
const Country = () => {
  const { countriesData, loading, error, success, searchTerm } = useSelector(
    (store) => store.countries
  );
  const [countryItem, setCountryItem] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showCountries());
    if (success) {
      setCountryItem(countriesData);
    }
    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success]);
  const data = countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm)
  );
  return (
    <section className="country-container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.length > 0 &&
        data.map((item, index) => {
          return (
            <Link
              className="country-card"
              key={index}
              to={`/${item.cioc}`}
            >
              <img
                src={item.flags.png}
                alt={item.flags.alt}
                className="country-image"
              />
              <div className="country-content">
                <h3>{item.name.common} </h3>
                <p>
                  Population: <span>{item.population}</span>
                </p>
                <p>
                  Region: <span>{item.region}</span>
                </p>
                <p>
                  Capital: <span>{item.capital}</span>
                </p>
              </div>
            </Link>
          );
        })
      )}
    </section>
  );
};

export default Country;

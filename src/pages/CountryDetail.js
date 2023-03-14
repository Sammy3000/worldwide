import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchByCode } from '../features/countries/countriesSlice';

const CountryDetail = () => {
  const { loading, error, countrySearched } = useSelector(
    (store) => store.countries
  );
  const dispatch = useDispatch();
  const { code } = useParams();
  useEffect(() => {
    if (code) {
      dispatch(searchByCode(code.toLowerCase()));
    }
    if (error) {
      console.log(error);
    }
  }, [dispatch, code, error]);
  return (
    <div>
      <img
        src={countrySearched[0].flags.png}
        alt={countrySearched[0].flags.alt}
        className="country-image"
      />
      <p>
        Official Name: <span>{countrySearched[0].name.official}</span>
      </p>
      <p>
        Region: <span>{countrySearched[0].region}</span>
      </p>
      <p>
        sub-region: <span>{countrySearched[0].subregion}</span>
      </p>
      <p>
        Capital: <span>{countrySearched[0].capital}</span>
      </p>
      <p>
        Currencies:{' '}
        <span>
          {Object.values(countrySearched[0].currencies)
            .map((item) => {
              return item.name;
            })
            .join(',')}
        </span>
      </p>
      <p>
        Languages:{' '}
        <span>
          {Object.values(countrySearched[0].languages)
            .map((item) => {
              return item;
            })
            .join(',')}
        </span>
      </p>
      <div>
        <p>Border countries:</p>
        {countrySearched[0].borders ? (
          countrySearched[0].borders.map((country, index) => {
            return (
              <Link
                key={index}
                to={`/${country}`}
              >
                <p>{country}</p>
              </Link>
            );
          })
        ) : (
          <span>No borders</span>
        )}
      </div>
    </div>
  );
};
export default CountryDetail;

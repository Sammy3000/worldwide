import reducer, { getCountries } from '../features/countries/countriesSlice';

describe('Countries reducer tests', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      loading: false,
      error: null,
      countries: [],
    });
  });

  test('should handle get countries pending state', () => {
    const previousState = {
      loading: false,
      error: null,
      countries: [],
    };
    const action = { type: getCountries.pending.toString() };
    expect(reducer(previousState, action)).toEqual({
      loading: true,
      error: null,
      countries: [],
    });
  });

  test('should handle get countries fulfilled state', () => {
    const previousState = {
      loading: true,
      error: null,
      countries: [],
    };
    const action = {
      type: getCountries.fulfilled.toString(),
      payload: [{ name: 'Thailand' }, { name: 'Singapore' }],
    };
    expect(reducer(previousState, action)).toEqual({
      loading: false,
      error: null,
      countries: [{ name: 'Thailand' }, { name: 'Singapore' }],
    });
  });

  test('should handle get countries rejected state', () => {
    const previousState = {
      loading: true,
      error: null,
      countries: [],
    };
    const action = {
      type: getCountries.rejected.toString(),
      error: 'Something went wrong',
    };
    expect(reducer(previousState, action)).toEqual({
      loading: false,
      error: 'Something went wrong',
      countries: [],
    });
  });
});

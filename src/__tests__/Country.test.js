import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Store from '../features/Store';
import Country from '../components/pages/Countries';

describe('Testing missions component', () => {
  it('Test Missions Component', () => {
    const data = render(
      <Provider store={Store}>
        <Country />
      </Provider>,
    );
    expect(data).toMatchSnapshot();
  });
});

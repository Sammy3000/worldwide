import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Store from '../features/Store';
import Countries from '../components/pages/Countries';

describe('Testing missions component', () => {
  it('Test Missions Component', () => {
    const data = render(
      <Provider store={Store}>
        <Countries />
      </Provider>,
    );
    expect(data).toMatchSnapshot();
  });
});

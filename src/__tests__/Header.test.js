import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from '../components/Header';
import Store from '../features/Store';

describe('Header component', () => {
  it('should render Header component', () => {
    const { container } = render(
      <Provider store={Store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});

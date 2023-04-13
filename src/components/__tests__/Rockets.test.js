import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import Rockets from '../rocket/Rockets';
import store from '../../redux/store';

describe('Jest Snapshot testing suite', () => {
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const ele = screen.getByText(/Rockets data loading...!/i);
    expect(ele).toBeInTheDocument();
  });
});

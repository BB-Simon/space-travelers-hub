import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Missions from '../Missions';

describe('Jest Snapshot testing suite', () => {
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const ele = screen.getByText(/Missions data loading...!/i);
    expect(ele).toBeInTheDocument();
  });
});

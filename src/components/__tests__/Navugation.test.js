import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../Navigation';

describe('Navigation', () => {
  it('Renders correctly', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );
    const logoEle = screen.getByText(/Space Travelers Hub/i);
    expect(logoEle).toBeInTheDocument();
    const homeLink = screen.getByText(/Rockets/i);
    expect(homeLink).toBeInTheDocument();
    const missionsLink = screen.getByText(/Missions/i);
    expect(missionsLink).toBeInTheDocument();
    const myProfileLink = screen.getByText(/My Profile/i);
    expect(myProfileLink).toBeInTheDocument();
  });
});

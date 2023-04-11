import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  const navLink = ({ isActive }) => (isActive ? `${css.navLink} ${css.active}` : `${css.navLink}`);

  return (
    <nav className={css.navbar}>
      <Link to="/" className={css.logoWrapper}>
        <img className={css.logo} src="planet.png" alt="Logo" />
        <h1 className={css.logoTitle}>Space Travelers Hub</h1>
      </Link>
      <ul>
        <li>
          <NavLink
            to="/my-profile"
            className={navLink}
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

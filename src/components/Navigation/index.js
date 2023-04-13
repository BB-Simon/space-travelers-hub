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
      <ul className={css.navItemsWrapper}>
        <li className={css.navItem}>
          <NavLink
            to="/"
            className={navLink}
          >
            Rockets
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            to="/missions"
            className={navLink}
          >
            Missions
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            to="/my-profile"
            className={navLink}
          >
            <span className={css.span}>|</span>
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

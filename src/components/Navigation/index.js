import React from 'react';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={css.navbar}>
      <div className={css.logoWrapper}>
        <img className={css.logo} src="planet.png" alt="Logo" />
        <h1 className={css.logoTitle}>Space Travelers' Hub</h1>
      </div>
      <ul>
        <li>
          My Profile
          {/* <NavLink>My Profile</NavLink> */}
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
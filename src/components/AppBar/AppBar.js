import React from 'react';
import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <ul className="AppBar">
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink_active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className="NavLink"
          activeClassName="NavLink_active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default AppBar;

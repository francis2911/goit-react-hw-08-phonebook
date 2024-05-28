import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <ul className="flex-between p-0 style-none">
        <li>
          <NavLink to={'/signup'}>
            <button className="btn btn-primary">Sign Up</button>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/login'}>
            <button className="btn btn-primary">Login</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

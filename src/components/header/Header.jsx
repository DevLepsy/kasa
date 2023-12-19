import React from "react";
import { NavLink } from "react-router-dom";
// @ts-ignore
import logo from "../assets/color_logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa Logo" className="header-logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link-active" : "nav-link"
              }
            >
              Accueil
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/a-propos"
              className={({ isActive }) =>
                isActive ? "nav-link-active" : "nav-link"
              }
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

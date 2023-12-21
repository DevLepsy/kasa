import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/color_logo.png";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <img src={logo} alt="Logo Kasa" />
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/a-propos"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

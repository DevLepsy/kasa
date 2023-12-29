import React from "react";
import { NavLink } from "react-router-dom";
// @ts-ignore
import color_logo from "../assets/color_logo.png"; // Assure-toi que le chemin vers tes images est correct.

export default function Header() {
  return (
    <nav>
      <img src={color_logo} alt="Logo Kasa" />
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

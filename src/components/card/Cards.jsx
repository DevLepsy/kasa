import React from "react";
import { NavLink } from "react-router-dom";

function Cards({ details }) {
  return (
    <NavLink to={`/logements/${details.id}`} className="card">
      <img src={details.cover} alt={details.title} className="card-cover" />
      <div className="card-content">
        <h2 className="card-title">{details.title}</h2>
        <p className="card-text">{details.location}</p>
        <p className="card-price">{details.price} €</p>
      </div>
    </NavLink>
  );
}

export default Cards;

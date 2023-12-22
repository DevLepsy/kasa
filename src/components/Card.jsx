import React from "react";
import { Link } from "react-router-dom";

function Card({ location }) {
  return (
    <Link to={"/fiche-logement/" + location.id} key={"" + location.id}>
      <article>
        <img src={location.cover} alt={location.title} />
        <h2>{location.title}</h2>
      </article>
    </Link>
  );
}

export default Card;

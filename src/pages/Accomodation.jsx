import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Collapse from "../components/Collapse";
import data from "../data/data.json";
import color_star from "../assets/color_star.png";
import gray_star from "../assets/gray_star.png";
import Carrousel from "../components/Carrousel";

function Accomodation() {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const selectedItem = data.find((item) => item.id === id);

  useEffect(() => {
    if (!selectedItem) {
      navigate("*");
    }
  }, [navigate, selectedItem]);

  if (selectedItem) {
    const {
      pictures,
      title,
      description,
      host,
      rating,
      location,
      equipments,
      tags,
    } = selectedItem;

    const ratingNumber = parseInt(rating);
    const stars = Array.from({ length: 5 }, (_, index) => (
      <img
        key={index}
        src={index < ratingNumber ? color_star : gray_star}
        alt={index < ratingNumber ? "star" : "empty-star"}
      />
    ));

    return (
      <section className="accomodationContent">
        <Carrousel imageList={pictures} />

        <div className="accomodationDetails">
          <div className="propertyInfo">
            <div>
              <h1>{title}</h1>
              <p>{location}</p>
            </div>
            <ul>
              {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="hostStars">
            <div className="host">
              <p>{host.name}</p>
              <img src={host.picture} alt={host.name} />
            </div>
            <div>{stars}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Accomodation;

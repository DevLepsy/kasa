import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import data from "../data/data.json";
// @ts-ignore
import color_star from "../assets/color_star.png";
// @ts-ignore
import gray_star from "../assets/gray_star.png";
import Collapse from "../components/Collapse";

export default function Accommodation() {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const selectedItem = data.find((item) => item.id === id);

  useEffect(() => {
    if (!selectedItem) {
      navigate("*");
    }
  }, [selectedItem, navigate]);

  if (selectedItem) {
    const {
      pictures,
      title,
      location,
      host,
      tags,
      rating,
      description,
      equipments,
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
      <section className="accommodationContent">
        <Carrousel imagesList={pictures} />

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
        <div className="accommodationCollapse">
          <Collapse title="Description" content={description} />
          <Collapse
            title="Équipements"
            content={
              <ul>
                {equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </section>
    );
  }
}

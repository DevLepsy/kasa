import React from "react";

import { useLocation } from "react-router-dom";
import Banner from "../components/Banner.jsx";
import Card from "../components/Card.jsx";
import data from "../data/data.json";

function Home() {
  const location = useLocation();

  return (
    <div>
      <Banner
        // @ts-ignore
        location={location}
      />
      <section className="cardsContainer">
        {data.map((location, index) => (
          <Card location={location} key={index} />
        ))}
      </section>
    </div>
  );
}
export default Home;

import React from "react";
import { useLocation } from "react-router-dom";
import Banner from "../components/Banner.jsx";
import Card from "../components/Cards.jsx";
import data from "../data/data.json";

function Home() {
  const location = useLocation();
  const cardsToShow = data.slice(0, 6);
  return (
    <div>
      <Banner
        // @ts-ignore
        location={location}
      />
      <section className="cardsContainer">
        {cardsToShow.map((item, index) => (
          // @ts-ignore
          <Card key={index} details={item} />
        ))}
      </section>
    </div>
  );
}

export default Home;

import React from "react";

import homePicture from "../assets/home_picture.jpg";
import aboutPicture from "../assets/about_picture.jpg";

// Supposition que le fichier SCSS global est déjà importé ailleurs dans l'application.

const bannerConfig = {
  "/": {
    image: homePicture,
    text: "Chez vous, partout et ailleurs",
  },
  "/a-propos": {
    image: aboutPicture,
    text: "",
  },
};

function Banner() {
  const currentPath = location.pathname;
  const { image, text } = bannerConfig[currentPath];

  return (
    <section
      className={`banner ${currentPath === "/" ? "" : "heightAboutBanner"}`}
    >
      <img src={image} alt="Bannière" />
      {currentPath === "/" && <h1>{text}</h1>}
    </section>
  );
}

export default Banner;

import React from "react";

// @ts-ignore
import homePicture from "../assets/home_picture.jpg";
// @ts-ignore
import aboutPicture from "../assets/about_picture.jpg";

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

import React from "react";
import { useLocation } from "react-router-dom";
import homePicture from "../assets/home_picture.jpg";
import aboutPicture from "../assets/about_picture.jpg";

const bannerImages = {
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
  const location = useLocation();
  const currentPath = location.pathname;
  const bannerContent = bannerImages[currentPath] || bannerImages["/"];
  return (
    <section
      className={`banner ${currentPath === "/" ? "" : "heigthAboutBanner"}`}
    >
      <img src={bannerContent.image} alt="Bannière" />
      {currentPath === "/" && <h1>{bannerContent.text}</h1>}
    </section>
  );
}

export default Banner;

import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Banner.module.scss";
import homePicture from "../../assets/home_picture.jpg";
import aboutPicture from "../../assets/about_picture.jpg";

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
  const location = useLocation();
  const { image, text } = bannerConfig[location.pathname] || bannerConfig["/"];

  return (
    <section
      className={`${styles.banner} ${
        location.pathname === "/" ? "" : styles.heightAboutBanner
      }`}
    >
      <img src={image} alt="Bannière" />
      {text && <h1>{text}</h1>}
    </section>
  );
}

export default Banner;

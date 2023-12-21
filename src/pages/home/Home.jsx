import React from "react";
// @ts-ignore
import styles from "./Home.module.scss";
import Banner from "../../components/banner/Banner.jsx";
import Gallery from "../../components/gallery/Gallery.jsx";

function Home() {
  return (
    <div className={styles.home}>
      <Banner />
      <Gallery />
    </div>
  );
}
export default Home;

import React, { useState } from "react";
// @ts-ignore
import leftArrow from "../assets/left_arrow.png";
// @ts-ignore
import rightArrow from "../assets/right_arrow.png";

function Carrousel({ imagesList }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = imagesList[currentIndex];

  const slideLeft = () => {
    setCurrentIndex(
      currentIndex === 0 ? imagesList.length - 1 : currentIndex - 1
    );
  };

  const slideRight = () => {
    setCurrentIndex(
      currentIndex === imagesList.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="descriptionAccommodation">
      <img src={currentImage} alt="Logement" className="imageAccommodation" />
      {imagesList.length === 1 ? null : (
        <div>
          <img onClick={() => slideLeft()} src={leftArrow} alt="Précédente" />
          <p>
            {currentIndex + 1}/{imagesList.length}
          </p>
          <img onClick={() => slideRight()} src={rightArrow} alt="Suivante" />
        </div>
      )}
    </div>
  );
}
export default Carrousel;

import React, { useState } from "react";
// @ts-ignore
import leftArrow from "../assets/left_arrow.png";
// @ts-ignore
import rightArrow from "../assets/right_arrow.png";

function Carrousel({ imagesList }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = imagesList[currentIndex];

  const slideLeft = () => {
    const nextIndex =
      currentIndex === 0 ? imagesList.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
  };

  const slideRight = () => {
    const nextIndex =
      currentIndex === imagesList.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="descriptionAccommodation">
      <img src={currentImage} alt="Logement" className="imageAccommodation" />
      {imagesList.length > 1 && (
        <div>
          <img onClick={slideLeft} src={leftArrow} alt="Précédente" />
          <p>
            {currentIndex + 1}/{imagesList.length}
          </p>
          <img onClick={slideRight} src={rightArrow} alt="Suivante" />
        </div>
      )}
    </div>
  );
}

export default Carrousel;

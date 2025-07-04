import React, { useState, useEffect } from "react";
import "../comp_css/Slider.css"; //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Slider = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images, interval]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  return (
    <div className="slider-container">
      <div className="slider">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="slide-image"
        />
        
        <button className="slider-button prev" onClick={goToPrevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        
        <button className="slider-button next" onClick={goToNextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="slider-dots">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;

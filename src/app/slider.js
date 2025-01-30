'use client'
import React, { useState, useEffect } from "react";

const images = [
  "https://m7investment.vercel.app/images-and-icon/dubai_real_estate_resized.jpg",
  "https://m7investment.vercel.app/images-and-icon/aerospace.jpg",
  "https://m7investment.vercel.app/images-and-icon/Funding_Holdings.jpg",
  "https://m7investment.vercel.app/images-and-icon/s7.png",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="wow animate__animated animate__fadeInUp slider-container">
      <div className="image-wrapper">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="gradient-border" />
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

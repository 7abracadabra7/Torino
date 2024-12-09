"use client";
import React, { useState } from "react";
import styles from "./ImageSlider.module.css";

const ImageSlider = () => {
  const initialImages = [
    "/images/photo1.png",
    "/images/photo2.png",
    "/images/photo3.png",
    "/images/photo4.png",
  ];

  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      const movedImage = newImages.shift();
      newImages.push(movedImage); 
      console.log(currentIndex + 1, newImages);
      return newImages;
    });
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 4); 
  };

  const prevSlide = () => {
  setImages((prevImages) => {
      const newImages = [...prevImages];
      const movedImage = newImages.pop(); 
      newImages.unshift(movedImage); 
      return newImages;
    });
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return 3;
      }
      return prevIndex - 1; 
    });
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slides}>
        {images.map((image, index) => (
          <div
            className={`${styles.slide} ${
              index === currentIndex ? styles.active : ""
            }`}
            key={index}
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <span className={styles.slideNumber}>Slide {currentIndex }</span>
          </div>
        ))}
      </div>
      <button className={styles.prevButton} onClick={prevSlide}>
        ❮
      </button>
      <button className={styles.nextButton} onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;                                                                                                          

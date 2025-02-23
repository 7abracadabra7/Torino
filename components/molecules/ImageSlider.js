"use client";
import React, { useState } from "react";
import styles from "./ImageSlider.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const ImageSlider = () => {
  const initialImages = [
    "/images/photo1.png",
    "/images/photo2.png",
    "/images/photo3.png",
    "/images/photo4.png",
  ];

  const [images, setImages] = useState(initialImages);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const nextSlide = () => {
  //   setImages((prevImages) => {
  //     const newImages = [...prevImages];
  //     const movedImage = newImages.shift();
  //     newImages.push(movedImage);
  //     console.log(currentIndex + 1, newImages);
  //     return newImages;
  //   });
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
  // };

  // const prevSlide = () => {
  //   setImages((prevImages) => {
  //     const newImages = [...prevImages];
  //     const movedImage = newImages.pop();
  //     newImages.unshift(movedImage);
  //     return newImages;
  //   });
  //   setCurrentIndex((prevIndex) => {
  //     if (prevIndex === 0) {
  //       return 3;
  //     }
  //     return prevIndex - 1;
  //   });
  // };

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.swiper}
      >
        {images.map((image, index) => (
          // <div
          //   className={`${styles.slide} ${
          //     index === currentIndex ? styles.active : ""
          //   }`}
          //   key={index}
          //   style={{
          //     backgroundImage: `url(${image})`,
          //   }}
          // >

          <SwiperSlide className={styles["swiper-slide"]}>
          
            <img src={image} />
          </SwiperSlide>
          // </div>
        ))}

      </Swiper>
    </>
    //

    // <div className={styles.sliderContainer}>
    //   <div className={styles.slides}>
    //     {images.map((image, index) => (
    //       <div
    //         className={`${styles.slide} ${
    //           index === currentIndex ? styles.active : ""
    //         }`}
    //         key={index}
    //         style={{
    //           backgroundImage: `url(${image})`,
    //         }}
    //       >
    //         <span className={styles.slideNumber}>Slide {currentIndex }</span>
    //       </div>
    //     ))}
    //   </div>
    //   <button className={styles.prevButton} onClick={prevSlide}>
    //     ❮
    //   </button>
    //   <button className={styles.nextButton} onClick={nextSlide}>
    //     ❯
    //   </button>
    // </div>
  );
};

export default ImageSlider;

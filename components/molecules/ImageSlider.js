"use client";
import React, { useState } from "react";
import styles from "./ImageSlider.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import "swiper/css/pagination";


const ImageSlider = () => {
  const initialImages = [
    "/images/photo1.png",
    "/images/photo2.png",
    "/images/photo3.png",
    "/images/photo4.png",
  ];

  const [images, setImages] = useState(initialImages);

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        pagination={true}
       
        modules={[EffectCards, Pagination]}
        className={styles.swiper}
      >
        {images.map((image, index) => (
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSlider;

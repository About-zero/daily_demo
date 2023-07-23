import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./index.module.css";

export default function SwiperDemo() {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={20}
      className={styles.my_swiper} // 添加自定义的类名
      autoplay={{
        delay: 3000,
      }}
    >
      {/* 这里放置你的轮播项 */}
      <SwiperSlide className={styles.my_slide}>Slide 1</SwiperSlide>
      <SwiperSlide className={styles.my_slide}>Slide 2</SwiperSlide>
      <SwiperSlide className={styles.my_slide}>Slide 3</SwiperSlide>
    </Swiper>
  );
}

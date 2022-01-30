import React from "react";
import style from "./Promotion.module.css";
import bannerUm from "../../Assets/banner1.webp";
import bannerDois from "../../Assets/banner2.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper";
const Promotion = () => {
  return (
    <section className={style.promotion}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={style.mySlider}
      >
        <SwiperSlide>
          <img src={bannerUm} alt="" className={style.img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerDois} alt="" className={style.img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerUm} alt="" className={style.img} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Promotion;

import React from "react";
import style from "./MoreOrders.module.css";
import fotoUm from "../../Assets/fotoUm.png";
import fotoDois from "../../Assets/fotoDois.png";
import { ReactComponent as Star } from "../../Assets/star.svg";
import { ReactComponent as Time } from "../../Assets/min-time.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode } from "swiper";
const MoreOrders = () => {
  return (
    <section className={style.moreOrders}>
      <Swiper
        slidesPerView={2.2}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className={style.mySlider}
      >
        <SwiperSlide>
          <img src={fotoUm} alt="" className={style.img} />
          <div className={style.info}>
            <h4>Esfirra</h4>
            <div className={style.classific}>
              <div className={style.star}>
                <Star />
                <h5>4.6</h5>
              </div>
              <div className={style.time}>
                <Time />
                <h5>15 min</h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={fotoDois} alt="" className={style.img} />
          <div className={style.info}>
            <h4>Esfirra</h4>
            <div className={style.classific}>
              <div className={style.star}>
                <Star />
                <h5>4.6</h5>
              </div>
              <div className={style.time}>
                <Time />
                <h5>15 min</h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={fotoUm} alt="" className={style.img} />
          <div className={style.info}>
            <h4>Esfirra</h4>
            <div className={style.classific}>
              <div className={style.star}>
                <Star />
                <h5>4.6</h5>
              </div>
              <div className={style.time}>
                <Time />
                <h5>15 min</h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={fotoUm} alt="" className={style.img} />
          <div className={style.info}>
            <h4>Esfirra</h4>
            <div className={style.classific}>
              <div className={style.star}>
                <Star />
                <h5>4.6</h5>
              </div>
              <div className={style.time}>
                <Time />
                <h5>15 min</h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={fotoDois} alt="" className={style.img} />
          <div className={style.info}>
            <h4>Esfirra</h4>
            <div className={style.classific}>
              <div className={style.star}>
                <Star />
                <h5>4.6</h5>
              </div>
              <div className={style.time}>
                <Time />
                <h5>15 min</h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={fotoUm} alt="" className={style.img} />
          <div className={style.info}>
            <h4>Esfirra</h4>
            <div className={style.classific}>
              <div className={style.star}>
                <Star />
                <h5>4.6</h5>
              </div>
              <div className={style.time}>
                <Time />
                <h5>15 min</h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MoreOrders;

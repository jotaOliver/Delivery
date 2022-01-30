import React from "react";
import style from "./ListProducts.module.css";
import fotoUm from "../../Assets/fotoUm.png";
import fotoDois from "../../Assets/fotoDois.png";
import { ReactComponent as Star } from "../../Assets/star.svg";
import { ReactComponent as Time } from "../../Assets/min-time.svg";

const ListProducts = () => {
  return (
    <section className={style.listProducts}>
      <figure className={style.product}>
        <img src={fotoUm} alt="" className={style.img} />
        <div className={style.info}>
          <h4>Esfirra</h4>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean...
          </h5>
          <div className={style.classific}>
            <div className={style.star}>
              <Star />
              <h6>4.6</h6>
            </div>
            <div className={style.time}>
              <Time />
              <h6>15 min</h6>
            </div>
            <div className={style.price}>
              <h5>R$ 4,50</h5>
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
};

export default ListProducts;

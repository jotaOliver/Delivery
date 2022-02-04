import React from "react";
import style from "./ProductsItem.module.css";
import fotoUm from "../../Assets/fotoUm.png";
import { ReactComponent as Star } from "../../Assets/star.svg";
import { ReactComponent as Time } from "../../Assets/min-time.svg";

const ProductsItem = ({ product, setModalProduct }) => {
  function handleCLick() {
    setModalProduct(product);
  }
  return (
    <li className={style.product} onClick={handleCLick}>
      <img src={fotoUm} alt="" className={style.img} />
      <div className={style.info}>
        <div>
          <h4>{product.name}</h4>
          <h5>{product.description}</h5>
        </div>

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
            <h5>R$ {product.price}</h5>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductsItem;

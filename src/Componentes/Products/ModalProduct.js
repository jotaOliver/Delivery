import React from "react";
import style from "./ModalProduct.module.css";
import fotoUm from "../../Assets/fotoUm.png";
import { ReactComponent as Star } from "../../Assets/star.svg";
import { ReactComponent as Time } from "../../Assets/min-time.svg";
import Button from "../Forms/Button";
import Title from "../Title/Title";
import SubTitle from "../Title/SubTitle";
import { Link } from "react-router-dom";

const ModalProduct = () => {
  return (
    <>
      <section
        className={`animate__animated animate__fadeInLeft animate__faster ${style.modalProducts}`}
      >
        <figure className={style.product}>
          <img src={fotoUm} alt="" className={style.img} />
          <form className={style.form}>
            <Button type="button">-</Button>
            <Title titulo="1" />
            <Button type="button">+</Button>
          </form>
          <div className={style.info}>
            <Title titulo="Esfirra" />
            <div className={style.classific}>
              <div className={style.star}>
                <Star />
                <h5>4.6</h5>
              </div>
              <div className={style.time}>
                <Time />
                <h5>15 min</h5>
              </div>
              <div className={style.price}>
                <h2>
                  <span>R$</span> 4,50
                </h2>
              </div>
            </div>
            <SubTitle titulo="Ingredientes" />
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            </h4>
            <SubTitle titulo="Sobre" />
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            </h4>
          </div>
        </figure>
      </section>
      <Link to="" className={style.botao}>
        <p>1 item</p>
        <h4>Adicionar ao Carrinho</h4>
        <h4>
          <span>R$ </span>4,50
        </h4>
      </Link>
    </>
  );
};

export default ModalProduct;

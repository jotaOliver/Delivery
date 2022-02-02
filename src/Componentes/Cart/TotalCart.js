import React from "react";
import Button from "../Forms/Button";
import style from "./TotalCart.module.css";

const TotalCart = () => {
  return (
    <section className={style.TotalCart}>
      <div className={style.ItemTotal}>
        <h5>Item Total</h5>
        <h5>R$ 12,00</h5>
      </div>
      <div className={style.Discount}>
        <h5>Disconto</h5>
        <h5>- R$ 5,00</h5>
      </div>
      <div className={style.Delivery}>
        <h5>Frete</h5>
        <h5>- R$ 2,00</h5>
      </div>
      <div className={style.Total}>
        <h4>Tatal</h4>
        <h3>R$ 5,00</h3>
      </div>
      <Button>Continuar</Button>
    </section>
  );
};

export default TotalCart;

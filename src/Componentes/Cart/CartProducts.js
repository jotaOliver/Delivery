import React from "react";
import style from "./CartProducts.module.css";
import fotoUm from "../../Assets/fotoUm.png";
import Button from "../Forms/Button";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
const CartProducts = () => {
  const [qtde, setQtde] = React.useState(1);
  const [price, setPrice] = React.useState(4.5);

  const handleClickSome = React.useCallback(() => {
    if (qtde < 10) {
      setQtde((qtde) => qtde + 1);
      setPrice((price) => price + 4.5);
    }
  }, [qtde]);

  const handleClickSub = React.useCallback(() => {
    if (qtde > 1) {
      setQtde((qtde) => qtde - 1);
      setPrice((price) => price - 4.5);
    }
  }, [qtde]);
  return (
    <section className={`animeLeft ${style.listProducts}`}>
      <figure className={style.product}>
        <img src={fotoUm} alt="" className={style.img} />
        <div className={style.info}>
          <div className={style.nameClose}>
            <h4>Esfirra</h4>
            <Button
              type="button"
              className={style.close}
              onClick={handleClickSome}
            >
              X
            </Button>
          </div>

          <div className={style.qtde}>
            <form className={style.form}>
              <Button type="button" onClick={handleClickSub}>
                -
              </Button>
              <Title titulo={qtde} />
              <Button type="button" onClick={handleClickSome}>
                +
              </Button>
            </form>
            <div className={style.price}>
              <h5>R$ {price}</h5>
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
};

export default CartProducts;

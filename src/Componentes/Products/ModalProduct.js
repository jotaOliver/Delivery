import React from "react";
import style from "./ModalProduct.module.css";
import fotoUm from "../../Assets/fotoUm.png";
import { ReactComponent as Star } from "../../Assets/star.svg";
import { ReactComponent as Time } from "../../Assets/min-time.svg";
import { ReactComponent as Arrow } from "../../Assets/arrow-back.svg";
import Button from "../Forms/Button";
import Title from "../Title/Title";
import SubTitle from "../Title/SubTitle";
import { Link } from "react-router-dom";

const ModalProduct = ({ product, setModalProduct }) => {
  const [qtde, setQtde] = React.useState(0);
  const [price, setPrice] = React.useState(0);
  console.log(product);
  function handleCLick() {
    setModalProduct(null);
  }
  const handleClickSome = React.useCallback(() => {
    if (qtde < 10) {
      setQtde((qtde) => qtde + 1);
      setPrice((price) => price + product.price);
    }
  }, [qtde, product]);

  const handleClickSub = React.useCallback(() => {
    if (qtde > 0) {
      setQtde((qtde) => qtde - 1);
      setPrice((price) => price - product.price);
    }
  }, [qtde, product]);

  return (
    <>
      <section
        className={`animate__animated animate__fadeInLeft animate__faster ${style.modalProducts}`}
      >
        <figure className={style.product}>
          <img src={fotoUm} alt="" className={style.img} />
          <div className={style.navigation}>
            <button onClick={handleCLick} className={style.btnBack}>
              <Arrow />
            </button>
          </div>
          <form className={style.form}>
            <Button type="button" onClick={handleClickSub}>
              -
            </Button>
            <Title titulo={qtde} />
            <Button type="button" onClick={handleClickSome}>
              +
            </Button>
          </form>
          <div className={style.info}>
            <Title titulo={product.name} />
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
                  <span>R$</span> {product.price}
                </h2>
              </div>
            </div>
            <SubTitle titulo="Ingredientes" />
            <h4>{product.description}</h4>
          </div>
        </figure>
      </section>
      {price > 0 && qtde > 0 && (
        <Link
          to=""
          className={
            style.botao + " animate__animated animate__fadeInUp animate__faster"
          }
        >
          <p>{qtde} item</p>
          <h4>Adicionar ao Carrinho</h4>
          <h4>
            <span>R$ </span>
            {price}
          </h4>
        </Link>
      )}
    </>
  );
};

export default ModalProduct;

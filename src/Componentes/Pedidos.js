import React from "react";
import LocationInfo from "./Location/LocationInfo";
import CartProducts from "./Cart/CartProducts";
import SubTitle from "./Title/SubTitle";
import TotalCart from "./Cart/TotalCart";

const Pedidos = () => {
  return (
    <>
      <LocationInfo />
      <SubTitle titulo="Todos os Produtos" />
      <CartProducts />
      <TotalCart />
    </>
  );
};

export default Pedidos;

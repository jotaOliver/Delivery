import React from "react";
import LocationInfo from "./Location/LocationInfo";
import Promotion from "./Products/Promotion";
import MoreOrders from "./Products/MoreOrders";
import ListProducts from "./Products/ListProducts";
import SubTitle from "./Title/SubTitle";

function Home() {
  return (
    <main className="animate__animated animate__fadeInLeft animate__faster">
      <LocationInfo />
      <Promotion />
      <SubTitle titulo="Mais Vendidos" />
      <MoreOrders />
      <SubTitle titulo="Todos os Produtos" />
      <ListProducts />
      <ListProducts />
      <ListProducts />
      <ListProducts />
      <ListProducts />
      <ListProducts />
    </main>
  );
}

export default Home;

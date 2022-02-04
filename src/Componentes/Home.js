import React from "react";
import LocationInfo from "./Location/LocationInfo";
import Promotion from "./Products/Promotion";
import MoreOrders from "./Products/MoreOrders";
import ListProducts from "./Products/ListProducts";
import SubTitle from "./Title/SubTitle";
import ModalProduct from "./Products/ModalProduct";

function Home() {
  const [modalProduct, setModalProduct] = React.useState(null);

  return (
    <>
      <main className="animate__animated animate__fadeInLeft animate__faster">
        <LocationInfo />
        <Promotion />
        <SubTitle titulo="Mais Vendidos" />
        <MoreOrders />
        <SubTitle titulo="Todos os Produtos" />
        <ListProducts setModalProduct={setModalProduct} />
      </main>
      {modalProduct && (
        <ModalProduct
          setModalProduct={setModalProduct}
          product={modalProduct}
        />
      )}
    </>
  );
}

export default Home;

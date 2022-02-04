import React from "react";
import useFetch from "../../Hooks/useFetch";
import style from "./ProductsItem.module.css";
import { PRODUCTS_GET } from "../../Api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import ProductsItem from "./ProductsItem";

const ListProducts = ({ setModalProduct }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchProducts() {
      const { url, options } = PRODUCTS_GET();
      const { response, json } = await request(url, options);
    }
    fetchProducts();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={style.listProducts}>
        {data.map((product) => (
          <ProductsItem
            key={product.menuId}
            product={product}
            setModalProduct={setModalProduct}
          />
        ))}
      </ul>
    );
  else return null;
};

export default ListProducts;

import React from "react";
import Card from "../Card/Card";
import "./PopularProducts.css";
import useFetch from "../../hooks/useFetch";

const PopularProducts = () => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=Populares`
  );

  return (
    <div className="popularProducts" >
    <div className="top">
      <h1>Productos Destacados</h1>
    </div>
    <div className="bottom">
      {error
        ? "Something went wrong!"
        : loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  </div>
  );
};

export default PopularProducts;

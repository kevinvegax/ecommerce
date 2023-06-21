import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, sort, catId }) => {
  
  let url = `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
    (item) => `&[filters][sub_categories][id][$eq]=${item}`
  )}`

  if (sort !== null){
    url += `&sort=price:${sort}`;
  }

  const { data, loading, error } = useFetch( url  );

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;

import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";
import BannerProducts from "../../components/BannerProducts/BannerProducts";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>COMPRA POR PRODUCTO</h2>
          <input className="inputItem"
          type="radio"
          name="product"
          id="all"
          onChange={()=>{setSelectedSubCats([])}}/>
          <label htmlFor="all" className="labelItemAll">{'Ver todo'}</label>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="radio"
                id={item.id}
                value={item.id}
                name="product"
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>ORDENAR POR</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="pos"
              value="pos"
              name="price"
              onChange={(e) => setSort(null)}
            />
            <label htmlFor="pos">Posicion</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">El precio mas bajo</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">El precio mas alto</label>
          </div>
        </div>
      </div>
      <div className="right">
        <BannerProducts />
        <List catId={catId} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  );
};

export default Products;

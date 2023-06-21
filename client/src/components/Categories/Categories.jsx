import React from "react";
import './Categories.css'
import { Link } from 'react-router-dom'
import useFetch from "../../hooks/useFetch";

const Categories = () => {


  const { data } = useFetch(
    `/categories?populate=*`
    );

  return (
    <div className="catContainer">

        {data?.map((item) => (
					<Link to={'products/' + item.id} className="itemCat" key={item.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url} alt="" style={{ width: '100%', objectFit: "cover", height: '350px' }} />
            <div className="overlap">
            </div>
            <p className="catText">{item.attributes.title}</p>
          </Link>
				))}

      
   </div>
  );
};

export default Categories;
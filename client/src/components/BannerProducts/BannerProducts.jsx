import React from 'react'
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const BannerProducts = () => {

    const catId = parseInt(useParams().id);
    const { data } = useFetch(
    `categories/${catId}?populate=*`
    );
    

  return (
    <>
        <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt='' style={{ width: '100%', objectFit: "cover", height: '350px', marginBottom: '50px'}}/>
    </>
  )
}

export default BannerProducts
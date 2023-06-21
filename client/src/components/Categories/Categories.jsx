import React from "react";
import './Categories.css'
import { Link } from 'react-router-dom'


const Categories = () => {
  return (
    <div className="catContainer">
      <Link to='/products/2' className="itemCat">
        <img src="/img/cat.jpeg" alt="" style={{ width: '100%' }} />
        <div className="overlap">
        </div>
          <p className="catText">Hombres</p>
      </Link>
      <Link className="itemCat">
        <img src="/img/cat.jpeg" alt="" style={{ width: '100%' }} />
        <div className="overlap">
        </div>
          <p className="catText">Hombres</p>
      </Link>
      <Link className="itemCat">
        <img src="/img/cat.jpeg" alt="" style={{ width: '100%' }} />
        <div className="overlap">
        </div>
          <p className="catText">Hombres</p>
      </Link>
      <Link className="itemCat">
        <img src="/img/cat.jpeg" alt="" style={{ width: '100%' }} />
        <div className="overlap">
        </div>
          <p className="catText">Hombres</p>
      </Link>
   </div>
  );
};

export default Categories;
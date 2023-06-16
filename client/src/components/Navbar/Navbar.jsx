import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import "./Navbar.css"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="headerContainer">
      <header>
        <Link to='/'><img src='/img/1.png' alt="" /></Link>
        <ul className="navbar">
          <li><Link to='/products/1'>Hombres</Link></li>
          <li><Link to='/products/2'>Mujeres</Link></li>
          <li><Link to='/products/3'>Niños</Link></li>
          <li><Link to='/products/4'>Bebes</Link></li>
        </ul>
        <div className="main">
          <div className="cartIcon" onClick={()=>setOpen(!open)}>
            <ShoppingCartOutlinedIcon className="icon"/>
            <span>{products.length}</span>
          </div>
          <div className="menuIcon">
            <MenuIcon className="icon"/>
          </div>
        </div>
        {open && <Cart/>}
      </header>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

import './header-style.css'; 

const Nav = () =>{
    const [isOpen, setIsOpen] = useState(false);
    return(

<>
<div className="Navbar">
      <span className="logo"><Link to='/'> <img src={logo} className="logoimg"/> </Link></span>
      <div className={`nav-items ${isOpen && "open"}`}>
      <Link to='/'>Home</Link>
      <Link to='/products'>Products</Link>
      <Link to='/login'>Login</Link>
        <a ><i class="fa fa-shopping-cart" aria-hidden="true"></i> <span class='badge badge-warning' id='lblCartCount'>0</span></a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>

</>
    )
}
export default Nav;
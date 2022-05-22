import React, { useState } from "react";
import './header-style.css'; 
import logo1 from "./logo.png";
import img1 from "./image1.jpg";
import cart from "./cart.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="header">
    <div className="container">
    <div className="Navbar">
      <span className="logo"><img src={logo1} width="125px"></img></span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">Products</a>
        <a href="/service">Login</a>
        <a ><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
        <div className="row">
            <div className="col">
                <h1>Be strong. Be beautiful.</h1>
                <h1>Be you.</h1>
                <p>Masterful design never goes out of fashion. Because bling is our thing.</p>
                <a href="" className="btn">Explore Now &#8594;</a>
            </div>
            <div className="col">
                <img src={img1}/>
            </div>
        </div>
    </div>
</div>
)};

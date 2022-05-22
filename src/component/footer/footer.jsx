import React from "react";
import logo from "./logo.png"
import "./footer-styles.css"
export const Footer = () => (

    <div className="footer">
        <div className="container">
            <div className="footer-1">
                <a href="#"><img src={logo}/></a>
                <p>Our purpose is to sustainably make the pleasure and benefits of women's accessories accessible to
                    the many.</p>
            </div>

            <div className="footer-2">
                <h3>Follow us</h3>
                <ul>
                    <li><a href="https://www.facebook.com/ADIOS-accesoires-106368968499549">Facebook</a></li>
                    <li><a href="https://www.instagram.com/adios.accessoires/">Instagram</a></li>

                </ul>
            </div>
        </div>
        <p className="copyright">Copyright 2022 - Adios Accessories</p>
    </div>

)
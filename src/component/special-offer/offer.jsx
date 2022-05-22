import React from "react";
import Offerimg from "./exclusive.png";
import "./offer-style.css"

export const Offer = () => (

    <div className="offer">
        <div className="small-container">
            <div className="row">
                <div className="col-2">
                    <img src={Offerimg} className="offer-img"/>
                </div>
                <div className="col-2">
                    <p>Exclusively Available on Adios Accessories</p>
                    <h1>Flexible Vannerie Bracelet </h1>
                    <p>
                        Narrowest of the Vannerie Collection flexible bracelets approximately 0.64cm wide
                    </p>
                    <a href="" className="btn">Buy Now &#8594;</a>
                </div>

            </div>
        </div>
    </div>
);

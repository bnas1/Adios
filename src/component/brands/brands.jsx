import React from "react";
import Brand1 from "./cartier.png"
import Brand2 from "./celine.png"
import Brand3 from "./rayban.png"
import Brand4 from "./tommy.png"
import Brand5 from "./tiff.jpg"
import "./brands-style.css"
export const Brands = () => (
    
    <div className="brands">
        <div className="small-container">
            <div className="row">
                <div className="col-5">
                    <img src={Brand1}/>
                </div>
                <div className="col-5">
                    <img src={Brand2}/>
                </div>
                <div className="col-5">
                    <img src={Brand3}/>
                </div>
                <div className="col-5">
                    <img src={Brand4}/>
                </div>
                <div className="col-5">
                    <img src={Brand5}/>
                </div>
            </div>
        </div>
    </div>
);
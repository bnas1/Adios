import React from "react";
import categoryImg1 from "./category-1.jpg";
import categoryImg2 from "./category-2.jpg";
import categoryImg3 from "./category-3.jpg";
import "./category-styles.css"


export const CategoryImg = () => (

    <div className="categories">
        <div className="small-container">
            <div className="row">
                <div className="col-3">
                    <img src={categoryImg1} />
                </div>
                <div className="col-3"> <img src={categoryImg2} />
                </div>
                <div className="col-3">
                    <img src={categoryImg3} />

                </div>
            </div>
        </div>
    </div>
    
)
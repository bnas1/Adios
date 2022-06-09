import React from "react";
import pro1 from "./product-1.jfif";
import pro2 from "./product-2.jpeg";
import pro3 from "./product-3.jpeg";
import pro4 from "./product-4.jpeg";
import pro5 from "./product-5.jpeg";
import pro6 from "./product-6.jpeg";
import pro7 from "./product-7.jpeg";
import pro8 from "./product-8.jpeg";
import pro9 from "./product-9.jpeg";
import pro10 from "./product-10.jpeg";
import pro11 from "./product-11.jpeg";
import pro12 from "./product-12.jpeg";
import "./featured-products.css"



export const FeaturedProducts = () => (

    <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
            <div className="col-2">
                <img src={pro1}/>
                <a href="#">
                    <h4>Round Clear Lens Frames</h4>
                </a>

                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>




                </div>
                <p>15.00 TND</p>
            </div>
            <div className="col-2">
                <img src={pro2}/>
                <h4>Butterfly neckless</h4>
                <div class="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>




                </div>
                <p>15.00 TND</p>
            </div>
            <div className="col-2">
                <img src={pro3}/>
                <h4>Necklace</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>




                </div>
                <p>15.00 TND</p>
            </div>
            <div className="col-2">
                <img src={pro4}/>
                <h4>Sunglasses</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>




                </div>
                <p>15.00 TND</p>
            </div>

        </div>
        <h2 className="title">Latest Products</h2>
        <div className="row">
            <div className="col-2">
            <img src={pro5}/>
                <h4>Necklace Van Cleef</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>




                </div>
                <p>15.00 TND</p>
            </div>
            <div className="col-2">
            <img src={pro6}/>
                <h4>Blue Sunglasses</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>




                </div>
                <p>15.00 TND</p>
            </div>
            <div className="col-2">
            <img src={pro7}/>
                <h4>Necklace Bvlgari</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>




                </div>
                <p>15.00 TND</p>
            </div>
            <div className="col-2">
            <img src={pro8}/>
                <h4>Double Chaine Necklace</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>




                </div>
                <p>15.00 TND</p>
            </div>

        </div>
        <div className="row">
            <div className="col-2">
            <img src={pro9}/>
                <h4>Snake Bracelet</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>




                </div>
                <p>15.00 TND</p>
            </div>
            <div className="col-2">
            <img src={pro10}/>
                <h4>Double Chaine Necklace</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>




                </div>
                <p>15.00 TND</p>
            </div>
            <div className="col-2">
            <img src={pro11}/>
                <h4>Brown Sunglasses</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>




                </div>
                <p>15.00 TND</p>
            </div>
            <div className="col-2">
            <img src={pro12}/>
                <h4>Double Chaine necklace</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>




                </div>
                <p>15.00 TND</p>
            </div>

        </div>
    </div>
    
);
export default FeaturedProducts;
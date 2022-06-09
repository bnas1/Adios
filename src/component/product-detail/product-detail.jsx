import productImg from "../Body/indexproducts/product-1.jfif"
import suggestionImg1 from "../Body/indexproducts/product-9.jpeg"
import suggestionImg2 from "../Body/indexproducts/product-10.jpeg"
import suggestionImg3 from "../Body/indexproducts/product-11.jpeg"
import suggestionImg4 from "../Body/indexproducts/product-12.jpeg"
import "../product-detail/product-detail.css"
const ProductDetail = () => {
    return(
<>
<div className="container">
        <div className="small-container single-product">
        <div className="row">
            <div className="col-1"><img src={productImg} /></div>

            <div className="col">
                <h1>Round Clear Lens Frames</h1>
                <h4>15.00 TND</h4>
                <a className="btn">Add To Cart</a>
                <h3>Product Details:</h3>
                <br />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis odio a optio sed minus quaerat id?
                Placeat dicta nihil velit.
                </p>
            </div>
        </div>
    </div>

    
            <div className="title-div">
                <h2 className="title">Related Products</h2>
            </div>

    <div className="row">
        <div className="col-2">
            <img src={suggestionImg1} />
            <h4>Round Clear Lens Frames</h4>
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
            <img src={suggestionImg2} />
            <h4>Round Clear Lens Frames</h4>
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
            <img src={suggestionImg3} />
            <h4>Round Clear Lens Frames</h4>
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
            <img src={suggestionImg4} />
            <h4>Round Clear Lens Frames</h4>
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
</>
    )
}
export default ProductDetail;
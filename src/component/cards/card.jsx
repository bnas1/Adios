import { Link } from "react-router-dom";
import "./products.css"
const Cards = ({item}) =>{
    const {id , title , price , img} = item;
    return(
<div>
    <div className="container">
        <div className="row">
            <div className="col-1">
                <img src={img}/>
                <Link to='/productdetail' key={1}><h4>{title}</h4></Link>

                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>{price} TND</p>
            </div>

        </div>
        
    </div>
</div>
    )
}
export default Cards;
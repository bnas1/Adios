import products from "../../data"
import Cards from "../cards/card";
import ProductDetail from "../product-detail/product-detail";
import "./products.css"

 const Products = () => (
<div className="">
    <section>
     
        {
            products.map((item) => (
            <Cards key={item.id} item={item}  />             
            ))
        }  
        
    </section> 
</div>
    
);
export default Products;
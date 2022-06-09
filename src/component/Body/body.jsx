import Header from "../header/header"
import FeaturedProducts from "./indexproducts/featured-products"
import { Brands } from "./brands/brands"
import { CategoryImg } from "./category/category"
import { Offer } from "./special-offer/offer"

const Body = () => {
    return(
        <>
        <Header />
        <CategoryImg />
        <FeaturedProducts />
        <Offer />
        <Brands />
        </>
    )
}
export default Body;
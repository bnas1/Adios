import "./App.css";
import { Header } from "./component/header/header";
import { CategoryImg } from "./component/category/category";
import { FeaturedProducts } from "./component/Featured products/featured-products";
import { Offer } from "./component/special-offer/offer";
import { Brands } from "./component/brands/brands";
import { Footer } from "./component/footer/footer";
function App() {
  return (
    <div className="App">
      <Header />
      <CategoryImg />
      <FeaturedProducts />
      <Offer />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;

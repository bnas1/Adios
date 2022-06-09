import Body from "./Body/body"
import { Routes,Route, } from "react-router-dom";
import Products from "./products/products";
import Login from "./login/login";
import ProductDetail from "./product-detail/product-detail";
import User from "./login/user";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";



const MainComponent = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        setUser(user);
      });
    }, []);
  
    console.log(user);
  
    return(
        <>
         <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={user ? <User user={user} /> : <Login />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            </Routes>
        </>
    )
}
export default MainComponent;
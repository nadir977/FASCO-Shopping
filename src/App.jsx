import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Home from "./Home";
import ConfirmationCode from "./ConfirmationCode";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NewPassword from "./NewPassword";
import ForgotPassword from "./ForgotPassword";
import Shop from "./Shop";
import ProductPage from "./ProductPage";
import ShopNavbar from "./components/ShopNavbar";
import AppNavbar from "./components/AppNavbar"
import ShoppingCart from "./ShoppingCart";




function App() {

    const pathname = useLocation().pathname;
    console.log(pathname)


  return (
    <main>
    {pathname === "/"?  <AppNavbar />:<ShopNavbar />}
      <Routes>
        <Route path="/product" element={<ProductPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/home" element={<Home />} />
        <Route path="/confirmationCode" element={<ConfirmationCode />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/" element={<ShoppingCart />} />
      </Routes>
    </main>
  );
}

export default App;

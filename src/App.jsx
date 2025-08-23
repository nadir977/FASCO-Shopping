import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import ConfirmationCode from "./pages/ConfirmationCode";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NewPassword from "./pages/NewPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import ShopNavbar from "./components/ShopNavbar";
import AppNavbar from "./components/AppNavbar";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";




function App() {

    const pathname = useLocation().pathname;
    console.log(pathname)


  return (
    <main>
    {pathname === "/"?  <AppNavbar />:<ShopNavbar />}
      <Routes>
        <Route path="/product" element={<ProductPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Home />} />
        <Route path="/confirmationCode" element={<ConfirmationCode />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </main>
  );
}

export default App;

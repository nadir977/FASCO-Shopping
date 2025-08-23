import React, { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import product from "../assets/product.png"; 
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="max-w-[1281px] mx-auto flex flex-col my-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-4 mb-12 text-center">
          <h1 className="text-[28px] sm:text-[36px] lg:text-[42px] leading-[32px] Instagram_h1">
            Shopping Cart
          </h1>
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <p>Home</p>
            <MdChevronRight />
            <p>Your Shopping Cart</p>
          </div>
        </div>

        <div className="hidden md:flex justify-between text-[18px] sm:text-[20px] lg:text-[22px] leading-[32px] Instagram_h1 mt-8">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>

        <div className="flex flex-col md:flex-row border-[#00000063] border-y py-6 my-6 gap-6">
          <div className="flex flex-col sm:flex-row max-w-full md:max-w-[366px] gap-4">
            <div className="w-[120px] sm:w-[150px]">
              <img src={product} alt="Product" className="w-full h-auto" />
            </div>
            <div className="flex flex-col gap-2 sm:gap-4">
              <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] leading-[120%] Instagram_h1">
                Mini dress with ruffled straps
              </h3>
              <p className="text-[#8A8A8A] text-sm sm:text-base">Color : Red</p>
              <p className="text-[#8A8A8A] underline text-sm sm:text-base">
                Remove
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:justify-between md:w-full md:max-w-[870px] gap-4 sm:gap-8 items-start sm:items-center text-sm sm:text-base">
            <p>$14.90</p>
            <div className="flex border border-[#EEEEEE] p-2 px-4 gap-4 sm:gap-6 rounded w-fit">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-2 cursor-pointer hover:bg-gray-100 border border-white hover:border-gray-400"
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-2 cursor-pointer hover:bg-gray-100 border border-white hover:border-gray-400"
              >
                +
              </button>
            </div>
            <p>$14.90</p>
          </div>
        </div>

        <div className="flex flex-col ml-auto w-full sm:w-[350px]">
          <div className="flex items-center gap-2 border-b border-[#00000063] pb-4 text-sm sm:text-base">
            <input
              id="rememberMe"
              type="checkbox"
              className="w-4 h-4 text-black border-black border-2 cursor-pointer rounded"
            />
            <label htmlFor="rememberMe" className="text-gray-700">
              For <span className="font-[700]">$10.00</span> please wrap the
              product
            </label>
          </div>

          <div className="flex justify-between text-[18px] sm:text-[22px] Instagram_h1 leading-[32px] py-4">
            <p>Subtotal</p>
            <p>$100.00</p>
          </div>
          <Link to="/checkout">
            <button className="bg-black py-2 text-white w-full rounded-md cursor-pointer shadow-[0px_20px_35px_0px_#00000026] ">
              Checkout
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;

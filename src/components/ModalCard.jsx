import React, { useRef, useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import product from "../assets/product.png";
import { Link } from "react-router-dom";

const ModalCard = ({ open, onClose }) => {
  const overlayRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const price = 14.8;
  const subtotal = (price * quantity).toFixed(2);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) {
      onClose();
    }
  }

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-[1px] flex justify-end"
      role="dialog"
      aria-modal="true"
      tabIndex="-1"
    >
      <div
        className={`w-full max-w-full sm:mr-12 sm:max-w-[700px] bg-white h-full shadow-xl flex flex-col transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 sm:px-10 pt-4">
          <h1
            id="cart-title"
            className="text-[28px] sm:text-[42px] Instagram_h1"
          >
            Shopping Cart
          </h1>
          <button
            aria-label="Close cart"
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-100"
          >
            <RxCross2 size={22} />
          </button>
        </div>

        <div className="px-6 sm:px-10 text-[16px] sm:text-[26px] text-[#8A8A8A]">
          Buy <span className="font-[700] text-black">$122.35</span> More And
          Get <span className="font-[700] text-black">Free Shipping</span>
        </div>

        <div className="flex-1 overflow-y-auto px-6 sm:px-10">
          <div className="flex gap-4 py-5 border-b border-[#00000063]">
            <img
              src={product}
              alt="product"
              className="w-[100px] h-[140px] sm:w-[168px] sm:h-[225px] object-cover"
            />
            <div className="flex flex-col p-2 gap-4 w-full">
              <div className="flex flex-col gap-1">
                <h2 className="text-[22px] Instagram_h1">Denim Jacket</h2>
                <p className="text-[22px] text-[#8A8A8A]">Color : Red</p>
                <p className="text-[22px] mt-1">${price.toFixed(2)}</p>
              </div>
              <div className="flex items-center w-[130px] sm:w-[170px] bg-[#F1F1F1] rounded justify-between">
                <button
                  onClick={decrement}
                  className="px-3 text-[35px] cursor-pointer"
                >
                  -
                </button>
                <span className="px-3 text-xl text-[#8A8A8A]">{quantity}</span>
                <button
                  onClick={increment}
                  className="px-3 text-2xl cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 sm:px-10 py-4 border-b border-[#00000063]">
          <label className="flex items-center gap-2 sm:text-[22px] cursor-pointer text-[#8A8A8A]">
            <input
              type="checkbox"
              className="w-5 h-5 border-2 border-black accent-black cursor-pointer"
            />
            For <span className="text-black">$10.00</span> Please Wrap The
            Product
          </label>
        </div>

        <div className="px-6 sm:px-10 py-5">
          <div className="flex justify-between mb-4 text-lg sm:text-[22px] Instagram_h1">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <Link to="/checkout">
            <button className="w-full bg-black text-white py-3 rounded-lg cursor-pointer font-[500] shadow-md">
              Checkout
            </button>
          </Link>
          <Link to="/shoppingCart">
            <button className="w-full mt-3 text-lg cursor-pointer sm:text-[22px] underline Instagram_h1">
              View Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;

import React, { useState, useEffect } from "react";
import image31 from "../assets/image31.png";
import image35 from "../assets/image35.png";
import image36 from "../assets/image36.png";
import image37 from "../assets/image37.png";
import image38 from "../assets/image38.png";
import image39 from "../assets/image39.png";
import image40 from "../assets/image40.png";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { RiArrowUpDownFill } from "react-icons/ri";
import { GoQuestion } from "react-icons/go";
import { GrShareOption } from "react-icons/gr";
import { BsTruck, BsBox2 } from "react-icons/bs";
import trustbag from "../assets/trustbag.png";

import ModalCard from "./ModalCard";

const products = [
  { id: 1, image: image35 },
  { id: 2, image: image31 },
  { id: 3, image: image36 },
  { id: 4, image: image37 },
  { id: 5, image: image38 },
  { id: 6, image: image39 },
  { id: 7, image: image40 },
];

const sizes = ["M", "L", "XL", "XXL"];
const colors = ["bg-red-500", "bg-black", "bg-pink-400"];

const Products = () => {
  const [selectedImage, setSelectedImage] = useState(image31);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [active, setActive] = useState(false);

  const [openCart, setOpenCart] = useState(false);

  const [timeLeft, setTimeLeft] = useState(6 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const d = Math.floor(seconds / (60 * 60 * 24));
    const h = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
    const m = Math.floor((seconds % (60 * 60)) / 60);
    const s = seconds % 60;
    return { d, h, m, s };
  };

  return (
    <div className="max-w-[1281px] mx-auto my-10 md:my-16 flex flex-col md:flex-row gap-6 lg:gap-16 px-4 md:px-0">
      <div className="flex flex-col md:flex-row max-w-[615px] w-full items-center md:items-start gap-4">
        <div className="flex md:flex-col gap-3 p-1 md:pr-4 order-2 md:order-1">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedImage(product.image)}
              className={`cursor-pointer border p-1 ${
                selectedImage === product.image
                  ? "border-black"
                  : "border-transparent hover:border-black"
              }`}
            >
              <img
                src={product.image}
                alt="Thumbnail"
                className="w-12 sm:w-14 h-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="order-1 md:order-2 w-full">
          <img
            src={selectedImage}
            alt="Main"
            className="w-full max-w-[491px] h-auto object-contain mx-auto"
          />
        </div>
      </div>

      <div className="flex flex-col max-w-[585px] w-full gap-6 md:pr-2 2xl:pr-0">
        <div className="flex flex-col">
          <p className="text-xs sm:text-sm text-[#666]">Fasco</p>
          <div className="flex justify-between items-center gap-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Denim Jacket
            </h1>
            <div
              onClick={() => setActive(!active)}
              className="p-2 cursor-pointer bg-white border rounded-full border-[#EEE]"
            >
              {active ? (
                <FaStar className="text-yellow-500" />
              ) : (
                <FaRegStar className="text-gray-400" />
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <p className="text-sm">(3)</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <h1 className="text-lg sm:text-2xl font-semibold">$39.00</h1>
          <p className="line-through text-gray-500">$59.00</p>
          <div className="px-2 py-[2px] bg-[#DA3F3F] text-white text-xs rounded-2xl flex items-center gap-1">
            <span>Save</span> <span>33%</span>
          </div>
        </div>

        <div className="flex justify-between items-center py-2 px-4 border border-[#F8CCCC] bg-[#FDEFEE] rounded hover:bg-[#ffeaea]">
          <p className="text-sm sm:text-base text-[#FF706B] font-medium">
            Hurry up! Sale ends in:
          </p>
          <div className="flex gap-2 sm:gap-3 text-[#FF706B] text-sm sm:text-lg font-semibold">
            <span>{String(formatTime(timeLeft).d).padStart(2, "0")}</span>:
            <span>{String(formatTime(timeLeft).h).padStart(2, "0")}</span>:
            <span>{String(formatTime(timeLeft).m).padStart(2, "0")}</span>:
            <span>{String(formatTime(timeLeft).s).padStart(2, "0")}</span>
          </div>
        </div>

        <div>
          <p className="font-semibold mb-2">Size: {selectedSize}</p>
          <div className="flex flex-wrap gap-3">
            {sizes.map((size) => (
              <div
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-2 px-4 border rounded-md cursor-pointer ${
                  selectedSize === size
                    ? "bg-black text-white border-black"
                    : "border-[#EEE] hover:bg-gray-100"
                }`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold mb-2">Color</p>
          <div className="flex gap-3">
            {colors.map((color, i) => (
              <span
                key={i}
                onClick={() => setSelectedColor(color)}
                className={`w-7 h-7 rounded-full cursor-pointer shadow ${
                  selectedColor === color
                    ? "ring-2 ring-black"
                    : "hover:ring hover:ring-gray-300"
                } ${color}`}
              ></span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold mb-2">Quantity</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex border border-[#EEE] rounded">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2 hover:bg-gray-100"
              >
                -
              </button>
              <p className="px-4 py-2">{quantity}</p>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <button
              onClick={() => setOpenCart(true)}
              className="flex-1 border py-2 px-6 rounded font-semibold hover:bg-gray-100 cursor-pointer"
            >
              Add to cart
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 border-b border-[#EEE] pb-4 pt-8">
          <div className="flex items-center gap-2">
            <RiArrowUpDownFill /> Compare
          </div>
          <div className="flex items-center gap-2">
            <GoQuestion /> Ask a question
          </div>
          <div className="flex items-center gap-2">
            <GrShareOption /> Share
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <BsTruck />
            <span className="font-semibold">Estimated Delivery:</span>
            <span>Jul 30 - Aug 03</span>
          </div>
          <div className="flex items-start gap-2">
            <BsBox2 className="mt-1" />
            <div>
              <span className="font-semibold">Free Shipping & Returns: </span>
              <span className="text-sm">On all orders over $75</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 py-6 rounded bg-[#F8F8F8]">
          <img src={trustbag} alt="Trust" className="max-w-[180px] w-full" />
          <p className="font-semibold text-center">
            Guarantee safe & secure checkout
          </p>
        </div>
      </div>

      <ModalCard open={openCart} onClose={() => setOpenCart(false)} />
    </div>
  );
};

export default Products;

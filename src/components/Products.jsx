import React, { useState, useEffect } from "react";
import image31 from "../assets/image31.png";
import image35 from "../assets/image35.png";
import image36 from "../assets/image36.png";
import image37 from "../assets/image37.png";
import image38 from "../assets/image38.png";
import image39 from "../assets/image39.png";
import image40 from "../assets/image40.png";
import { FaRegStar, FaStar, FaEye } from "react-icons/fa6";
import { RiArrowUpDownFill } from "react-icons/ri";
import { GoQuestion } from "react-icons/go";
import { GrShareOption } from "react-icons/gr";
import { BsTruck, BsBox2 } from "react-icons/bs";
import trustbag from "../assets/trustbag.png";
import { Link } from "react-router-dom";
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

  const cartItems = [
    {
      name: "Denim Jacket",
      color: "Red",
      size: selectedSize,
      quantity: quantity,
      price: 39.0,
      image: selectedImage,
    },
  ];

  return (
    <div className="max-w-[1281px] mx-auto my-10 md:my-16 flex flex-col md:flex-row md:justify-between px-4 md:px-0">
     
      <ModalCard
        open={openCart}
        onClose={() => setOpenCart(false)}
        cartItems={cartItems}
      />

      <div className="flex flex-col md:flex-row max-w-[615px] ">
        <div className="flex md:flex-col gap-4 p-1 px-6 w-fit h-fit md:order-1 order-2 justify-center md:justify-start">
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
                alt="Image"
                className="h-auto w-[58px]"
              />
            </div>
          ))}
        </div>

        <div className="p-1 md:order-2 order-1 w-full">
          <img
            src={selectedImage}
            alt="Image"
            className="w-full md:w-[491px] h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col max-w-[585px] w-full gap-6 md:pr-2 xl:pr-0 ">
        <div className="flex flex-col">
          <p className="text-[12px] sm:text-[14px] leading-[20px] py-1 text-[#666666] Instagram_h1">
            Fasco
          </p>
          <div className="flex justify-between items-center">
            <h1 className="text-[22px] sm:text-[30px] leading-[32px] sm:leading-[42px] Instagram_h1">
              Denim Jacket
            </h1>
            <div
              onClick={() => setActive(!active)}
              className="p-2 cursor-pointer bg-[#FFFFFF] border rounded-full border-[#EEEEEE]"
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
            <p>(3)</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <h1 className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] Instagram_h1">
            $39.00
          </h1>
          <p className="line-through text-gray-500">$59.00</p>
          <div className="px-2 py-[2.5px] bg-[#DA3F3F] flex text-white gap-1 text-[11px] font-[500] rounded-3xl">
            <p>Save</p>
            <p>33%</p>
          </div>
        </div>

        <div className="flex justify-between items-center py-2 px-4 border-[#F8CCCC] border bg-[#FDEFEE] rounded transition hover:bg-[#ffeaea]">
          <p className="text-[14px] sm:text-[18px] text-[#FF706B]">
            Hurry up! Sale ends in:
          </p>
          <div className="flex gap-2 sm:gap-4 text-[#FF706B] text-[14px] sm:text-[20px] font-[600] whitespace-nowrap">
            <span>{String(formatTime(timeLeft).d).padStart(2, "0")}</span>:
            <span>{String(formatTime(timeLeft).h).padStart(2, "0")}</span>:
            <span>{String(formatTime(timeLeft).m).padStart(2, "0")}</span>:
            <span>{String(formatTime(timeLeft).s).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="leading-[20px] sm:leading-[24px] text-[#666666] text-sm sm:text-base">
            Only <span className="font-[700]">9</span> item(s) left in stock!
          </p>
          <div className="flex items-center">
            <div className="h-[5px] w-[30px] bg-[#EF2D2D] rounded"></div>
            <div className="h-[5px] w-full bg-[#DEDEDE] rounded-lg"></div>
          </div>
        </div>

        <div>
          <p className="font-[700] leading-[24px] Instagram_h1 pb-2 text-sm sm:text-base">
            Size: {selectedSize}
          </p>
          <div className="flex flex-wrap gap-4">
            {sizes.map((size) => (
              <div
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-2 px-4 h-fit border rounded-md cursor-pointer text-center ${
                  selectedSize === size
                    ? "bg-black text-white border-black"
                    : "border-[#EEEEEE] hover:bg-gray-100"
                }`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-[700] leading-[24px] Instagram_h1 pb-2 text-sm sm:text-base">
            Color
          </p>
          <div className="flex flex-wrap gap-2">
            {colors.map((color, i) => (
              <span
                key={i}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full cursor-pointer shadow-[0px_4px_6px_#0000001A] ${
                  selectedColor === color
                    ? "ring-1 ring-offset-3 ring-black"
                    : "hover:border border-[#8A8A8A]"
                } ${color}`}
              ></span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-[700] leading-[24px] Instagram_h1 pb-2 text-sm sm:text-base">
            Quantity
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex border border-[#EEEEEE] p-2 px-4 gap-6 rounded w-fit">
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

            <button
              onClick={() => setOpenCart(true)}
              className="font-[700] leading-[24px] Instagram_h1 border py-2 px-6 rounded flex justify-center items-center w-full cursor-pointer hover:bg-gray-300"
            >
              Add to cart
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 py-4 border-b border-[#EEEEEE] pt-12">
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

        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center">
            <BsTruck />
            <span className="font-[700] leading-[24px] Instagram_h1">
              Estimated Delivery:
            </span>
            Jul 30 - Aug 03
          </div>
          <div className="flex gap-2 items-start">
            <BsBox2 className="mt-1" />
            <div>
              <p className="font-[700] leading-[24px] Instagram_h1 block sm:inline pr-1">
                Free Shipping & Returns:
              </p>
              <p className="text-sm block sm:inline">On all orders over $75</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col gap-4 py-6 rounded bg-[#F8F8F8]">
          <div>
            <img src={trustbag} alt="Image" className="max-w-[180px] w-full" />
          </div>
          <div className="font-[700] leading-[100%] Instagram_h1 text-center">
            Guarantee safe & secure checkout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

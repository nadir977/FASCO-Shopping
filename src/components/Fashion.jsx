import { RiArrowDropRightLine, RiArrowDropDownLine } from "react-icons/ri";
import { HiMiniBars4, HiBars2, HiMiniBars3 } from "react-icons/hi2";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import React, { useState } from "react";
import { RxColumns } from "react-icons/rx";
import { LuBarcode } from "react-icons/lu";
import { FiFilter } from "react-icons/fi";
import image26 from "../assets/image26.png";
import image27 from "../assets/image27.png";
import image28 from "../assets/image28.png";
import image29 from "../assets/image29.png";
import image30 from "../assets/image30.png";
import image31 from "../assets/image31.png";
import image32 from "../assets/image32.png";
import image33 from "../assets/image33.png";
import image34 from "../assets/image34.png";

import Filters from "./Filters";

const products = [
  {
    id: 1,
    name: "Rounded Red Hat",
    price: "$8.00",
    image: image26,
    colors: ["#FFD700", "#000000", "#FFFFFF"],
  },
  {
    id: 2,
    name: "Linen-blend Shirt",
    price: "$17.00",
    image: image27,
    colors: ["#708090", "#A52A2A", "#000000"],
  },
  {
    id: 3,
    name: "Long-Sleeve Coat",
    price: "$106.00",
    image: image28,
    colors: ["#F5F5F5", "#000000"],
  },
  {
    id: 4,
    name: "Boxy Denim Hat",
    price: "$25.00",
    image: image29,
    colors: ["#FFD700", "#000000", "#FFFFFF"],
  },
  {
    id: 5,
    name: "Linen Plain Top",
    price: "$27.00",
    image: image30,
    colors: ["#708090", "#A52A2A", "#000000"],
  },
  {
    id: 6,
    name: "Oversized T-shirt",
    price: "$17.00 ",
    image: image31,
    colors: ["#F5F5F5", "#000000"],
  },
  {
    id: 7,
    name: "Polarised Sunglasses",
    price: "$18.00",
    image: image32,
    colors: ["#FFD700", "#000000", "#FFFFFF"],
  },
  {
    id: 8,
    name: "Rockstar Jacket",
    price: "$22.00",
    image: image33,
    colors: ["#708090", "#A52A2A", "#000000"],
  },
  {
    id: 9,
    name: "Dotted Black Dress",
    price: "$20.00",
    image: image34,
    colors: ["#F5F5F5", "#000000"],
  },
];

const Fashion = () => {
  const [open, setOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const options = [
    "Best selling",
    "Newest",
    "Price: Low to High",
    "Price: High to Low",
  ];
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="px-2 md:px-4 py-10 max-w-[1281px] mx-auto">
      <h1 className="md:text-[42px] text-[30px] text-center Instagram_h1 leading-8 mb-4">
        Fashion
      </h1>

      <div className="flex justify-center items-center text-center leading-[22px] gap-1">
        <p>Home</p>
        <RiArrowDropRightLine className="text-[20px] text-[#484848]" />
        <p>Fashion</p>
      </div>

      <div className="flex md:hidden justify-center mt-6">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm"
        >
          <FiFilter /> Filters
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div
          className={`${
            showFilters ? "block" : "hidden"
          } md:block w-full md:w-[250px]`}
        >
          <Filters />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="relative mb-8 md:mb-0 flex flex-col md:flex-row px-4 md:px-0 flex-wrap md:justify-between items-center gap-4">
            <div
              className="flex items-center Instagram_h1 leading-[26px] cursor-pointer rounded-md"
              onClick={() => setOpen(!open)}
            >
              {selected} <RiArrowDropDownLine className="ml-1 text-[20px]" />
            </div>

            {open && (
              <div className="absolute top-10 left-0 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-60">
                {options.map((option) => (
                  <div
                    key={option}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelected(option);
                      setOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}

            <div className="flex gap-2">
              <div className="p-2 bg-[#F2F2F2] rounded-md cursor-pointer">
                <HiBars2 />
              </div>
              <div className="p-2 bg-[#F2F2F2] rounded-md cursor-pointer">
                <HiMiniBars3 />
              </div>
              <div className="p-2 bg-[#F2F2F2] rounded-md cursor-pointer">
                <HiMiniBars4 />
              </div>
              <div className="p-2 bg-[#F2F2F2] rounded-md cursor-pointer">
                <RxColumns />
              </div>
              <div className="p-2 bg-[#F2F2F2] rounded-md cursor-pointer">
                <LuBarcode />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mt-6 lg:grid-cols-4 gap-6 xl:gap-8 flex-1">
            {products.map((product) => (
              <div key={product.id} className="cursor-pointer px-13 md:px-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[320px] sm:h-[360px]  md:h-[220px] lg:h-[320px] object-contain mb-4"
                />
                <h2 className="text-black Instagram_h1 mb-2 text-[16px] sm:text-[18px] md:text-[20px]">
                  {product.name}
                </h2>
                <p className="leading-[26px] text-[14px] sm:text-[15px] md:text-[16px]">
                  {product.price}
                </p>
                <div className="flex gap-2 my-4">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="w-5 h-5 rounded-full border-2 hover:border-[#8A8A8A] border-white"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12 mb-8 space-x-2">
        <button className="px-3 py-1 cursor-pointer bg-[#F3F3F3] rounded-full">
          1
        </button>
        <button className="px-3 py-1 cursor-pointer hover:bg-[#F3F3F3] rounded-full">
          2
        </button>
        <button className="px-3 py-1 cursor-pointer hover:bg-[#F3F3F3] rounded-full">
          3
        </button>
        <button className="px-3 py-1 cursor-pointer hover:bg-[#F3F3F3] rounded-full">
          <MdKeyboardDoubleArrowRight className="text-[20px]" />
        </button>
      </div>
    </div>
  );
};

export default Fashion;

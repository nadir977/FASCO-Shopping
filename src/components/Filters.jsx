import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";

const Filters = () => {
  const [openBrands, setOpenBrands] = useState(true);
  const [openCollections, setOpenCollections] = useState(true);

  return (
    <div className="w-64 px-5 md:px-0 py-1">
      <h2 className="text-[30px]  mb-6 Instagram_h1 leading-[36px]">Filters</h2>

      <div className="mb-6">
        <h3 className=" mb-2 Instagram_h1 text-[18px] leading-[28px]">Size</h3>
        <div className="flex flex-wrap gap-2">
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              className="border-[#8A8A8A] text-[#8A8A8A] border cursor-pointer px-3 py-1 rounded hover:bg-gray-100 text-sm"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className=" mb-2 Instagram_h1 text-[18px] leading-[28px]">
          Colors
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            "bg-red-400",
            "bg-orange-400",
            "bg-yellow-400",
            "bg-green-400",
            "bg-lime-400",
            "bg-cyan-400",
            "bg-sky-400",
            "bg-blue-400",
            "bg-violet-500",
            "bg-purple-500",
            "bg-pink-400",
            "bg-rose-400",
          ].map((color, i) => (
            <span
              key={i}
              className={`w-6 h-6 rounded-full cursor-pointer shadow-[0px_4px_6px_#0000001A] hover:border border-[#8A8A8A] ${color}`}
            ></span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className=" mb-2 Instagram_h1 text-[18px] leading-[28px]">
          Prices
        </h3>
        <ul className="space-y-1 text-[#8A8A8A]">
          {["$0-$50", "$50-$100", "$100-$150", "$150-$200", "$300-$400"].map(
            (price) => (
              <li
                key={price}
                className="cursor-pointer text-[#8A8A8A] leading-[24px] hover:text-gray-700"
              >
                {price}
              </li>
            )
          )}
        </ul>
      </div>

      <div className="mb-6">
        <h3
          className="text-[18px] leading-[28px] mb-2 cursor-pointer Instagram_h1 flex justify-between items-center"
          onClick={() => setOpenBrands(!openBrands)}
        >
          Brands
          <span>
            {openBrands ? <IoIosArrowUp /> : <IoChevronDownOutline />}
          </span>
        </h3>

        {openBrands && (
          <ul className="space-y-1 text-gray-700">
            {["Minimog", "Retrolie", "Brook", "Learts", "Vagabond", "Abby"].map(
              (brand) => (
                <li
                  key={brand}
                  className="cursor-pointer text-[#8A8A8A] leading-[24px] hover:text-gray-700"
                >
                  {brand}
                </li>
              )
            )}
          </ul>
        )}
      </div>

      <div className="mb-6">
        <h3
          className="text-[18px] leading-[28px] mb-2 Instagram_h1 cursor-pointer flex justify-between items-center"
          onClick={() => setOpenCollections(!openCollections)}
        >
          Collections
          <span>
            {openCollections ? <IoIosArrowUp /> : <IoChevronDownOutline />}
          </span>
        </h3>

        {openCollections && (
          <ul className="space-y-1 text-gray-700">
            {[
              "All products",
              "Best sellers",
              "New arrivals",
              "Accessories",
            ].map((col) => (
              <li
                key={col}
                className="cursor-pointer text-[#8A8A8A] leading-[24px] hover:text-gray-700"
              >
                {col}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h3 className="text-[18px] leading-[28px] mb-2 Instagram_h1">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Fashion",
            "Hats",
            "Sandal",
            "Belt",
            "Bags",
            "Snacker",
            "Denim",
            "Minimog",
            "Vagabond",
            "Sunglasses",
            "Beachwear",
          ].map((tag) => (
            <span
              key={tag}
              className=" cursor-pointer text-[#8A8A8A] leading-[24px] hover:text-gray-700 "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;

import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";

const Filters = () => {
  const [openBrands, setOpenBrands] = useState(true);
  const [openCollections, setOpenCollections] = useState(true);

  return (
    <div className="w-full md:w-64 px-4 md:px-0 py-4 border-r md:border-r-0">
      <h2 className="text-[26px] md:text-[30px] mb-6 Instagram_h1 leading-[36px]">
        Filters
      </h2>

      <div className="mb-6">
        <h3 className="mb-2 Instagram_h1 text-[18px] leading-[28px]">Size</h3>
        <div className="flex flex-wrap gap-2">
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              className="border border-[#8A8A8A] text-[#8A8A8A] px-3 py-1 rounded cursor-pointer hover:bg-gray-100 text-sm transition"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 Instagram_h1 text-[18px] leading-[28px]">Colors</h3>
        <div className="flex flex-wrap gap-3">
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
              className={`w-8 h-8 rounded-full cursor-pointer shadow hover:ring-2 hover:ring-gray-300 transition ${color}`}
            ></span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 Instagram_h1 text-[18px] leading-[28px]">Prices</h3>
        <ul className="space-y-1 text-[#8A8A8A]">
          {["$0-$50", "$50-$100", "$100-$150", "$150-$200", "$300-$400"].map(
            (price) => (
              <li
                key={price}
                className="cursor-pointer leading-[24px] hover:text-black transition"
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

        <div
          className={`transition-all duration-300 overflow-hidden ${
            openBrands ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <ul className="space-y-1 text-[#8A8A8A] mt-2">
            {["Minimog", "Retrolie", "Brook", "Learts", "Vagabond", "Abby"].map(
              (brand) => (
                <li
                  key={brand}
                  className="cursor-pointer leading-[24px] hover:text-black transition"
                >
                  {brand}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h3
          className="text-[18px] leading-[28px] mb-2 cursor-pointer Instagram_h1 flex justify-between items-center"
          onClick={() => setOpenCollections(!openCollections)}
        >
          Collections
          <span>
            {openCollections ? <IoIosArrowUp /> : <IoChevronDownOutline />}
          </span>
        </h3>

        <div
          className={`transition-all duration-300 overflow-hidden ${
            openCollections ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <ul className="space-y-1 text-[#8A8A8A] mt-2">
            {[
              "All products",
              "Best sellers",
              "New arrivals",
              "Accessories",
            ].map((col) => (
              <li
                key={col}
                className="cursor-pointer leading-[24px] hover:text-black transition"
              >
                {col}
              </li>
            ))}
          </ul>
        </div>
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
              className="cursor-pointer text-[#8A8A8A] px-3 py-1 border border-gray-300 rounded-full hover:bg-black hover:text-white transition text-sm"
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

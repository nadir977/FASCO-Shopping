import React, { useState, useEffect, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { MdOutlinePermIdentity } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi"; 
import { Link, useLocation } from "react-router-dom";
import { navigation,navLinks } from "../assets/data.jsX";

const ShopNavbar = () => {



  const pathName = useLocation().pathname; 

 
 if(navLinks.includes(pathName)){
   return null;
 }
  return (
    <nav className="relative text-black">
      <div className="mx-auto max-w-[1281px] px-2 md:px-4">
        <div className="relative flex md:h-[104px] h-[60px] items-center justify-between">
          <div className="flex shrink-0 items-center ">
            <h1 className="text-[#484848] text-[30px] md:text-[52px] font-[400] Instagram_h1">
              FASCO
            </h1>
          </div>

          <div className="hidden sm:flex sm:ml-6 space-x-4 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative mx-6 px-2 py-1 text-[#484848] font-medium 
        after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-[#484848] after:transition-all 
        ${
          pathName === item.href
            ? "after:w-full after:left-0"
            : "after:w-0 after:left-1/2 hover:after:w-full hover:after:left-0"
        }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex justify-center items-center md:gap-6 gap-2 relative">
            <div className="relative flex items-center w-36 md:w-48">
              <input
                type="text"
                placeholder="search"
                className="border border-gray-300 rounded-md w-full pl-2 md:pl-3 pr-10 md:py-1 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
              <IoIosSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-[#484848] cursor-pointer hover:text-black" />
            </div>
            <MdOutlinePermIdentity className="w-5 h-5 text-[#484848] cursor-pointer hover:text-black" />
            <FaRegStar className="hidden md:inline-block w-5 h-5 text-[#484848] cursor-pointer hover:text-black" />
            <BiShoppingBag className="w-5 h-5 text-[#484848] cursor-pointer hover:text-black" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ShopNavbar;

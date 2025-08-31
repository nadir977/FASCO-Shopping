import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { MdOutlinePermIdentity } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { navigation, navLinks } from "../assets/data.jsx";

const ShopNavbar = () => {
  const pathName = useLocation().pathname;

  if (navLinks.includes(pathName)) {
    return null;
  }

  return (
    <nav className="relative text-black border-b border-gray-200">
      <div className="mx-auto max-w-[1281px] px-3 md:px-2">
        <div className="flex h-[60px] md:h-[104px] items-center justify-between">
          <div className="flex shrink-0 items-center">
            <h1 className="text-[#484848] text-[26px] md:text-[40px] lg:text-[52px] font-[400] Instagram_h1">
              FASCO
            </h1>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-2 py-1 text-[#484848] font-medium whitespace-nowrap
                  after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-[#484848] after:transition-all
                  ${
                    pathName === item.href
                      ? "after:w-full after:left-0 font-semibold"
                      : "after:w-0 after:left-1/2 hover:after:w-full hover:after:left-0"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-2 lg:gap-6">
            <div className="relative flex items-center w-28 sm:w-36 md:w-48">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-md w-full pl-2 md:pl-3 pr-8 md:pr-10 py-1 text-sm md:text-base
                  focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
              <IoIosSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-[#484848] cursor-pointer hover:text-black w-4 h-4 md:w-5 md:h-5" />
            </div>

            <MdOutlinePermIdentity className="w-5 h-5 md:w-6 md:h-6 text-[#484848] cursor-pointer hover:text-black" />
            <FaRegStar className="hidden sm:block w-5 h-5 md:w-6 md:h-6 text-[#484848] cursor-pointer hover:text-black" />
            <Link to="/shoppingCart">
              <BiShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-[#484848] cursor-pointer hover:text-black" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ShopNavbar;

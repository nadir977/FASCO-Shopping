import React, { useState, useEffect, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { MdOutlinePermIdentity } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Shop", href: "#Shop" },
  { name: "Products", href: "#Products" },
  {
    name: "Pages",
    href: "#Pages",
    submenu: [
      { name: "About Us", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "FAQ", href: "#faq" },
    ],
  },
];

const ShopNavbar = () => {
  const [pagesOpen, setPagesOpen] = useState(false);
  const pagesRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (pagesRef.current && !pagesRef.current.contains(event.target)) {
        setPagesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            {navigation.map((item) => {
              if (item.name === "Pages") {
                return (
                  <div key={item.name} className="relative" ref={pagesRef}>
                    <button
                      onClick={() => setPagesOpen(!pagesOpen)}
                      className="mx-6 px-2 py-1 text-[#484848] font-medium flex items-center gap-1 cursor-pointer"
                    >
                      {item.name} <RiArrowDropDownLine className="w-5 h-5" />
                    </button>
                    {pagesOpen && (
                      <div className="absolute left-0 top-full mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                        {item.submenu.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-[#484848] hover:bg-gray-100"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              } else if (item.name === "Shop") {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative mx-6 px-2 py-1 text-[#484848] font-semibold
                      after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-[#484848] after:left-0 after:w-full"
                  >
                    {item.name}
                  </a>
                );
              } else {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative mx-6 px-2 py-1 text-[#484848] font-medium
                      after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-[#484848]
                      after:left-1/2 after:w-0 hover:after:w-full hover:after:left-0 after:transition-all"
                  >
                    {item.name}
                  </a>
                );
              }
            })}
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

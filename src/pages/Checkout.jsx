import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { TbLockFilled } from "react-icons/tb";
import Rectangle from "../assets/Rectangle.png";
import visa from "../assets/visa.png";
import paypal from "../assets/paypal.png";
import unionpay from "../assets/unionpay.png";
import american from "../assets/american.png";
import discover from "../assets/discover.png";
import credit from "../assets/credit.png";
import Footer from "../components/Footer";

const Checkout = () => {
  const [selected, setSelected] = useState({
    label: "Credit Card",
    icon: credit,
  });
  const [open, setOpen] = useState(false);

  const options = [
    { label: "Credit Card", icon: credit },
    { label: "Visa", icon: visa },
    { label: "UnionPay", icon: unionpay },
    { label: "Amex", icon: american },
    { label: "Discover", icon: discover },
    { label: "PayPal", icon: paypal },
  ];

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="flex justify-center py-8 mt-6">
        <h1 className="text-[28px] md:text-[36px] sm:text-[28px] lg:text-[42px] leading-[32px] Instagram_h1 text-center">
          FASCO Demo Checkout
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center border-y border-[#00000063] w-full">
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-[#00000063] bg-[#F5F5F5] py-8 px-8 md:px-14 w-full md:w-1/2 order-1 md:order-2">
          <div className="flex flex-col gap-4 max-w-[558px] w-full mr-auto">
            <div className="flex items-center w-full gap-4">
              <img src={Rectangle} alt="Product" />
              <div className="flex flex-col gap-2 w-full">
                <h4 className="text-[18px] Instagram_h1">
                  Mini dress with ruffled straps
                </h4>
                <div className="text-[#484848] flex justify-between items-center">
                  <p>Red</p> <p>$100.00</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <input
                type="text"
                placeholder="Discount code"
                className="px-4 sm:px-6 py-2 sm:py-4 h-full w-full bg-[#FFFFFF] border border-[#8A8A8A]"
              />
              <button className="py-3 px-8 shadow-[0px_20px_35px_0px_#00000026] bg-black rounded-md text-white cursor-pointer hover:bg-gray-800 transition-colors duration-200">
                Apply
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-[#484848] flex justify-between items-center">
                <p>Subtotal</p> <p>$100.00</p>
              </div>
              <div className="text-[#484848] flex justify-between items-center">
                <p>Shipping</p> <p>$40.00</p>
              </div>
              <div className="text-[#484848] flex justify-between items-center">
                <p>Total</p> <p className="text-black">$140.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-2 md:order-1">
          <div className="flex flex-col max-w-[607px] gap-8 my-8 mx-6 w-full">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <h3 className="text-[#484848] text-[46px] md:text-[36px] sm:text-[28px] Instagram_h1">
                  Contact
                </h3>
                <p className="text-[#484848] text-sm">
                  Have an account?{" "}
                  <span className="text-[#1456FF] hover:underline cursor-pointer">
                    Create Account
                  </span>
                </p>
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="text-[#8A8A8A] px-4 sm:px-6 py-2 sm:py-4 border border-[#8A8A8A] w-full"
              />
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[#484848] text-[46px] md:text-[36px] sm:text-[28px] Instagram_h1">
                Delivery
              </h3>

              <div className="relative w-full">
                <select className="appearance-none w-full text-[#8A8A8A] px-4 sm:px-6 py-2 sm:py-4 border border-[#8A8A8A] focus:outline-none">
                  <option value="">Country / Region</option>
                  <option value="pk">Pakistan</option>
                  <option value="in">India</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                </select>
                <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8A8A] pointer-events-none" />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="text-[#8A8A8A] px-4 sm:px-6 py-2 sm:py-4 border border-[#8A8A8A] w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="text-[#8A8A8A] px-4 sm:px-6 py-2 sm:py-4 border border-[#8A8A8A] w-full"
                />
              </div>

              <input
                type="text"
                placeholder="Address"
                className="text-[#8A8A8A] px-4 sm:px-6 py-2 sm:py-4 border border-[#8A8A8A] w-full"
              />

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="text-[#8A8A8A] px-4 sm:px-6 py-2 sm:py-4 border border-[#8A8A8A] w-full"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="text-[#8A8A8A] px-4 sm:px-6 py-2 sm:py-4 border border-[#8A8A8A] w-full"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="saveInfoDelivery"
                  className="w-6 h-6 border-2 border-black accent-black cursor-pointer"
                />
                <label
                  htmlFor="saveInfoDelivery"
                  className="text-[#8A8A8A] cursor-pointer"
                >
                  Save This Info for future
                </label>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-[#484848] text-[46px] md:text-[36px] sm:text-[28px] Instagram_h1 mb-4">
                Payment
              </h3>

              <div className="relative w-full" ref={dropdownRef}>
                <div
                  className="flex items-center justify-between border border-[#8A8A8A] px-4 sm:px-6 py-2 sm:py-4 text-[#8A8A8A] cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={selected.icon}
                      alt={selected.label}
                      className="w-8 h-auto"
                    />
                    <span>{selected.label}</span>
                  </div>
                  <FaChevronDown className="pointer-events-none" />
                </div>

                {open && (
                  <div className="absolute w-full bg-white border border-[#8A8A8A] mt-1 rounded shadow-lg z-10">
                    {options.map((option) => (
                      <div
                        key={option.label}
                        className="flex items-center justify-between px-6 py-4 text-[#8A8A8A] cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          setSelected(option);
                          setOpen(false);
                        }}
                      >
                        <span>{option.label}</span>
                        <img
                          src={option.icon}
                          alt={option.label}
                          className="w-8 h-auto"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-4 flex flex-col gap-2 bg-[#F5F5F5]">
                <div className="relative w-full">
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Card Number"
                    className="text-[#8A8A8A] px-4 sm:px-6 py-2 sm:py-4 border rounded border-[#8A8A8A] w-full pr-12"
                  />
                  <TbLockFilled className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Expiration Date"
                    className="text-[#8A8A8A] rounded px-4 sm:px-6 py-2 sm:py-4 border border-[#8A8A8A] w-full"
                  />

                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Security Code"
                    className="text-[#8A8A8A] rounded px-4 sm:px-6 py-2 sm:py-4 border border-[#8A8A8A] w-full"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Card Holder Name"
                  className="text-[#8A8A8A] rounded px-4 sm:px-6 py-2 sm:py-4 border border-[#8A8A8A] w-full"
                />

                <div className="flex items-center my-2 gap-2">
                  <input
                    type="checkbox"
                    id="saveInfoPayment"
                    className="w-6 h-6 border-2 border-black accent-black cursor-pointer"
                  />
                  <label
                    htmlFor="saveInfoPayment"
                    className="text-[#8A8A8A] cursor-pointer"
                  >
                    Save This Info for future
                  </label>
                </div>
              </div>
            </div>

            <button className="py-4 w-full shadow-[0px_20px_35px_0px_#00000026] bg-black text-white cursor-pointer rounded-md hover:bg-gray-800 transition-colors duration-200">
              Pay Now
            </button>

            <div className="flex justify-center text-[#484848] text-[12px] hover:underline cursor-pointer">
              Copyright © 2025 FASCO. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;

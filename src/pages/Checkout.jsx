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
  const dropdownRef = useRef();

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postal: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    holder: "",
    discountCode: "",
  });

  const [errors, setErrors] = useState({});
  const [discount, setDiscount] = useState(0);

  const options = [
    { label: "Credit Card", icon: credit },
    { label: "Visa", icon: visa },
    { label: "UnionPay", icon: unionpay },
    { label: "Amex", icon: american },
    { label: "Discover", icon: discover },
    { label: "PayPal", icon: paypal },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    setFormData({ ...formData, cardNumber: value });
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    setFormData({ ...formData, expiry: value });
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setFormData({ ...formData, cvv: value });
  };

  const applyDiscount = () => {
    if (formData.discountCode.toUpperCase() === "SAVE10") {
      setDiscount(10);
    } else {
      setDiscount(0);
      alert("❌ Invalid discount code");
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email required";
    }
    if (!formData.firstName) newErrors.firstName = "First name required";
    if (!formData.lastName) newErrors.lastName = "Last name required";
    if (!formData.address) newErrors.address = "Address required";
    if (!formData.city) newErrors.city = "City required";
    if (!formData.postal) newErrors.postal = "Postal code required";
    if (
      !formData.cardNumber ||
      formData.cardNumber.replace(/\s/g, "").length < 16
    ) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }
    if (!formData.expiry) newErrors.expiry = "Expiry date required";
    if (!formData.cvv || formData.cvv.length < 3) {
      newErrors.cvv = "CVV must be at least 3 digits";
    }
    if (!formData.holder) newErrors.holder = "Cardholder name required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("✅ Payment Successful! (Mock)");
    }
  };

  const subtotal = 100;
  const shipping = 40;
  const total = subtotal + shipping - discount;

  return (
    <>
      <div className="flex justify-center py-8 mt-6">
        <h1 className="text-[28px] md:text-[36px] lg:text-[42px] leading-[32px] Instagram_h1 text-center">
          FASCO Demo Checkout
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row justify-center border-y border-[#00000063] w-full"
      >
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-[#00000063] bg-[#F5F5F5] py-8 px-8 md:px-14 w-full lg:w-1/2 order-1 lg:order-2">
          <div className="flex flex-col gap-4 lg:max-w-[558px] w-full mr-auto">
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
                name="discountCode"
                value={formData.discountCode}
                onChange={handleChange}
                placeholder="Discount code"
                className="px-4 sm:px-6 py-2 sm:py-4 h-full w-full bg-[#FFFFFF] border border-[#8A8A8A]"
              />
              <button
                type="button"
                onClick={applyDiscount}
                className="py-3 px-8 shadow bg-black rounded-md text-white cursor-pointer hover:bg-gray-800"
              >
                Apply
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-[#484848] flex justify-between items-center">
                <p>Subtotal</p> <p>${subtotal}.00</p>
              </div>
              <div className="text-[#484848] flex justify-between items-center">
                <p>Shipping</p> <p>${shipping}.00</p>
              </div>
              {discount > 0 && (
                <div className="text-[#484848] flex justify-between items-center">
                  <p>Discount</p>{" "}
                  <p className="text-green-600">- ${discount}.00</p>
                </div>
              )}
              <div className="text-[#484848] flex justify-between items-center">
                <p>Total</p> <p className="text-black">${total}.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex lg:justify-end order-2 lg:order-1">
          <div className="flex flex-col lg:max-w-[607px] gap-8 my-8 mx-6 w-full">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <h3 className="text-[#484848] text-[28px] md:text-[36px] lg:text-[46px] Instagram_h1">
                  Contact
                </h3>
                <p className="text-[#484848] text-sm">
                  Have an account?{" "}
                  <span className="text-[#1456FF] cursor-pointer">
                    Create Account
                  </span>
                </p>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="text-[#8A8A8A] px-4 py-3 border border-[#8A8A8A] w-full"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[#484848] text-[28px] md:text-[36px] lg:text-[46px] Instagram_h1">
                Delivery
              </h3>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="text-[#8A8A8A] px-4 py-3 border border-[#8A8A8A] w-full"
                required
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="text-[#8A8A8A] px-4 py-3 border border-[#8A8A8A] w-full"
                required
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="text-[#8A8A8A] px-4 py-3 border border-[#8A8A8A] w-full"
                required
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="text-[#8A8A8A] px-4 py-3 border border-[#8A8A8A] w-full"
                required
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}

              <input
                type="text"
                name="postal"
                value={formData.postal}
                onChange={handleChange}
                placeholder="Postal Code"
                className="text-[#8A8A8A] px-4 py-3 border border-[#8A8A8A] w-full"
                required
              />
              {errors.postal && (
                <p className="text-red-500 text-sm">{errors.postal}</p>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[#484848] text-[28px] md:text-[36px] lg:text-[46px] Instagram_h1">
                Payment
              </h3>
              <div className="relative w-full" ref={dropdownRef}>
                <div
                  className="flex items-center justify-between border border-[#8A8A8A] px-4 py-3 cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={selected.icon}
                      alt={selected.label}
                      className="w-8"
                    />
                    <span>{selected.label}</span>
                  </div>
                  <FaChevronDown />
                </div>
                {open && (
                  <div className="absolute w-full bg-white border mt-1 rounded shadow-lg z-10">
                    {options.map((option) => (
                      <div
                        key={option.label}
                        className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          setSelected(option);
                          setOpen(false);
                        }}
                      >
                        <span>{option.label}</span>
                        <img
                          src={option.icon}
                          alt={option.label}
                          className="w-8"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleCardNumberChange}
                placeholder="Card Number"
                maxLength="19"
                className="px-4 py-3 border border-[#8A8A8A] w-full"
                required
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-sm">{errors.cardNumber}</p>
              )}

              <div className="flex gap-4">
                <input
                  type="text"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleExpiryChange}
                  placeholder="MM/YY"
                  maxLength="5"
                  className="px-4 py-3 border border-[#8A8A8A] w-full"
                  required
                />
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleCvvChange}
                  placeholder="CVV"
                  maxLength="4"
                  className="px-4 py-3 border border-[#8A8A8A] w-full"
                  required
                />
              </div>
              {errors.expiry && (
                <p className="text-red-500 text-sm">{errors.expiry}</p>
              )}
              {errors.cvv && (
                <p className="text-red-500 text-sm">{errors.cvv}</p>
              )}

              <input
                type="text"
                name="holder"
                value={formData.holder}
                onChange={handleChange}
                placeholder="Card Holder Name"
                className="px-4 py-3 border border-[#8A8A8A] w-full"
                required
              />
              {errors.holder && (
                <p className="text-red-500 text-sm">{errors.holder}</p>
              )}
            </div>

            <button
              type="submit"
              className="py-4 w-full shadow bg-black text-white rounded-md hover:bg-gray-800"
            >
              Pay ${total}.00 Now
            </button>

            <div className="flex justify-center text-[#484848] text-[12px] cursor-pointer">
              © 2025 FASCO. All Rights Reserved.
            </div>
          </div>
        </div>
      </form>

      <Footer />
    </>
  );
};

export default Checkout;

import React, { useState } from "react";
import Group from "../assets/Group.png";
import Group1 from "../assets/Group1.png";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";
const Collection = () => {

  return (
    <div className="max-w-[1400px] mx-auto">
      <div
        className="bg-cover bg-center  mt-[40px] w-full"
        style={{ backgroundImage: `url(${Group})` }}>
        <div className="max-w-[1280px] mx-auto h-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2"><img src={Group1} alt="collaction" className="w-full h-full object-cover"/></div>
          <div className="w-full md:w-1/2 px-6 md:px-12 py-8 md:py-12 flex flex-col justify-center gap-4">
            <p className="text-[#767676] text-[16px] m-0">Women Collection</p>
            <p className="text-[#484848] text-[46px] font-[400] Instagram_h1 m-0">
              Peaky Blinders
            </p>
            <span className="underline text-black">DESCRIPTION</span>
            <p className="text-[#767676] m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Scelerisque duis.
            </p>
            <div className="flex items-center gap-3">
              <p className="m-0 text-[#767676]">Size:</p>
              <select
                name="Size"
                id="Size"
                className="appearance-none cursor-pointer p-1 px-3 border rounded-xl text-white bg-black"
              >
                <option value="">M</option>
                <option value="S">S</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <p className="text-[28px] font-[500] text-[#000000] m-0">
              $100<span className="text-[24px] font-[500]">.00</span>
            </p>
            <button className="bg-[#000000] md:max-w-[210px] text-[16px] font-normal text-white shadow-[0px_20px_35px_0px_#00000026] py-[16px] px-[60px] rounded-lg cursor-pointer w-full md:w-auto">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1281px] mx-auto flex flex-wrap justify-center md:justify-between py-16 gap-8">
        <img
          src={feature1}
          alt="Image"
          className="w-[48%] sm:w-[23%] md:w-auto"
        />
        <img
          src={feature2}
          alt="Image"
          className="w-[48%] sm:w-[23%] md:w-auto"
        />
        <img
          src={feature3}
          alt="Image"
          className="w-[48%] sm:w-[23%] md:w-auto"
        />
        <img
          src={feature4}
          alt="Image"
          className="w-[48%] sm:w-[23%] md:w-auto"
        />
      </div>
    </div>
  );
};

export default Collection;

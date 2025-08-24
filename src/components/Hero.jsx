import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import ultimate from "../assets/ultimate.png";
import sale from "../assets/sale.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";

const Hero = () => {
  return (
    <div className="max-w-[1281px] mx-auto md:px-2 2xl:px-0 px-4  sm:px-6">
      <div className="flex flex-col md:flex-row mt-[6.5rem] gap-4 md:gap-0">
        <div className="bg-[#E0E0E0] w-full md:w-[30%]  md:pt-40 rounded flex justify-center">
          <img src={image1} alt="Left Hero" />
        </div>

        <div className="w-full md:w-[40%] flex flex-col justify-between items-center">
          <div className="flex flex-col items-center">
            <img src={image3} alt="Hero Main" />
            <img className="mt-4" src={ultimate} alt="Ultimate" />
            <img src={sale} alt="Sale" />
            <p className="text-[#484848] font-[400] text-[20px] leading-[100%] tracking-[2px] text-center uppercase mt-2">
              NEW COLLECTION
            </p>
          </div>

          <button className="bg-[#000000] text-[16px] font-[400] w-full md:w-auto text-white shadow-[0px_20px_35px_0px_#00000026] py-[16px] px-[60px] rounded-lg cursor-pointer mt-6 md:mt-0">
            SHOP NOW
          </button>

          <div className="mt-6 md:mt-0">
            <img src={image4} alt="Bottom Hero" />
          </div>
        </div>

        <div className="bg-[#E0E0E0] w-full md:w-[30%] pt-20 md:pt-40 rounded flex justify-center">
          <img src={image2} alt="Right Hero" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center md:justify-between gap-10 py-10 md:py-20">
        <img src={logo1} alt="logo" />
        <img src={logo2} alt="logo" />
        <img src={logo3} alt="logo" />
        <img src={logo4} alt="logo" />
        <img src={logo5} alt="logo" />
      </div>
    </div>
  );
};

export default Hero;

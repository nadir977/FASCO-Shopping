import React from "react";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";

const Footer = () => {
  return (
    <>
      <div className="max-w-[1400px] mx-auto pt-10 flex flex-col md:flex-row items-center justify-between gap-12 px-6">
        <div>
          <img src={image12} alt="Image" className="max-w-full" />
        </div>

        <div className="flex flex-col justify-center gap-8 text-center md:text-left max-w-[600px]">
          <h1 className="text-[24px] sm:text-[22px] md:text-[30px] lg:text-[40px] xl:text-[46px] font-[400] text-[#484848] leading-tight">
            Subscribe To Our Newsletter
          </h1>

          <p className="text-[#8A8A8A] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <input
              type="text"
              placeholder="michael@ymail.com"
              className="flex-1 w-full p-3 sm:p-4 leading-[22px] sm:leading-[26px] 
               text-[14px] sm:text-[16px] md:text-[18px] text-[#8A8A8A] 
               font-normal outline-0 shadow-2xl rounded-lg"
            />
            <button
              className="bg-[#000000] cursor-pointer text-[14px] sm:text-[16px] font-normal 
               text-white shadow-[0px_20px_35px_0px_#00000026] 
               py-[14px] sm:py-[16px] px-6 rounded-lg flex-shrink-0"
            >
              Subscribe Now
            </button>
          </div>
        </div>

        <div>
          <img src={image13} alt="Image" className="max-w-full" />
        </div>
      </div>

      <div className="border-t border-gray-300 mt-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row w-full justify-between mb-8 mt-6 items-center text-center md:text-left">
            <h3 className="text-[24px] sm:text-[28px] md:text-[32px] text-[#484848] font-semibold mb-6 md:mb-0">
              FASCO
            </h3>

            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 sm:gap-x-10 gap-y-2 text-[#484848] text-[14px] sm:text-[16px]">
              {[
                "Support Center",
                "Invoicing",
                "Contract",
                "Careers",
                "Blog",
                "FAQ,s",
              ].map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="relative px-1 py-1 cursor-pointer 
                  after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-[#484848] after:transition-all
                  after:left-1/2 after:w-0 hover:after:w-full hover:after:left-0"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center text-[#484848] text-sm py-4">
            © 2025 Xpro. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

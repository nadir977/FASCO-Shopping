import React from "react";
import image22 from "./assets/image22.png";
import { Link } from "react-router-dom";

const ConfirmationCode = () => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[1200px] border border-[#DBDBDB] flex flex-col md:flex-row md:rounded-r-xl overflow-hidden">
        <div className="w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src={image22}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div className="flex flex-col py-4 px-6 md:px-16">
            <h2 className="md:text-[66px] text-[40px] Instagram_h1 text-[#484848] mb-10 md:mb-32">
              FASCO
            </h2>
            <h4 className="text-[#000000] md:text-[30px] text-[20px] Instagram_h1 md:mb-6">
              Enter The Confirmation Code
            </h4>

            <input
              type="text"
              placeholder="Confirmation Code"
              className="w-full outline-0 border-b border-[#9D9D9D] py-3 my-4 placeholder:text-[#8A8A8A]"
            />

            <div className="flex flex-col px-4 gap-4">
              <Link to="/newpassword">
                <button className="w-full bg-black hover:bg-[#333] shadow-[0px_20px_35px_0px_#00000026] mt-6 text-white py-3 rounded-lg transition cursor-pointer">
                  Recover Account
                </button>
              </Link>
              <div className="flex flex-col items-center md:flex-row justify-center gap-2 my-2">
                <p className="text-[14px] md:text-[16px]">Didn’t receive Confirmation Code?</p>
                <span className="text-[#5B86E5]  font-[700] cursor-pointer hover:underline">
                  Resend Now
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end px-6 md:px-10 py-6 text-[16px]">
            <a
              href="#"
              className="relative cursor-pointer text-[#484848] 
             after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
             after:h-[2px] after:w-0 after:bg-[#484848] after:transition-all after:duration-500 
             hover:after:w-full hover:after:left-0"
            >
              FASCO Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationCode;

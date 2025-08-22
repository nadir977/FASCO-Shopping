import React from "react";
import image22 from "./assets/image22.png";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
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
            <h2 className="md:text-[66px] text-[40px] Instagram_h1 text-[#484848] mb-10 md:mb-24">
              FASCO
            </h2>
            <h4 className="text-[#000000] md:text-[30px] text-[20px] Instagram_h1 md:mb-6">
              Forgot Password
            </h4>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="flex-1 outline-0 border-b border-[#9D9D9D] py-2 placeholder:text-[#8A8A8A]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="flex-1 outline-0 border-b border-[#9D9D9D] py-2 placeholder:text-[#8A8A8A]"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 outline-0 border-b border-[#9D9D9D] py-2 placeholder:text-[#8A8A8A]"
                />
                <input
                  type="tel"
                  inputMode="numeric"
                  required
                  placeholder="Phone Number"
                  className="flex-1 outline-0 border-b border-[#9D9D9D] py-2 placeholder:text-[#8A8A8A]"
                />
              </div>
            </div>

            <div className="flex flex-col px-4 gap-4">
              <Link to="/ConfirmationCode">
                <button className="w-full bg-black hover:bg-[#333] shadow-[0px_20px_35px_0px_#00000026] mt-6 text-white py-3 rounded-lg cursor-pointer">
                  Send Confirmation Code
                </button>
              </Link>
              <div className="w-full flex justify-center gap-1 my-2">
                <p>Already have an account?</p>
                <Link
                  to="/login"
                  className="text-[#5B86E5] font-[700] cursor-pointer hover:underline"
                >
                  Login
                </Link>
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

export default ForgotPassword;

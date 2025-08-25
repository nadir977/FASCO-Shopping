import React, { useState } from "react";
import image22 from "../assets/image22.png";
import { useNavigate } from "react-router-dom";

const ConfirmationCode = () => {
  const navigate = useNavigate();

  const [code, setCode] = useState({ Confirmation: "" });
  const [error, setError] = useState("");  

  const handleChange = (e) => {
    setCode({ ...code, [e.target.name]: e.target.value });
    setError("");  
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!code.Confirmation.trim()) {
      setError("⚠️ Please enter the confirmation code");
      return;
    }

    console.log(code);
    navigate("/newpassword");
  };

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
              name="Confirmation"
              value={code.Confirmation}
              onChange={handleChange}
              placeholder="Confirmation Code"
              className={`w-full outline-0 border-b py-3 my-4 placeholder:text-[#8A8A8A] ${
                error ? "border-red-500" : "border-[#9D9D9D]"
              }`}
            />
 
            {error && (
              <p className="text-red-500 text-sm mt-[-10px] mb-2">{error}</p>
            )}

            <div className="flex flex-col px-4 gap-4">
              <button
                onClick={handleSubmit}
                className="w-full bg-black hover:bg-[#333] shadow-[0px_20px_35px_0px_#00000026] mt-6 text-white py-3 rounded-lg transition cursor-pointer"
              >
                Recover Account
              </button>

              <div className="flex flex-col items-center md:flex-row justify-center gap-2 my-2">
                <p className="text-[14px] md:text-[16px]">
                  Didn’t receive Confirmation Code?
                </p>
                <span className="text-[#5B86E5] font-[700] cursor-pointer hover:underline">
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

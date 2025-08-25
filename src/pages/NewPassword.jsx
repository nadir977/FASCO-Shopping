import React, { useState } from "react";
import image22 from "../assets/image22.png";

const NewPassword = () => {
  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");  
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.newPassword || !form.confirmPassword) {
      setError("⚠️ Please fill in both fields");
      return;
    }

    if (form.newPassword.length < 6) {
      setError("⚠️ Password must be at least 6 characters long");
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      setError("⚠️ Passwords do not match");
      return;
    }

    console.log(form);
    alert("✅ Password reset successfully!");
    setForm({ newPassword: "", confirmPassword: "" });
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
              Enter Your New Password
            </h4>

            <div className="flex flex-col gap-6 mb-4">
              <input
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                placeholder="New Password"
                className={`w-full outline-0 border-b py-3 placeholder:text-[#8A8A8A] ${
                  error && !form.newPassword ? "border-red-500" : "border-[#9D9D9D]"
                }`}
              />
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className={`w-full outline-0 border-b py-3 placeholder:text-[#8A8A8A] ${
                  error && !form.confirmPassword ? "border-red-500" : "border-[#9D9D9D]"
                }`}
              />
            </div>
 
            {error && (
              <p className="text-red-500 text-sm mb-4">{error}</p>
            )}

            <div className="flex flex-col px-4 gap-4">
              <button
                onClick={handleSubmit}
                className="w-full bg-[#5B86E5] text-white py-3 rounded-lg cursor-pointer hover:bg-[#4670C0] transition"
              >
                Submit
              </button>
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

export default NewPassword;

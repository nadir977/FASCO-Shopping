import React, { useState } from "react";
import image22 from "../assets/image22.png";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Confirmation code sent!");
      console.log(form); 
      navigate("/confirmationCode");
    }
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
            <h2 className="md:text-[66px] text-[40px] Instagram_h1 text-[#484848] mb-10 md:mb-24">
              FASCO
            </h2>
            <h4 className="text-[#000000] md:text-[30px] text-[20px] Instagram_h1 md:mb-6">
              Forgot Password
            </h4>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={form.firstName}
                    placeholder="First Name"
                    className="w-full outline-0 border-b border-[#9D9D9D] py-2 placeholder:text-[#8A8A8A]"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>

                <div className="flex-1">
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={form.lastName}
                    placeholder="Last Name"
                    className="w-full outline-0 border-b border-[#9D9D9D] py-2 placeholder:text-[#8A8A8A]"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                    placeholder="Email Address"
                    className="w-full outline-0 border-b border-[#9D9D9D] py-2 placeholder:text-[#8A8A8A]"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div className="flex-1">
                  <input
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    value={form.phone}
                    inputMode="numeric"
                    placeholder="Phone Number"
                    className="w-full outline-0 border-b border-[#9D9D9D] py-2 placeholder:text-[#8A8A8A]"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col px-4 gap-4">
              <button
                onClick={handleSubmit}
                className="w-full bg-black hover:bg-[#333] shadow-[0px_20px_35px_0px_#00000026] mt-6 text-white py-3 rounded-lg cursor-pointer"
              >
                Send Confirmation Code
              </button>

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

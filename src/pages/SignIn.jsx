import React, { useState } from "react";
import image22 from "../assets/image22.png";
import image23 from "../assets/image23.png";
import image24 from "../assets/image24.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });  
  };

  const validate = () => {
    let newErrors = {};
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert(`Welcome! your email is ${form.email}`);
      console.log(form);
      setForm({ email: "", password: "" });
    }
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-[1200px] border border-[#DBDBDB] flex flex-col md:flex-row md:rounded-r-xl overflow-hidden">
        <div className="w-full md:w-1/2 h-56 md:h-auto">
          <img
            src={image22}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div className="flex flex-col py-4 px-6 md:px-16">
            <form onSubmit={handleSubmit}>
              <h2 className="md:text-[66px] text-[40px] Instagram_h1 text-[#484848] mb-2">
                FASCO
              </h2>
              <h4 className="text-[#000000] md:text-[30px] text-[20px] Instagram_h1 mb-6">
                Sign In To FASCO
              </h4>
 
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 border rounded-lg px-6 py-2 cursor-pointer border-[#5B86E5] hover:bg-[#5B86E5]/10 transition w-full md:w-auto min-w-[200px]"
                >
                  <img src={image23} alt="Google" className="w-5 h-5" />
                  <p className="text-sm md:text-base lg:text-lg font-medium whitespace-nowrap">
                    Sign up with Google
                  </p>
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 border rounded-lg px-6 py-2 cursor-pointer border-[#5B86E5] hover:bg-[#5B86E5]/10 transition w-full md:w-auto min-w-[200px]"
                >
                  <img src={image24} alt="Email" className="w-5 h-5" />
                  <p className="text-sm md:text-base lg:text-lg font-medium whitespace-nowrap">
                    Sign up with Email
                  </p>
                </button>
              </div>
 
              <div className="flex items-center justify-center my-6">
                <div className="flex-1 h-[5px] max-w-[30px] bg-[#838383]" />
                <p className="mx-4 text-[#838383] font-[700] text-[30px]">OR</p>
                <div className="flex-1 h-[5px] max-w-[30px] bg-[#838383]" />
              </div>
 
              <div className="flex flex-col gap-6 mb-10">
                <div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="flex-1 outline-0 w-full border-b border-[#9D9D9D] py-2 placeholder:text-[#8A8A8A]"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="flex-1 outline-0 w-full border-b border-[#9D9D9D] py-2 placeholder:text-[#8A8A8A]"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>
 
              <div className="flex flex-col px-4 gap-4">
                <div>
                  <button
                    type="submit"
                    className="w-full bg-black hover:bg-[#333] shadow-[0px_20px_35px_0px_#00000026] text-white py-3 rounded-lg cursor-pointer"
                  >
                    Sign In
                  </button>
                </div>
                <Link to="/registration">
                  <button
                    type="button"
                    className="border border-[#5B86E5] bg-transparent py-3 w-full rounded-lg cursor-pointer text-[#5B86E5] hover:bg-[#5B86E5]/10 transition"
                  >
                    Register Now
                  </button>
                </Link>
                <div className="w-full flex cursor-pointer text-[#5B86E5] justify-center md:justify-end ">
                  <Link
                    to="/ForgotPassword"
                    className="text-[#5B86E5] hover:underline font-[700]"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </form>
          </div>
 
          <div className="flex justify-center lg:justify-end px-6 md:px-10 py-6 text-[14px] md:text-[16px]">
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

export default SignIn;

import React, { useState } from "react";
import image25 from "../assets/image25.png";
import image23 from "../assets/image23.png";
import image24 from "../assets/image24.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });  
  };

  const validateForm = () => {
    let newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(form.phone)) {
      newErrors.phone = "Phone must be 10-15 digits";
    }

    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (form.confirmPassword !== form.password)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert(
      `Account created for ${form.firstName} ${form.lastName} with email ${form.email}`
    );
    console.log(form);
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[1200px] border border-[#DBDBDB] flex flex-col md:flex-row md:rounded-r-xl overflow-hidden">
        
        <div className="w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src={image25}
            alt="Sign up visual"
            className="w-full h-full object-cover"
          />
        </div>
 
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div className="flex flex-col py-4 px-6 md:px-16">
            <h2 className="md:text-[66px] text-[40px] Instagram_h1 text-[#484848] mb-2 text-center md:text-left">
              FASCO
            </h2>
            <h4 className="text-[#000000] md:text-[30px] text-[20px] Instagram_h1 mb-6 text-center md:text-left">
              Create Account
            </h4> 

            <div className="flex flex-col md:flex-row gap-4 w-full">
              <button
                aria-label="Sign up with Google"
                className="flex items-center justify-center gap-2 border rounded-lg px-6 py-2 cursor-pointer border-[#5B86E5] hover:bg-[#5B86E5]/10 transition w-full md:w-auto"
              >
                <img src={image23} alt="Google" className="w-5 h-5" />
                <p className="text-sm md:text-base font-medium whitespace-nowrap">
                  Sign up with Google
                </p>
              </button>

              <button
                aria-label="Sign up with Email"
                className="flex items-center justify-center gap-2 border rounded-lg px-6 py-2 cursor-pointer border-[#5B86E5] hover:bg-[#5B86E5]/10 transition w-full md:w-auto"
              >
                <img src={image24} alt="Email" className="w-5 h-5" />
                <p className="text-sm md:text-base font-medium whitespace-nowrap">
                  Sign up with Email
                </p>
              </button>
            </div>
 
            <div className="flex items-center justify-center my-6">
              <div className="flex-1 h-[5px] max-w-[30px] bg-[#838383]" />
              <p className="mx-4 text-[#838383] font-[700] text-[30px]">OR</p>
              <div className="flex-1 h-[5px] max-w-[30px] bg-[#838383]" />
            </div>

   
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
            
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <input
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      value={form.firstName}
                      placeholder="First Name"
                      className="w-full outline-0 border-b border-[#9D9D9D] py-2 px-2"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      value={form.lastName}
                      placeholder="Last Name"
                      className="w-full outline-0 border-b border-[#9D9D9D] py-2 px-2"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
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
                      className="w-full outline-0 border-b border-[#9D9D9D] py-2 px-2"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="tel"
                      name="phone"
                      onChange={handleChange}
                      value={form.phone}
                      placeholder="Phone Number"
                      className="w-full outline-0 border-b border-[#9D9D9D] py-2 px-2"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>
 
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={form.password}
                      placeholder="Password"
                      className="w-full outline-0 border-b border-[#9D9D9D] py-2 px-2"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="password"
                      name="confirmPassword"
                      onChange={handleChange}
                      value={form.confirmPassword}
                      placeholder="Confirm Password"
                      className="w-full outline-0 border-b border-[#9D9D9D] py-2 px-2"
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>
              </div> 

              <div className="flex flex-col gap-4 mt-8">
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-[#333] transition text-white py-3 rounded-lg cursor-pointer shadow-2xl"
                >
                  Create Account
                </button>

                <div className="w-full flex justify-center gap-1 text-[16px]">
                  <p>Already have an account?</p>
                  <Link
                    to="/login"
                    className="text-[#5B86E5] font-[700] cursor-pointer hover:underline"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
 
          <div className="flex justify-center lg:justify-end px-6 md:px-10 py-4 text-[16px]">
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

export default SignUp;

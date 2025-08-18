import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import image14 from "../assets/image14.png";
import image15 from "../assets/image15.png";

const testimonials = [
  {
    name: "James K.",
    role: "Traveler",
    image: image14,
    review:
      "You won’t regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    rating: 5,
  },
  {
    name: "Sarah M.",
    role: "Designer",
    image: image15,
    review:
      "This is exactly what I was looking for. Thank you for making it painless, pleasant and most of all hassle free!",
    rating: 5,
  },
  {
    name: "John W.",
    role: "Developer",
    image: image14,
    review:
      "The service was excellent. I will refer everyone I know. I will recommend you to my colleagues.",
    rating: 4,
  },
  {
    name: "Linda P.",
    role: "Marketer",
    image: image15,
    review:
      "It really saves me time and effort. It is exactly what our business has been lacking.",
    rating: 5,
  },
  {
    name: "Chris B.",
    role: "Photographer",
    image: image14,
    review:
      "I just can’t get enough of it. I want to get a T-shirt with it on so I can show it off to everyone.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="bg-[#FAFAFA] pt-16 pb-8 max-w-[1920px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-[46px] text-[#484848] Instagram_h1">
          This Is What Our Customers Say
        </h2>
        <p className="text-[#8A8A8A] text-[16px] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis.
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={-40}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: -40,
          },
        }}
        className="relative custom-swiper"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card bg-white flex flex-col md:mt-10 md:flex-row  rounded-xl gap-6 shadow-lg py-8 px-6 mx-auto transition-all duration-300 max-w-[500px]">
              <div className="w-full md:w-[40%]">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-[60%]">
                <p className="text-[#484848]">{t.review}</p>
                <div className="mt-4 flex">
                  {Array(t.rating)
                    .fill()
                    .map((_, i) => (
                      <span
                        key={i}
                        className="text-[#FCA120] text-xl md:text-2xl"
                      >
                        ★
                      </span>
                    ))}
                </div>
                <div className="border-t border-[#484848] w-[60%] mt-3"></div>
                <h3 className="text-[#484848] text-[24px] md:text-[32px]">
                  {t.name}
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#484848]">
                  {t.role}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Pagination + Buttons */}
        <div className="flex flex-col items-center mt-8 gap-4">
          <div className="custom-pagination flex justify-center gap-2"></div>

          {/* Buttons sirf md ke baad visible */}
          <div className="hidden md:flex gap-4 py-6">
            <button className="prev-btn bg-white shadow-lg w-10 h-10 cursor-pointer flex items-center text-[#B6B6B6] hover:text-black justify-center rounded-full hover:bg-gray-100">
              <FaAngleLeft />
            </button>
            <button className="next-btn bg-white shadow-lg w-10 h-10 cursor-pointer flex items-center text-[#B6B6B6] hover:text-black justify-center rounded-full hover:bg-gray-100">
              <FaAngleRight />
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

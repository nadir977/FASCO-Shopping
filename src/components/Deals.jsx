import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { dealSlides } from "../assets/data.jsX";

const Deals = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.params.pagination.el = paginationRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
      swiperInstance.pagination.init();
      swiperInstance.pagination.update();
    }
  }, [swiperInstance]);

  const [timeLeft, setTimeLeft] = useState(6 * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const d = Math.floor(seconds / (60 * 60 * 24));
    const h = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
    const m = Math.floor((seconds % (60 * 60)) / 60);
    const s = seconds % 60;

    return { d, h, m, s };
  };

  const { d, h, m, s } = formatTime(timeLeft);

  return (
    <div className=" md:py-30 py-10 max-w-[1280px] mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col  w-full md:w-1/3">
          <h1 className="md:text-[46px] text-[38px]  text-[#484848] Instagram_h1">
            Deals Of The Month
          </h1>
          <p className="text-[#8A8A8A] mt-3 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>

          <button className="bg-black text-[16px] md:max-w-[210px] font-[400] text-white shadow-[0px_20px_35px_0px_#00000026] py-[14px] px-[60px] my-4 rounded-lg cursor-pointer">
            Buy Now
          </button>

          <h3 className="mt-8 mb-4 font-[500] text-[#484848] text-[24px] md:text-[28px]">
            Hurry, Before It’s Too Late!
          </h3>

          <div className="flex gap-4 flex-wrap mb-2">
            {[
              { value: d, label: "Days" },
              { value: h, label: "Hr" },
              { value: m, label: "Mins" },
              { value: s, label: "Sec" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div
                  className="px-4 py-2 rounded-lg bg-white text-[#484848] text-[32px] font-bold min-w-[70px] text-center"
                  style={{ boxShadow: "0px 4px 14px 1px #00000029" }}
                >
                  {String(item.value).padStart(2, "0")}
                </div>
                <p className="text-[24px] text-[#484848] mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full md:w-2/3 flex ">
          <div className="hidden md:flex items-end gap-4 mr-4 z-20">
            <button
              ref={prevRef}
              className="bg-white shadow-lg w-10 h-10 flex items-center justify-center rounded-full text-[#B6B6B6] hover:text-black hover:bg-gray-100 cursor-pointer"
            >
              <FaAngleLeft />
            </button>
            <button
              ref={nextRef}
              className="bg-white shadow-lg w-10 h-10 flex items-center justify-center rounded-full text-[#B6B6B6] hover:text-black hover:bg-gray-100 cursor-pointer"
            >
              <FaAngleRight />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            slidesPerView={2.3}
            spaceBetween={24}
            onSwiper={setSwiperInstance}
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 16 },
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 2.3, spaceBetween: 24 },
            }}
            pagination={{
              clickable: true,
              el: paginationRef.current,
            }}
            className="w-full"
          >
            {dealSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[580px] object-cover rounded-lg"
                  />
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2 shadow-lg rounded-md">
                    <p className="text-[16px] text-[#484848]">
                      {slide.id} — {slide.title}
                    </p>
                    <h4 className="text-[28px] text-[#484848]">
                      {slide.discount}
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            ref={paginationRef}
            className="absolute !-bottom-8 !w-[57%] left-0 flex justify-end  "
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Deals;

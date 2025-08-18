import React, { useState } from "react";
import image16 from "../assets/image16.png";
import image17 from "../assets/image17.png";
import image18 from "../assets/image18.png";
import image19 from "../assets/image19.png";
import image20 from "../assets/image20.png";
import image21 from "../assets/image21.png";

const categories = [
  "Men's Fashion",
  "Women's Fashion",
  "Women Accessories",
  "Men Accessories",
  "Discount Deals",
];

const products = [
  {
    id: 1,
    name: "Shiny Dress",
    brand: "Al Karam",
    price: "$95.50",
    reviews: "(41k) Customer Reviews",
    status: "Almost Sold Out",
    rating: 5,
    image: image16,
  },
  {
    id: 2,
    name: "Long Dress",
    brand: "Al Karam",
    price: "$95.50",
    reviews: "(41k) Customer Reviews",
    status: "Almost Sold Out",
    rating: 5,
    image: image17 ,
  },
  {
    id: 3,
    name: "Full Sweater",
    brand: "Al Karam",
    price: "$95.50",
    reviews: "(41k) Customer Reviews",
    status: "Almost Sold Out",
    rating: 5,
    image: image18 ,
  },
  {
    id: 4,
    name: "White Dress",
    brand: "Al Karam",
    price: "$95.50",
    reviews: "(41k) Customer Reviews",
    rating: 5,
    image: image19,
  },
  {
    id: 5,
    name: "Colorful Dress",
    brand: "Al Karam",
    price: "$95.50",
    reviews: "(41k) Customer Reviews",
    status: "Almost Sold Out",
    rating: 5,
    image: image20,
  },
  {
    id: 6,
    name: "White Shirt",
    brand: "Al Karam",
    price: "$95.50",
    reviews: "(41k) Customer Reviews",
    status: "Almost Sold Out",
    rating: 5,
    image: image21 ,
  },
];

export default function NewArrivals() {
  const [activeCategory, setActiveCategory] = useState("Women's Fashion");

  return (
    <section className="max-w-[1281px] mx-auto md:pt-30 pt-10 px-4">
      <div className="text-center mb-10">
        <h2 className="text-[46px] Instagram_h1 text-[#484848]">New Arrivals</h2>
        <p className="text-[#8A8A8A] mt-2 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem, scelerisque ultrices
          sollicitudin.
        </p>
      </div>

      <div className="flex justify-center gap-10 mb-20 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-4 rounded-lg cursor-pointer shadow-sm ${
              activeCategory === cat
                ? "bg-black text-white"
                : "bg-[#FAFAFA] text-[#8A8A8A] hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl px-6 py-2 shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img src={p.image} alt={p.name} className="w-full rounded-xl object-cover" />

            <div className=" flex flex-col gap-5 py-2">
             <div className="flex justify-between  ">
                <div>
                <h3 className="text-[20px] text-[#484848]">{p.name}</h3>
              <p className="text-[12px] font-[500] text-[#8A8A8A]">{p.brand}</p>
              </div>
              <div className="flex text-2xl text-[#FCA120] ">
                {"★".repeat(p.rating)}
              </div>
             </div>

              <p className="text-[12px] font-[500] text-[#484848]">{p.reviews}</p>
              
              <div className="flex justify-between items-center">
                 <p className="text-[24px] font-[500] text-[#484848]">{p.price}</p>
                {p.status && (
                <p className="text-[12px] text-[#FF4646]">{p.status}</p>
              )}
              </div>
             
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-16">
        <button className="px-14 py-3 rounded-lg bg-black text-white cursor-pointer shadow-lg">
          View More
        </button>
      </div>
    </section>
  );
}

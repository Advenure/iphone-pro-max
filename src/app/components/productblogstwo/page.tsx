
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

type Productblogstwo = {
  id: number;
  image: string;
  name: string;
  description: string;
};

const products: Productblogstwo[] = [
  {
    id: 1,
    image: "/productblogstwo/watch galaxy.png",
    name: "Popular Products",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
  },
  {
    id: 2,
    image: "/productblogstwo/ipade.png",
    name: "Ipad Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
  },
  {
    id: 3,
    image: "/productblogstwo/sumsung.png",
    name: "Samsung Galaxy",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
  },
  {
    id: 4,
    image: "/productblogstwo/Macbook .png",
    name: "Macbook Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
  },
];

export default function ProductSlider() {
  return (
    <div className="w-full mt-10">
      {/* Mobile View - Slider */}
      <div className="block md:hidden px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="w-full max-w-sm mx-auto p-4 bg-white shadow-md rounded-xl flex flex-col items-center text-center h-full">
                <div className="w-60 h-52 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw"
                    className="object-contain"
                  />
                </div>
                <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                <button className="mt-4 px-6 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition">
                  Shop Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop/Tablet View - Flex Grid */}
      <div className="hidden md:flex justify-center gap-6 flex-wrap px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full md:w-[23%] bg-white shadow-md rounded-xl p-4 text-center flex flex-col items-center"
          >
            <div className="w-48 h-48 relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 768px) 25vw"
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-600 text-sm mt-2">{product.description}</p>
            <button className="mt-4 px-6 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

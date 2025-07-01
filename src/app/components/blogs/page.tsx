

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Computer,
  Gamepad2Icon,
  HeadphoneOffIcon,
  WatchIcon,
  Monitor,
  Phone,
  TvIcon,
} from "lucide-react";

import { useRef } from "react";

type Blog = {
  id: number;
  name: string;
  logo: JSX.Element;
};

const blogs: Blog[] = [
  {
    id: 1,
    name: "Watches",
    logo: <WatchIcon className="w-20 h-20 mx-auto" />,
  },
  {
    id: 2,
    name: "Headphones",
    logo: <HeadphoneOffIcon className="w-20 h-20 mx-auto" />,
  },
  {
    id: 3,
    name: "Cameras",
    logo: <Camera className="w-20 h-20 mx-auto" />,
  },
  {
    id: 4,
    name: "Computers",
    logo: <Computer className="w-20 h-20 mx-auto" />,
  },
  {
    id: 5,
    name: "Gaming",
    logo: <Gamepad2Icon className="w-20 h-20 mx-auto" />,
  },
  {
    id: 6,
    name: "Smartphones",
    logo: <Phone className="w-20 h-20 mx-auto" />,
  },
  {
    id: 7,
    name: "Monitors",
    logo: <Monitor className="w-20 h-20 mx-auto" />,
  },
  {
    id: 8,
    name: "Television",
    logo: <TvIcon className="w-20 h-20 mx-auto" />,
  },
];

export default function BlogSection01() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="mt-14 w-full">
      <div className="w-full px-4 md:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Latest Blogs</h2>
          <div className="flex gap-4">
            <button ref={prevRef} className="p-2 border rounded-full">
              <ArrowLeft />
            </button>
            <button ref={nextRef} className="p-2 border rounded-full">
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="mt-10">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              // @ts-expect-error: Swiper types do not allow dynamic refs directly, but they work
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error: Swiper types do not allow dynamic refs directly, but they work
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="bg-[#EDEDED] text-center p-4 rounded-lg shadow-md hover:bg-gray-600 hover:text-white transition duration-300">
                  <div>{blog.logo}</div>
                  <h3 className="mt-4 text-lg font-bold">{blog.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

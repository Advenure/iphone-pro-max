

"use client";

import Image from "next/image";

export default function HeroSectionBlogs() {
  return (
    // Parent container
    <div className="w-full min-h-[60vh] bg-blue-300 flex flex-col md:grid grid-cols-2">
      {/* Left Column */}
      <div className="flex flex-col">
        {/* Blog One */}
        <div className="justify-center items-center pt-6 bg-white md:flex space-x-7">
          <Image
            src="/PlayStation.png"
            alt="PlayStation"
            width={300}
            height={380}
            className="mb-4 mt-4 md:h-60"
          />
          <div className="text-center">
            <h2 className="text-2xl text-[#232222] md:flex justify-center">
              Apple Vision{" "}
              <span className="text-2xl font-bold text-[#232222] ml-2">
                Pro
              </span>
            </h2>
            <p className="text-[#909090] mb-6 px-3 mt-2 text-sm lg:text-xl">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>

        {/* Bottom Grid Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Blog Two */}
          <div className="pt-6 bg-[#EDEDED] text-center">
            <Image
              src="/handsphone.png"
              alt="AirPods Max"
              width={180}
              height={220}
              className="mb-4 mx-auto"
            />
            <h2 className="text-2xl">
              Apple AirPods <span className="font-bold">Max</span>
            </h2>
            <p className="text-[#909090] mb-4 mt-2">
              Computational audio. Listen, it&apos;s powerful
            </p>
          </div>

          {/* Blog Three */}
          <div className="pt-6 bg-[#353535] text-center">
            <Image
              src="/applevisionpr0.png"
              alt="Apple Vision"
              width={300}
              height={380}
              className="mb-4 mt-4 mx-auto"
            />
            <h2 className="text-2xl text-white">
              PlayStation <span className="font-bold">5</span>
            </h2>
            <p className="text-[#909090] mb-6 mt-2">
              An immersive way to experience entertainment
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="bg-[#EDEDED] text-center md:pt-20 flex flex-col items-center">
        <Image
          src="/MacBook Pro 14.png"
          alt="MacBook Pro"
          width={450}
          height={420}
          className="mb-4 mt-4 lg:w-[50%]"
        />
        <h2 className="text-2xl font-bold text-[#232222]">
          MacBook <span className="text-[#232222]">Air</span>
        </h2>
        <p className="text-[#909090] mb-6 mt-2 px-8 text-sm lg:text-lg">
          The new 15‑inch MacBook Air makes room for more of what you love with
          a spacious Liquid Retina display.
        </p>
        <button className="border border-black px-10 py-3 text-md rounded-md font-bold mb-4">
          Shop Now
        </button>
      </div>
    </div>
  );
}

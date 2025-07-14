import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-wrap mt-0 mb-0 bg-[#211C24] w-full md:flex">
      {/* Text Section */}
      <div className="w-full md:w-[60%] h-[60vh] flex flex-col justify-center items-center text-center px-4">
        <h3 className="text-[#949191] text-2xl md:text-3xl">Pro.Beyond.</h3>

        <h1 className="text-[#FFFFFF] text-6xl md:text-7xl lg:text-8xl font-semibold">
          iPhone 14 <span className="block text-7xl font-bold lg:text-9xl">Pro</span>
        </h1>

        <p className="text-[#949191] text-[20px] md:text-[24px] mt-2 max-w-xl">
          Created to change everything for the better. For everyone
        </p>

        <button className="px-16 mt-9 py-4 text-white text-[16px] rounded-md focus:outline-none border border-white">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[40%] flex justify-center items-center h-[60vh]">
        <Image
          src="/heroSection.png"
          alt="iPhone"
          width={800}
          height={400}
          className="h-[50vh] w-[60vh] px-5 object-contain"
        />
      </div>
    </div>
  );
}


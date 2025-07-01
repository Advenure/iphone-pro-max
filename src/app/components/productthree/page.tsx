

"use client";

import Image from "next/image";

type ProductType = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
};

const products: ProductType[] = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro Max",
    description: "128GB Deep Purple",
    image: "/productthree/silver.png",
    price: "$900",
  },
  {
    id: 2,
    name: "Blackmagic Pocket Cinema",
    description: "Camera 6k",
    image: "/productthree/pick.png",
    price: "$2535",
  },
  {
    id: 3,
    name: "Apple Watch Series 9 GPS",
    description: "41mm Starlight Aluminium",
    image: "/productthree/gray.png",
    price: "$399",
  },
  {
    id: 4,
    name: "AirPods Max Silver",
    description: "Starlight Aluminium",
    image: "/productthree/white.png",
    price: "$549",
  },
];

export default function ProductThree() {
  return (
    <section className="w-full py-8">
      <h2 className="text-3xl font-bold text-red-500 pl-5">
        Discounts up to -50%
      </h2>
      <hr className="my-4 border-gray-300" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 px-5 md:px-20 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#F6F6F6] rounded-lg shadow-md p-4 text-center hover:-translate-y-1 hover:scale-105 transition duration-300"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={150}
              className="mx-auto mb-4"
            />
            <h1 className="font-bold text-lg">{product.name}</h1>
            <h3 className="text-sm text-gray-600 mt-1">{product.description}</h3>
            <h2 className="font-bold text-gray-700 text-xl mt-2">{product.price}</h2>
            <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}



"use client";

import Image from "next/image";

type ProductOneType = {
  id: number;
  image: string; // ✅ not `any`
  name: string;
  description: string;
  price: string;
};

const products: ProductOneType[] = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro Max",
    description: "128GB Deep Purple",
    image: "/productblogs/Iphone 14 pro 1.png",
    price: "$900",
  },
  {
    id: 2,
    name: "Blackmagic Pocket Cinema",
    description: "Camera 6k",
    image: "/productblogs/Iphone 14 pro 1 (1).png",
    price: "$2535",
  },
  {
    id: 3,
    name: "Apple Watch Series 9 GPS",
    description: "41mm Starlight Aluminium",
    image: "/productblogs/Iphone 14 pro 1 (6).png",
    price: "$399",
  },
  {
    id: 4,
    name: "AirPods Max Silver",
    description: "Starlight Aluminium",
    image: "/handsphone.png",
    price: "$549",
  },
  {
    id: 5,
    name: "Samsung Galaxy Watch6",
    description: "Classic 47mm Black",
    image: "/productblogs/Iphone 14 pro 1 (3).png",
    price: "$369",
  },
  {
    id: 6,
    name: "Samsung Galaxy Watch6",
    description: "Classic 47mm Black",
    image: "/productblogs/Iphone 14 pro 1 (7).png",
    price: "$369",
  },
  {
    id: 7,
    name: "Samsung Galaxy Watch6",
    description: "Classic 47mm Black",
    image: "/productblogs/Iphone 14 pro 1 (4).png",
    price: "$369",
  },
  {
    id: 8,
    name: "Samsung Galaxy Watch6",
    description: "Classic 47mm Black",
    image: "/productblogs/Iphone 14 pro 1 (5).png",
    price: "$369",
  },
];

export default function ProductOne() {
  return (
    <section className="w-full py-8">
      <h2 className="text-3xl font-bold text-red-500 pl-5">View Product</h2>
      <hr className="my-4 border-gray-300" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-10 px-5 md:px-20 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#F6F6F6] rounded-lg shadow-md p-4 hover:-translate-y-1 hover:scale-105 transition duration-300 text-center"
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

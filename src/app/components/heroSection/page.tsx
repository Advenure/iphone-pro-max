import Image from "next/image"
export default function HeroSection (){
    return (
        <div className="flex flex-wrap mt-0 mb-0 bg-[#211C24] md::w-full md:flex ">
 
            {/* sentax box */}
            <div className="mt-5 place-content-center place-items-center w-full md:block h-[60vh] md:place-items-center md:w-[60%]  ">
                <h3 className=" text-[#949191] text-2xl md:flex md:text-3xl">Pro.Beyond.</h3>
        
                <h1 className=" text-[#FFFFFF] text-6xl grid grid-cols-1 place-items-center md:flex md:text-7xl lg:flex lg:text-8xl">IPhone 14 <span className="text-7xl font-bold lg:flex lg:text-9xl ">Pro</span></h1>
                <p className=" text-[#949191] text-[22px] text-center pl-5  mt-2  md:flex text[32px] ">Created to change everything for the better. For everyone</p>
           <button className="px-16 mt-9 py-4 text-[#FFFFFF] text-[16px] rounded-md focus:outline-none border border-white items-center justify-center">Shop Now</button>
            </div>
           {/* image section */}
            <div className="w-full md:w-[40%] flex justify-center items-center h-[60vh] ">
              <Image src={"/heroSection.png"} alt="image" width={800} height={400} className="h-[50vh] w-[60vh] px-5 lg:flex lg:w-[70vh] "></Image>  
            </div>


        </div>
    )
}

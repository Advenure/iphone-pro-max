
export default function HeroSectionLast () {
    return (
        <div className="bg-[url('/lastmobile.png')] bg-cover bg-center h-[75vh] w-full md:bg-[url('/lastherosection.png')] md:bg-cover md:bg-center md:w-full md:h-[50vh] mt-2 flex justify-center items-center">
            <div className="flex flex-col items-center justify-center w-full px-3">
                <h1 className="text-6xl text-center md:text-7xl text-[#FFFFFF]">
                    Big Summer <span className="text-6xl md:text-8xl font-bold text-[#FFFFFF]">Sale</span>
                </h1>
                <p className="text-xl text-center md:text-2xl text-[#787878] mt-2">
                    Commodo fames vitae vitae leo mauris in. Eu consequat.
                </p>
                <button className="px-16 mt-4 py-4 text-lg md:mt-2 md:px-20 md:py-5 md:text-2xl font-semibold rounded-md border border-white text-white focus-none mx-auto">
                    Shop Now
                </button>
            </div>
        </div>
    );
}

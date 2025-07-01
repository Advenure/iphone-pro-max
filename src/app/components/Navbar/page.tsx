"use client"
import {  Heart, MenuIcon, Search, ShoppingBag, User, X , Home, BookOpenText, Info } from "lucide-react";
import React,{useState} from "react";
import Link from "next/link";

export default function Navbaar(){
const [isOpen,setIsOpen] = useState(false)
const mobile = ()=> setIsOpen (!isOpen) 
return(
     
<main className="w-full text-black  z-50 ">
    <div className="justify-between px-2 py-5 items-center flex md:flex md:justify-evenly ">
        {/* logo */}
        <h1 className="text-1xl md:flex text-2xl font-semibold lg:flex lg:text-3xl">cyber</h1>
        {/* serach sentex */}
         <div className="hidden md:flex relative "> 
    <input type="text" id="text" placeholder="Serach...." className="pl-10 pr-4 py-2 rounded-lg bg-[#F5F5F5] focus:outline-none"/>
    <Search className="left-3 mt-2.5 absolute w-5 h-6 "/>
        </div>
        {/* menubar */}
       <ul className="hidden md:flex md:space-x-4 lg:space-x-6 lg:flex">
       <Link href={"/"}><li className="text-xl font-sans text-[#a69a9a] hover:text-black">Home</li></Link> 
      <Link href={"contact"}>  <li className="text-xl font-sans text-[#a69a9a] hover:text-black">Contact</li></Link>
        <Link href={"allblogs"}> <li className="text-xl font-sans text-[#a69a9a] hover:text-black">Blogs</li></Link>
       </ul>
       {/* icon import */}
       <div className="hidden md:flex space-x-6">
        <Heart size={24}/>
        <ShoppingBag size={24}/>
        <User size={24}/>
       </div>
       {/* onclick button apply */}
        <button onClick={mobile}>{isOpen ? <X size={28}/>: <MenuIcon size={28} className="text-black md:hidden" /> }</button>
    </div>
{/* mobile section  */}
    {isOpen && (
       <nav className="bg-[#121e31] h-50 fixed top-0 left-0 min-w-[250px] py-6 px-4 overflow-auto">
      <ul className="space-y-3 mt-4">
        <li>
          <Link
            href="/"
            className="text-white text-[15px] font-normal flex items-center hover:bg-gray-700 rounded px-4 py-2 transition-all"
          >
            <Home className="w-[18px] h-[18px] mr-3" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="allblogs"
            className="text-white text-[15px] font-normal flex items-center hover:bg-gray-700 rounded px-4 py-2 transition-all"
          >
            <BookOpenText className="w-[18px] h-[18px] mr-3" />
            <span>Blogs</span>
          </Link>
        </li>
        <li>
          <Link
            href="contact"
            className="text-white text-[15px] font-normal flex items-center hover:bg-gray-700 rounded px-4 py-2 transition-all"
          >
            <Info className="w-[18px] h-[18px] mr-3" />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>

       
    )}


</main>
   
)
}
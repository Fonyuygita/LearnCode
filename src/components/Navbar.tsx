
"use client"

import Image from "next/image";
import Link from "next/link";

import NavLogic from "./NavLogic";


const Navbar=()=>{
   
   


     


    return(
  <nav className="flex-center fixed top-0 z-50 w-full border-b-2 bg-black-100 border-black-200 py-7 text-white e">
    <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
        <Image src="/logoo.png" alt="logo" width={60} height={50} className="border border-white border-[50%] rounded-full"/>
        </Link>
      
    <NavLogic/>
    </div>
  </nav>
    )
}

export default Navbar
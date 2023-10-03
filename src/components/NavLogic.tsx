import Link from "next/link"

import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";


const NavLogic = () => {
    const [open, setOpen] = useState(false)
    const { userId } = useAuth();
    const { isLoaded, isSignedIn, user } = useUser();


    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return (
        <>

            <button className="outline-none" onClick={() => setOpen(!open)}>
                {!open ? (<Image src="/hamburger-menu.svg" width={30} height={30} alt="hamburger" className="block md:hidden" />) :
                    (<Image src="/close.svg" width={30} height={30} alt="close" className="block md:hidden" />)

                }
            </button>
            <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
                {isSignedIn && (

                    <li className="body-text text-gradient_blue-purple font-bold">
                        <div className="flex flex-center justify-between px-2 gap-[2px]">
                            <Link href="/">{user.firstName}</Link>
                            <Link href="/">
                                <UserButton afterSignOutUrl="/" />
                            </Link>
                        </div>


                    </li>

                )}


                <li className="body-text font-bold">
                    <Link href="/contact">Contact</Link>

                </li>

                <li className="body-text text-gradient_blue-purple font-bold">

                    <Link href="/about">About</Link>
                </li>
            </ul>


            <ul className={`flex-center gap-x-3  md:gap-x-10 md:hidden flex-col bg-black-100 h-[300px] w-full absolute top-[120px] gap-6 left-3 right-3 transition duration-500 ease-in-out transform border-b-2 border-black-200 ${open ? 'translate-x-0' : '-translate-x-full'} `}>
                {isSignedIn && (

                    <li className="body-text text-gradient_blue-purple font-bold  border-b-2 border-black-200 " onClick={() => setOpen(false)}>
                        <div className="flex flex-center justify-between px-2 gap-[2px]">
                            <Link href="/">{user.firstName}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 transition-transform duration-500 ease-in-out"></div>
                            </Link>
                            <Link href="/ ">
                                <UserButton afterSignOutUrl="/" />
                            </Link>

                        </div>


                    </li>

                )}
                <li className="body-text font-bold border-b-2 border-black-200" onClick={() => setOpen(false)}>
                    <Link href="/contact" className=" py-2 relative">Contact
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 transition-transform duration-500 ease-in-out"></div>
                    </Link>

                </li>

                <li className="body-text text-gradient_blue-purple font-bold border-b-2 border-black-200" onClick={() => setOpen(false)}>

                    <Link href="/about">About
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 transition-transform duration-500 ease-in-out"></div>
                    </Link>
                </li>

            </ul>
        </>
    )
}

export default NavLogic
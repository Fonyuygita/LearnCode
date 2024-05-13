
"use client"
import React, { useRef, useState } from "react";
import { useSearchParams, useRouter } from 'next/navigation'
import { formUrlQuery } from "../../sanity/utils";

const links = ['all', 'Next 13', 'frontend', 'backend', 'fullstack', 'React Native', 'c programming', 'Mathematics', 'Computer Science Concepts', 'Virtual Reality', 'Machine Learning', 'presentations','inspiration']


const Filter=()=>{
    const [active, setActive] = useState('');
    const searchParms = useSearchParams();
    const elementRef=useRef(null);
  const router = useRouter();


    const handleFilter=(link:string)=>{
      let newUrl = '';
    
      if(active === link) {
        setActive('');
  
        newUrl = formUrlQuery({
          params: searchParms.toString(),
          keysToRemove: ['category'],
        })
      } else {
        setActive(link);
  
        newUrl = formUrlQuery({
          params: searchParms.toString(),
          key: 'category',
          value: link.toLowerCase(),
        })
      }
      
      router.push(newUrl, { scroll: false });
       
    }

    
    const slideRight=(element:any)=>{
      element.scrollLeft+=200;
  }
  const slideLeft=(element:any)=>{
      element.scrollLeft-=200;
  }

    return (

            <>
       

        <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl overflow-scroll overflow-x-auto scrollbar-hide scroll-smooth"  ref={elementRef}>
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleFilter(link)}
              className={`${
                active === link ?"gradient_blue-purple" : ""
              } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
            >
              {link}
            </button>
          ))}
        </ul>
        <span className="flex flex-center justify-between gap-3 mt-[-12px]">
            <svg xmlns="http://www.w3.org/2000/svg"  
            fill="none" viewBox="0 0 24 24" 
            onClick={()=>slideLeft(elementRef.current)} 
            strokeWidth={1.5} stroke="currentColor" 
            className="w-8 h-8 bg-[#222] cursor-pointer p-1 rounded-full text-white  rotate-180">
            <path strokeLinecap="round" 
            strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>  
            <svg xmlns="http://www.w3.org/2000/svg"
            onClick={()=>slideRight(elementRef.current)} 
            fill="none" viewBox="0 0 24 24" 
            strokeWidth={1.5} stroke="currentColor" 
            className="w-8 h-8 bg-[#222] cursor-pointer p-1 rounded-full text-white">
            <path strokeLinecap="round" 
            strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            </span>
        </>
      )
}

export default Filter
import React from "react"
import {
    Card,
    CardContent,

   
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";
  


interface Props{
  
    title:string;
    image:string;
    
}

const SeedResourceCard=({title, image}:Props)=>{
    return(
        <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
        <Link href="/resources">
          <CardHeader className="flex-center flex-col gap-2.5 !p-0">
            <div className="h-fit w-full">
              <Image 
                src="/seed.png"
                className="h-full rounded-md object-cover"
                width={384}
                height={440}
                alt={title}
              />
            </div>
            <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>
          </CardHeader>
        </Link>
        
      </Card>
    )
}

export default SeedResourceCard
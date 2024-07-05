import React from "react"
import {
  Card,
  CardContent,


  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";



interface Props {

  title: string;
  image: string;

}

const SeedResourceCard = ({ title, image }: Props) => {
  return (
    <Card className="w-full max-w-fit border-0 bg-[#17181a] p-2 shadow-2xl sm:max-w-[356px]">
      <Link href="/resources">
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div className="h-[200px] w-full">
            <Image
              src={image}
              className="w-full h-full rounded-md object-contain"
              width={384}
              height={440}
              alt={title}
            />
          </div>
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>
          <Link href="#" className="flex items-center justify-start text-gradient_purple-blue body-semibold gap-1.5">
            Check Now
            <Image src="/arrow-blue.svg" width={13} height={10} alt="arrow" />
          </Link>
        </CardHeader>
      </Link>

    </Card>
  )
}

export default SeedResourceCard
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from 'react'
import Autoplay from "embla-carousel-autoplay";
import { $Enums } from "@prisma/client";

interface IAprops{
    id: string,
    name: string,
    price: number,
    currency: string,
    smallDescription: string,
    images: string[],
    category: $Enums.categoryTypes
}

function ImageCarousel({data}: {data: IAprops}) {
    const plugin = React.useRef(
    Autoplay({ delay: 3000,})
  )
  return (
    (<Carousel
      className="w-full mx-auto rounded-lg"
      opts={{
        loop: true,
      }}
      plugins={[plugin.current]}
    >
      <div className="absolute w-full -left-48 -top-24 shadow-xl rounded-lg dark:drop-shadow-2xl cursor-grab bg-[#F97316]">
        <CarouselContent className="rounded-lg">
          {data.images.map((image, index) => (
            <CarouselItem key={index} className="rounded-lg">
              <div className="h-[250px] relative">
                <Image
                  src={image}
                  className="rounded-lg"
                  alt="product"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover"
                  }} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
    </Carousel>)
  );
}

export default ImageCarousel

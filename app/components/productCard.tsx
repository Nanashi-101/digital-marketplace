/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { categoryTypes } from "@prisma/client";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface IAppProps {
  id:string;
  name: string;
  price: number;
  currency: string;
  smallDescription: string;
  images: string[];
}

function ProductCard({
  images,
  name,
  currency,
  smallDescription,
  price,
  id
}: IAppProps) {
  return (
    <div className="rounded-lg">
      <Carousel
        className="w-full mx-auto"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="h-[230px] relative">
                <Image
                  src={image}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  alt="product"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>
      <div className="flex justify-between items-center mt-2">
        <h1 className="font-semibold text-xl">{name}</h1>
        <h3 className="inline-flex rounded-md bg-primary/10 px-2 py-1 text-primary ring-1 ring-inset ring-primary/10 text-xs font-medium">
          {currency} {price}
        </h3>
      </div>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
        {smallDescription}
      </p>

      <Button
        asChild
        className="w-full mt-5 transition-all ease-in hover:scale-105"
      >
        <Link href={`/product/${id}`} className="text-xl">
          Learn more{" "}
          <SquareArrowOutUpRight
            size={20}
            className="ml-2"
          />
        </Link>
      </Button>
    </div>
  );
}

export default ProductCard;

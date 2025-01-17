
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { categoryTypes } from "@prisma/client";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
interface IAppProps {
  id: string;
  name: string;
  price: number;
  currency: string;
  smallDescription: string;
  images: string[];
  category: categoryTypes;
}

export function ProductCard({
  images,
  name,
  currency,
  smallDescription,
  price,
  id,
  category,
}: IAppProps) {
  return (
    <div className="rounded-lg shadow-lg p-2 dark:border ">
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
                  sizes="100vw"
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
      <Badge variant={"default"} className="uppercase my-2 dark:bg-primary">{category}</Badge>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
        {smallDescription}
      </p>

      <Button
        asChild
        className="w-[90%] mx-auto flex items-center justify-center mt-5 mb-4 transition-all ease-in hover:scale-105 hover:drop-shadow-xl"
      >
        <Link href={`/product/${id}`} className="text-xl">
          Learn more <SquareArrowOutUpRight size={20} className="ml-2"/>
        </Link>
      </Button>
    </div>
  );
}

export function LoadingProductCard(){
  return (
    <div className="flex flex-col">
      <Skeleton className="w-full h-[230px] rounded-lg" />
      <div className="flex-flex-col gap-y-2">
        <Skeleton className="h-4 w-full"/>
        <Skeleton className="h-6 w-full"/>
      </div>
      <Skeleton className="h-10 mt-5 w-full"/>
    </div>
  );
}
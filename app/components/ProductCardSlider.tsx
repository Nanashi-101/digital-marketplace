import React from "react";
import prisma from "../lib/db";
import DynamicProductCard from "./ProdDynamicCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Dot, DotIcon } from "lucide-react";

const getProductData = async () => {
  const data = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      currency: true,
      smallDescription: true,
      images: true,
      category: true,
    },
  });
  return data;
};
async function ProductCardSlider() {
  const data = await getProductData();
  return (
    <>
      <Carousel
        className="w-full mx-auto rounded-lg"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="">
          {data.map((product, index) => (
            <CarouselItem key={index} className="py-5 mt-5">
              <DynamicProductCard {...product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* <div className="flex max-w-md -translate-y-[6.5rem] mx-auto text-center">
        <div className="w-1/2 mx-auto translate-x-10 flex gap-2 items-center justify-center px-4">
          {data.map((_, index) => (
            <div key={index} className="w-[0.8rem] h-[0.8rem] bg-[#f97316] rounded-full border border-black"/>
          ))}
        </div>
      </div> */}
    </>
  );
}

export default ProductCardSlider;

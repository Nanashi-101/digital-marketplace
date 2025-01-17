"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import * as motion from "motion/react-client";
import prisma from "../lib/db";
import ImageCarousel from "./ImageCarousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { $Enums } from "@prisma/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useReducer } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/legacy/image";

interface IAprops {
  id: string;
  name: string;
  price: number;
  currency: string;
  smallDescription: string;
  images: string[];
  category: $Enums.categoryTypes;
}

function DynamicProductCard(data: IAprops) {
  return (
    <>
      <motion.div
        className="hidden md:block relative max-w-2xl w-full ml-[20rem]  pb-16 sm:pb-none md:px-8 md:mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.3 }}
      >
        <DynamicProductCardAllScreen prodData={data} />
      </motion.div>
      <motion.div
        className="block md:hidden relative w-full mx-auto pb-16 sm:pb-none md:px-8 md:mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.3 }}
      >
        <DynamicProductCardMobileScreen prodData={data} />
      </motion.div>
    </>
  );
}

function DynamicProductCardMobileScreen({ prodData }: { prodData: IAprops }) {
  const plugin = React.useRef(Autoplay({ delay: 3000 }));
  return (
    <div>
      <Card className="shadow-2xl p-2 border dark:shadow-2xl dark:shadow-[#F97316] dark:drop-shadow-xl rounded-sm">
        <CardContent className="grid grid-cols-1 grid-rows-3 items-center justify-center gap-1 py-10 px-1">
          <div className="w-[350px] rounded-lg flex flex-col items-center justify-center mx-auto">
            <Carousel
              className="w-full mx-auto rounded-lg"
              opts={{
                loop: true,
              }}
              plugins={[plugin.current]}
            >
              <CarouselContent className="rounded-lg">
                {prodData.images.map((image, index) => (
                  <CarouselItem key={index} className="rounded-lg">
                    <div className="h-[250px] relative">
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
            </Carousel>
          </div>
          <motion.div
            className="flex flex-col gap-4 px-4"
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.1, delay: 0.4, type: "spring" }}
          >
            <h1 className="text-3xl font-bold text-primary">{prodData.name}</h1>
            <div className="flex uppercase items-center justify-start gap-5">
              <div className="w-[5px] h-[30px] bg-[#F97316] rounded-lg" />
              <p className="text-xl font-bold">
                {prodData.price} {prodData.currency}
              </p>
              <Badge>{prodData.category}</Badge>
            </div>
            <p className="text-md line-clamp-6 font-semibold text-muted-foreground dark:text-muted-foreground">
              {prodData.smallDescription}
            </p>
          </motion.div>
          <motion.div
            className=""
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, type: "spring" }}
          >
            <Button className="w-[230px] mx-auto text-center transition-all ease-in hover:scale-105 text-xl">
              Buy Now
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}

function DynamicProductCardAllScreen({ prodData }: { prodData: IAprops }) {
  const handleNext = () => {
    const elem = document.getElementById("next-btn");
    if (elem) {
      elem.click();
    }
  };

  const handlePrev = () => {
    const elem = document.getElementById("prev-btn");
    if (elem) {
      elem.click();
    }
  };
  return (
    <>
      <motion.div
        className="bg-[#ff8e47] absolute rounded-full -left-[8rem] top-10 w-[15.75rem] h-[15.75rem] blur-[4rem] dark:hidden"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.1, delay: 0.4 }}
      />
      <Card
        className={`relative shadow-2xl p-2 border dark:shadow-2xl dark:shadow-[#F97316] dark:drop-shadow-xl rounded-sm`}
      >
        <CardContent className="grid grid-cols-3 items-center justify-center gap-5 py-10 px-1">
          <motion.div
            className="col-span-1 w-[350px] rounded-lg flex flex-col items-center justify-center mx-auto gap-3"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.1, delay: 0.4, type: "spring" }}
          >
            <ImageCarousel data={prodData} />
            <motion.div
              className="absolute -left-[3rem] top-[18.5rem] w-[100px] h-2 bg-[#F97316] rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 1.5 }}
            />
          </motion.div>
          <motion.div
            className="flex flex-col gap-8 col-span-2"
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.1, delay: 0.4, type: "spring" }}
          >
            <h1 className="text-5xl font-extrabold text-primary">
              {prodData.name}
            </h1>
            <div className="flex uppercase items-center justify-start gap-5">
              <div className="w-[5px] h-[30px] bg-[#F97316] rounded-lg" />
              <p className="text-2xl font-bold">
                {prodData.price} {prodData.currency}
              </p>
              <Badge>{prodData.category}</Badge>
            </div>
            <p className="text-lg line-clamp-3 font-semibold text-muted-foreground dark:text-muted-foreground">
              {prodData.smallDescription}
            </p>
          </motion.div>
        </CardContent>
      </Card>
      <motion.div
        className="absolute bottom-[1.5rem] right-[34%] top-[18.95rem]"
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay: 0.4, type: "spring" }}
      >
        <Button className="w-[230px] transition-all ease-in hover:scale-105 h-12 text-xl">
          Buy Now
        </Button>
      </motion.div>
      <div className="absolute -top-[1.69rem] right-16 flex gap-2 p-2">
        <motion.span
          className="bg-[#F97316] rounded-sm p-1 text-white cursor-pointer"
          initial={{ x: -30 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.1, delay: 0.4, type: "spring" }}
          onClick={handlePrev}
        >
          <ArrowLeft size={32} />
          <CarouselPrevious className="hidden" size="icon" id="prev-btn" />
        </motion.span>
        <motion.span
          className="bg-[#F97316] rounded-sm p-1 text-white cursor-pointer"
          initial={{ x: 30 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.1, delay: 0.4, type: "spring" }}
          onClick={handleNext}
        >
          <ArrowRight size={32} />
          <CarouselNext className="hidden" size="icon" id="next-btn" />
        </motion.span>
      </div>
    </>
  );
}

export default DynamicProductCard;

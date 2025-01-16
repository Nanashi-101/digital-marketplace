"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import * as motion from "motion/react-client";
import prisma from "../lib/db";
import ImageCarousel from "./ImageCarousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { $Enums } from "@prisma/client";
import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface IAprops{
    id: string,
    name: string,
    price: number,
    currency: string,
    smallDescription: string,
    images: string[],
    category: $Enums.categoryTypes
}

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
}

function DynamicProductCard(data: IAprops) {
  return (
    <motion.div
      className="relative max-w-2xl w-full ml-[20rem]  pb-16 sm:pb-none md:px-8 md:mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1, delay: 0.3 }}
    >
      <motion.div
        className="bg-[#ff8e47] absolute rounded-full -left-[8rem] top-10 w-[15.75rem] h-[15.75rem] blur-[4rem] dark:hidden"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.1, delay: 0.4 }}
      />
      <Card
        className={`relative shadow-2xl p-2 border dark:shadow-2xl dark:shadow-[#F97316] dark:drop-shadow-xl rounded-sm`}
      >
        <CardContent className="grid grid-cols-3 items-center justify-center gap-5 py-10 px-1">
          <motion.div
            className="col-span-1 w-[350px] rounded-lg flex flex-col items-center justify-center mx-auto gap-3"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.1, delay: 0.4, type: "spring" }}
          >
            <ImageCarousel data={data} />
            <motion.div
              className="absolute -left-[3rem] top-[18.5rem] w-[100px] h-2 bg-[#F97316] rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 1.5 }}
            />
          </motion.div>
          <motion.div
            className="flex flex-col gap-8 col-span-2"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.1, delay: 0.4, type: "spring" }}
          >
            <h1 className="text-5xl font-extrabold text-primary">
              {data.name}
            </h1>
            <div className="flex uppercase items-center justify-start gap-5">
              <div className="w-[5px] h-[30px] bg-[#F97316] rounded-lg" />
              <p className="text-2xl font-bold">
                {data.price} {data.currency}
              </p>
              <Badge>{data.category}</Badge>
            </div>
            <p className="text-lg line-clamp-3 font-semibold text-muted-foreground dark:text-muted-foreground">
              {data.smallDescription}
            </p>
          </motion.div>
        </CardContent>
      </Card>
      <motion.div
        className="absolute bottom-[1.5rem] right-[34%] top-[18.95rem]"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay: 0.4, type: "spring" }}
      >
        <Button
          className="w-[230px] transition-all ease-in hover:scale-105 h-12 text-xl"
        >
          Buy Now
        </Button>
      </motion.div>
      <div className="absolute -top-[1.69rem] right-16 flex gap-2 p-2">
        <motion.span
          className="bg-[#F97316] rounded-sm p-1 text-white cursor-pointer"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.1, delay: 0.4, type: "spring" }}
          onClick={handlePrev}
        >
          <ArrowLeft size={32} />
          <CarouselPrevious
            className="hidden bg-[#F97316] rounded-sm p-1 text-white -left-[2rem]"
            size="icon"
            id="prev-btn"
          />
        </motion.span>
        <motion.span
          className="bg-[#F97316] rounded-sm p-1 text-white cursor-pointer"
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.1, delay: 0.4, type: "spring" }}
          onClick={handleNext}
        >
          <ArrowRight size={32} />
          <CarouselNext
            className="hidden bg-[#F97316] rounded-sm p-1 text-white right-[4.5rem] text-xl"
            size="icon"
            id="next-btn"
          />
        </motion.span>
      </div>
    </motion.div>
  );
}

export default DynamicProductCard;

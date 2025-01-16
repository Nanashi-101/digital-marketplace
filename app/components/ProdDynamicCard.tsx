import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import * as motion from "motion/react-client";
import prisma from "../lib/db";
import ImageCarousel from "./ImageCarousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

async function DynamicProductCard() {
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
  return (
    <motion.div
      className="relative max-w-2xl w-full mx-auto  pb-16 sm:pb-none md:px-8 md:mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1, delay: 0.3 }}
    >
      <Card className="relative shadow-2xl p-2 border dark:shadow-2xl dark:shadow-[#F97316] dark:drop-shadow-xl rounded-sm">
        <CardContent className="grid grid-cols-3 items-center justify-center gap-5 py-10 px-1">
          <motion.div
            className="col-span-1 w-[350px] rounded-lg"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.1, delay: 0.4, type: "spring" }}
          >
            <ImageCarousel data={data[3]} />
          </motion.div>
          <motion.div
            className="flex flex-col gap-8 col-span-2"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.1, delay: 0.4, type: "spring" }}
          >
            <h1 className="text-5xl font-extrabold text-primary">
              {data[3].name}
            </h1>
            <div className="flex uppercase items-center justify-start gap-5">
              <p className="text-2xl font-bold">
                {data[3].price} {data[3].currency}
              </p>
              <Badge>{data[3].category}</Badge>
            </div>
            <p className="text-lg line-clamp-3 font-semibold text-muted-foreground dark:text-muted-foreground">
              {data[3].smallDescription}
            </p>
          </motion.div>
          <div className="absolute top-2 right-3 flex gap-2 p-2">
            <span className="bg-[#F97316] rounded-full p-1 text-white">
              <ArrowLeft />
            </span>
            <span className="bg-[#F97316] rounded-full p-1 text-white">
              <ArrowRight />
            </span>
          </div>
        </CardContent>
      </Card>
      <motion.div
        className="absolute bottom-[1.5rem] right-[34%] top-[18.95rem]"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay: 0.4, type: "spring" }}
      >
        <Button className="w-[230px] transition-all ease-in hover:scale-105 h-12 text-xl">
          Buy Now
        </Button>
      </motion.div>
    </motion.div>
  );
}

export default DynamicProductCard;

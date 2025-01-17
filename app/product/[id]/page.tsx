
import { BuyProduct } from "@/app/actions";
import ProductDescription from "@/app/components/productDescription";
import { BuyButton } from "@/app/components/SubmitButton";
import prisma from "@/app/lib/db";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { type JSONContent } from "@tiptap/react";
import Image from "next/legacy/image";
import { unstable_noStore as noStore } from "next/cache";

async function getProduct(id: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      price: true,
      currency: true,
      smallDescription: true,
      description: true,
      images: true,
      category: true,
      createdAt: true,
      User: {
        select: {
          profileImage: true,
          firstName: true,
        },
      },
    },
  });

  return data;
}

async function ProductIdPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  noStore();
  const data = await getProduct(params.id);
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 lg:grid lg:grid-row-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16 mb-16">
      <Carousel
        className="lg:row-end-1 lg:col-span-4"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {data?.images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-w-3 aspect-h-[2.5] rounded-lg bg-gray-100 overflow-hidden">
                <Image
                  src={image as string}
                  alt={data.name}
                  layout="fill"
                  objectFit="cover"
                  className="shadow-xl rounded-lg w-full h-full"
                  sizes="100vw"
                  quality={100}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>
      <div className=" w-full px-4 mx-auto mt-5 lg:row-span-1 lg:max-w-none lg:mt-0 lg:col-span-3 ">
        <h1 className="text-2xl font-extrabold roboto tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
          {data?.name}
        </h1>
        <p className="line-clamp-2 font-semibold mt-4 text-muted-foreground">
          {data?.smallDescription}
        </p>
        <form action={BuyProduct}>
          <input type="hidden" name="id" value={data?.id}/>
          <BuyButton price={data?.price as number} currency={data?.currency as string}/>
        </form>

        <div className="border-t border-gray-200 mt-6 pt-6">
          <div className="grid grid-cols-2 w-full gap-y-3">
            <h3 className="text-sm text-muted-foreground col-span-1 roboto-700">
              Released:{" "}
            </h3>
            {/* This is how to make a proper date for the UI */}
            <h3 className="text-sm text-muted-foreground col-span-1 font-semibold roboto-900">
              {new Intl.DateTimeFormat("en-US", {
                dateStyle: "long",
              }).format(data?.createdAt)}
            </h3>
            <h3 className="text-sm text-muted-foreground col-span-1 roboto-700">
              Category:{" "}
            </h3>
            <h3 className="text-sm text-muted-foreground col-span-1 font-semibold roboto-900">
              <Badge variant={"default"} className="capitalize my-2">
                {data?.category}
              </Badge>
            </h3>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-4 pt-10">
          <ScrollArea className="rounded-md border p-4 h-full sm:h-[200px] shadow-md dark:text-gray-100">
            <ProductDescription content={data?.description as JSONContent} />
          </ScrollArea>
        </div>
      </div>
    </section>
  );
}

export default ProductIdPage;

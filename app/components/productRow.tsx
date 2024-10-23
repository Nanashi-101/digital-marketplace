import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "../lib/db";
import { ProductCard } from "./productCard";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface IAppProps {
  category: "newest" | "templates" | "Uikits" | "icons";
}

async function getData({ category }: IAppProps) {
  switch (category) {
    case "templates": {
      const data = await prisma.product.findMany({
        where: {
          category: "templates",
        },
        select: {
          id: true,
          name: true,
          price: true,
          currency: true,
          smallDescription: true,
          images: true,
          category: true,
        },
        take: 3,
      });

      return {
        data: data,
        title: "Templates",
        link: "/products/templates",
      };
      break;
    }
    case "Uikits": {
      const data = await prisma.product.findMany({
        where: {
          category: "Uikits",
        },
        select: {
          id: true,
          name: true,
          price: true,
          currency: true,
          smallDescription: true,
          images: true,
          category: true,
        },
        take: 3,
      });

      return {
        data: data,
        title: "UI Kits",
        link: "/products/Uikits",
      };
      break;
    }
    case "icons": {
      const data = await prisma.product.findMany({
        where: {
          category: "icons",
        },
        select: {
          id: true,
          name: true,
          price: true,
          currency: true,
          smallDescription: true,
          images: true,
          category: true,
        },
        take: 3,
      });

      return {
        data: data,
        title: "Icons",
        link: "/products/icons",
      };
      break;
    }
    case "newest": {
      const data = await prisma.product.findMany({
        orderBy: {
          createdAt: "desc",
        },
        select: {
          id: true,
          name: true,
          price: true,
          currency: true,
          smallDescription: true,
          images: true,
          category: true,
        },
        take: 4,
      });

      return {
        data: data,
        title: "Newest Products",
        link: "/products/all",
      };
    }
    default: {
      return notFound();
    }
  }
}

async function ProductRow({ category }: IAppProps) {
  const rawData = await getData({ category: category });
  return (
    <section className="mt-12">
      <div className="md:flex md:item-center md:justify-between">
        <h2 className="text-2xl font-extrabold tracking-tighter roboto">
          {rawData.title}
        </h2>
        <Tooltip delayDuration={10}>
          <TooltipTrigger>
            <Link
              href={rawData.link}
              className="text-primary  hidden text-base font-medium hover:text-primary/90 md:block"
            >
              All products <span>&rarr;</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent >
            <h1>Click to see all {rawData.title}</h1>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 mt-4 gap-10">
        {rawData.data.map((product) => (
          <ProductCard
            key={product.id}
            images={product.images}
            name={product.name}
            currency={product.currency}
            price={product.price}
            id={product.id}
            smallDescription={product.smallDescription}
            category={product.category}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductRow;

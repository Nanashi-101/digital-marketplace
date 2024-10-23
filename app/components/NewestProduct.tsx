/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import prisma from "../lib/db";
import {ProductCard} from "./productCard";

async function getProduct() {
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
      description: true,
      images: true,
      category: true,
    },
    take: 4,
  });

  return data;
}

async function NewestProduct() {
  const data = await getProduct();
  return (
    <section className="mt-12">
      <div className="md:flex md:item-center md:justify-between">
        <h2 className="text-2xl font-extrabold tracking-tighter roboto">
          Newest Products
        </h2>
        <Link
          href="/products/all"
          className="text-primary  hidden text-base font-medium hover:text-primary/90 md:block"
        >
          All products <span>&rarr;</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 mt-4 gap-10">
        {data.map((product) => (
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

export default NewestProduct;

import Hero from '@/app/components/hero';
import NoProduct from '@/app/components/noProduct';
import { ProductCard } from '@/app/components/productCard';
import prisma from '@/app/lib/db';
import React from 'react'

async function getProducts() {
  const data = await prisma.product.findMany({
    where: {
      category: undefined,
    },
    select: {
      id: true,
      name: true,
      smallDescription: true,
      price: true,
      currency: true,
      category: true,
      images: true,
    },
  });

  return data;
}

async function AllProductRoute() {
  const data = await getProducts();

  return (
    <section className="max-w-7xl w-full mx-auto px-4 md:px-8 flex flex-col items-center mb-16">
      <div className="my-6">
        <Hero
          condition={false}
          tag={"Product"}
          context="ChromaUI is a professional digital marketplace that will help you find the best products for your project."
        />
      </div>
      {data.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-10 mt-4 w-[90%]">
          {data.map((product) => (
            <ProductCard
              key={product.id}
              images={product.images}
              currency={product.currency}
              name={product.name}
              price={product.price}
              id={product.id}
              smallDescription={product.smallDescription}
              category={product.category}
            />
          ))}
        </div>
      ) : (
        <div className="my-24">
          <NoProduct text={"Products"} />
        </div>
      )}
    </section>
  );
}

export default AllProductRoute

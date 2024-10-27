import React from "react";
import prisma from "../lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ProductCard } from "../components/productCard";
import NoProduct from "../components/noProduct";

async function getData(userId: string) {
  const data = await prisma.product.findMany({
    where: {
      userId: userId,
    },
    select: {
      name: true,
      price: true,
      description: true,
      smallDescription: true,
      images: true,
      id: true,
      currency: true,
      category: true,
    },
  });

  return data;
}

async function MyProductRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await getData(user.id);

  if (!user) throw new Error("User not found");
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 mb-16">
      <h1 className="text-xl lg:text-5xl text-center w-full mx-auto my-5 font-bold text-primary varela">My Products</h1>
      {data.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-10 mt-6 w-[90%]">
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
        <div className="max-w-xl mx-auto flex text-center my-24">
          <NoProduct text={"Products"} />
        </div>
      )}
    </section>
  );
}

export default MyProductRoute;

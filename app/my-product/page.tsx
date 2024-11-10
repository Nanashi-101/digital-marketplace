import React from "react";
import prisma from "../lib/db";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {ProductCard} from "../components/productCard";
import NoProduct from "../components/noProduct";
import {unstable_noStore as noStore} from "next/cache";

async function getData(userId: string) {
  return prisma.product.findMany({
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
}

async function MyProductRoute() {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await getData(user.id);

  if (!user) throw new Error("User not found");
  return (
    <section className="max-w-7xl pb-16 sm:pb-none mx-auto px-4 md:px-8 mb-16">
      <div className="mt-4 mb-10">
        <h1 className="text-md sm:my-3 sm:text-3xl lg:text-5xl font-bold w-full mx-auto text-center">
          Find all your <span className="text-primary">Products</span> in one
          place
        </h1>
        <p className="text-sm lg:text-lg text-muted-foreground mx-auto mt-5 sm:w-[60%] font-normal text-center">
          Here you can find all the products you have uploaded to the platform.
        </p>
      </div>
      <h1 className="text-xl lg:text-3xl font-extrabold tracking-tighter roboto my-5">
        My Products
      </h1>
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

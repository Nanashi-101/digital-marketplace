"use server";

import { Card } from "@/components/ui/card";
import SellForm from "../components/forms/sellForm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../lib/db";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

async function getBooleanStatus(userId: string){
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      stripeConnectLinked: true,
    },
  })

  return data?.stripeConnectLinked;
}


async function SellRoute() {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const status = await getBooleanStatus(user.id);

  if(status === false) redirect("/billing");

  if (!user) throw new Error("User not found");
  return (
    <section className="max-w-7xl pb-16 sm:pb-none mx-auto px-4 md:px-8 md:mb-16">
      <Card className="shadow-lg shadow-primary/30 p-2">
        <SellForm/>
      </Card>
    </section>
  );
}

export default SellRoute;

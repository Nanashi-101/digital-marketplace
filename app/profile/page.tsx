"use server";

import { Card } from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";
import prisma from "../lib/db";
import ProfileForm from "../components/forms/profileForm";
import { unstable_noStore as noStore } from "next/cache";


async function getData(userId: string) {
  const data = await prisma.user.findUnique({
    where:{
      id: userId,
    },
    select:{
      email: true,
      firstName: true,
      lastName: true,
    }
  });

  return data;
}

async function SettingsPage() {
  noStore();

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await getData(user.id);


  if(!user) throw new Error("User not found");
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16 sm:pb-none">
      <Card>
        <ProfileForm email={data?.email as string} firstName={data?.firstName as string} lastName={data?.lastName as string}/>
      </Card>
    </section>
  );
}

export default SettingsPage;

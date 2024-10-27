import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createStripeAccountLink, GetStripeDashBoard } from "../actions";
import { ButtonSmall } from "../components/SubmitButton";
import prisma from "../lib/db";

async function getData(Id: string) {
  const data = await prisma.user.findUnique({
    where: {
      id: Id,
    },
    select: {
      stripeConnectLinked: true,
    },
  });

  return data;
}

async function BillingRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error("User not authorized");

  const data = await getData(user.id);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Billing</CardTitle>
          <CardDescription>Find all your transactions here...</CardDescription>
        </CardHeader>
        <CardContent>
          {data?.stripeConnectLinked === false && (
            <form action={createStripeAccountLink}>
              <ButtonSmall title="Link your account with stripe" />
            </form>
          )}
          {data?.stripeConnectLinked === true && (
            <form action={GetStripeDashBoard}>
              <ButtonSmall title="View Dashboard" />
            </form>
          )}
        </CardContent>
      </Card>
    </section>
  );
}

export default BillingRoute;

/* eslint-disable @typescript-eslint/no-unused-vars */
//* This is a webhook that listens for events from Stripe related to stripe connect

import prisma from "@/app/lib/db";
import { stripe } from "@/app/lib/stripe";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const body = await req.text();

  const signature = headers().get("stripe-signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (error: unknown) {
    return new Response("Webhook Error: Invalid payload", { status: 400 });
  }

  switch (event.type) {
    case "account.updated":{
        const account = event.data.object;

        const data = await prisma.user.update({
            where: {
                connectedAccountId: account.id,
            },
            data: {
                stripeConnectLinked: account.capabilities?.transfers === "pending" || account.capabilities?.transfers === "inactive"? false : true,
            },
        });
        break;
    }
    default:{
        console.log("Unhandled event type: ", event.type);
    }
  }

  return new Response(null, { status: 200 });
}

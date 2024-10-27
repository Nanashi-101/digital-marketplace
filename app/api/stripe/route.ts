//* This is a webhook that listens for events from Stripe related to stripe connect

import ProductEmail from "@/app/components/ProductEmail";
import prisma from "@/app/lib/db";
import { stripe } from "@/app/lib/stripe";
import { headers } from "next/headers";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

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
    case "checkout.session.completed": {
      const session = event.data.object;

      const link = session.metadata?.link as string;

      const {data, error} = await resend.emails.send({
        from: "ChromaUI <onboarding@resend.dev>",
        to: ["soumyadipsanyal2017@gmail.com"],
        subject: "Welcome to ChromaUI - Here's your product link",
        react: ProductEmail({ link: link }),
      });
      break;
    }
    default: {
      console.log("Unhandled event type: ", event.type);
    }
  }

  return new Response(null, { status: 200 });
}

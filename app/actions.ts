
//* This is the action file that we are going to use to handle the form submission in the sell page. We are going to use the zod library to validate the form data and then we are going to send the data to the server to save the product in the database.
"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"; // Import the getKindeServerSession function from the kinde-auth-nextjs library

export type State = {
  status: "error" | "success" | undefined;
  errors?: {
    [key: string]: string[];
  };
  message?: string | null;
};

import { z } from "zod"; // Import the zod library
import prisma from "./lib/db";
import { categoryTypes } from "@prisma/client";
import { stripe } from "./lib/stripe";
import { redirect } from "next/navigation";

// * This is the start of the product validation and submission action file.

//  Define the schema for the product as the zod object
const productSchema = z.object({
  name: z
    .string()
    .min(5, { message: "The text should have a min length of 5" })
    .max(255, { message: "The text cannot exceed 255 characters" }),
  category: z.string().min(1, { message: "category is required" }),
  price: z.number().min(0.01, {
    message: "price should be greater than 0 and please select a currency",
  }),
  currency: z.string().min(1, { message: "currency is required" }),
  smallDescription: z.string().min(3, { message: "Give a bigger summary" }),
  description: z
    .string()
    .min(10, { message: "Please describe your product more" }),
  images: z
    .array(z.string())
    .min(1, { message: "at least one image is required" }),
  productFile: z.string().min(1, { message: "at least 1 file is required" }),
});

// Define the function to handle the form submission
export async function SellProduct(prevSate: any, formData: FormData) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user) throw new Error("Unauthorized. Something went wrong");

  //   Validate the form data using the zod schema
  const validateFields = productSchema.safeParse({
    name: formData.get("title") as string,
    category: formData.get("category") as string,
    price: Number(formData.get("price")),
    currency: formData.get("currency") as string,
    smallDescription: formData.get("smallDescription") as string,
    description: formData.get("description") as string,
    images: JSON.parse(formData.get("images") as string),
    productFile: formData.get("productFile") as string,
  });

  //   If the form data is not valid, return the error state
  if (!validateFields.success) {
    const state: State = {
      status: "error",
      errors: validateFields.error.flatten().fieldErrors,
      message: "Something went wrong",
    };

    return state;
  }

  const data = await prisma.product.create({
    data: {
      name: validateFields.data.name,
      category: validateFields.data.category as categoryTypes,
      price: validateFields.data.price,
      currency: validateFields.data.currency,
      smallDescription: validateFields.data.smallDescription,
      description: JSON.parse(validateFields.data.description),
      images: validateFields.data.images,
      productFile: validateFields.data.productFile,
      userId: user.id,
    },
  }); // Create the product in the database

  //   If the form data is valid, return success state
  return redirect(`/product/${data.id}`);
}

// * This is the end of the product validation and submission action file.

// * This is the start of the settings validation and submission action file.

// Define the schema for the settings form
const settingsSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First name should have a min length of 3" })
    .or(z.literal(""))
    .optional(),
  lastName: z
    .string()
    .min(3, { message: "Last name should have a min length of 3" })
    .or(z.literal(""))
    .optional(),
});

// Define the function to handle the form submission
export const UpdateUserData = async (prevSate: any, formData: FormData) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error("Unauthorized. Something went wrong");
  const validateFields = settingsSchema.safeParse({
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
  });

  if (!validateFields.success) {
    const state: State = {
      status: "error",
      errors: validateFields.error.flatten().fieldErrors,
      message: "Something went wrong",
    };

    return state;
  }

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      firstName: validateFields.data.firstName,
      lastName: validateFields.data.lastName,
    },
  });

  const state: State = {
    status: "success",
    message: "Your data is updated",
  };

  return state;
};

//* Server action for the buy page
export const BuyProduct = async (formData: FormData) => {
  const Id = formData.get("id") as string;
  const data = await prisma.product.findUnique({
    where: {
      id: Id,
    },
    select: {
      name: true,
      price: true,
      currency: true,
      smallDescription: true,
      images: true,
      User:{
        select:{
          connectedAccountId:true
        }
      }
    },
  });

  let stripeCurrency: string = "eur";

  switch (data?.currency) {
    case "zł":
      stripeCurrency = "pln";
      break;
    case "$":
      stripeCurrency = "usd";
      break;
    case "€":
      stripeCurrency = "eur";
      break;
    case "₹":
      stripeCurrency = "inr";
      break;
    case "¥":
      stripeCurrency = "jpy";
      break;
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: stripeCurrency,
          product_data: {
            name: data?.name as string,
            description: data?.smallDescription as string,
            images: data?.images,
          },
          unit_amount: Math.round((data?.price as number) * 100),
        },
        quantity: 1,
      },
    ],
    payment_intent_data: {
      application_fee_amount: Math.round((data?.price as number) * 100) * 0.1,
      transfer_data:{
        destination: data?.User.connectedAccountId as string
      }
    },
    success_url: "http://localhost:3000/payments/success",
    cancel_url: "http://localhost:3000/payments/cancel",
  });

  redirect(session.url as string);
};

export async function createStripeAccountLink() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error("Unauthorized. Something went wrong");

  const data = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      connectedAccountId: true,
    },
  });

  const accountLink = await stripe.accountLinks.create({
    account: data?.connectedAccountId as string,
    refresh_url: "http://localhost:3000/billint",
    return_url: `http://localhost:3000/return/${data?.connectedAccountId}`,
    type: "account_onboarding",
  });

  return redirect(accountLink.url as string);
}

export async function GetStripeDashBoard() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error("Unauthorized. Something went wrong");

  const data = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      connectedAccountId: true,
    },
  });

  const loginLink = await stripe.accounts.createLoginLink(
    data?.connectedAccountId as string
  );

  return redirect(loginLink.url as string);
}

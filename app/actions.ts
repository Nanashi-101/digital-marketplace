/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

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
  smallDescription: z
    .string()
    .min(3, { message: "Give a bigger summary" }),
  description: z
    .string()
    .min(10, { message: "Please describe your product more" }),
  images: z
    .array(z.string())
    .min(1, { message: "at least one image is required" }),
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
  });

//   If the form data is not valid, return the error state
  if (!validateFields.success) {
    const state: State = {
      status: "error",
      errors: validateFields.error.flatten().fieldErrors,
      message: "Fuck youuuuuuuuuuuuuuuu!!!! FUUCCCKKKKK!!!",
    };

    return state;
  }

//   If the form data is valid, return success state
  const state: State = {
    status: "success",
    message: "Your product is created"
  }

  return state;
}

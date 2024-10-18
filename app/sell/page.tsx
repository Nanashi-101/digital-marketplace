/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { JSONContent } from "@tiptap/react";
import React, { use, useEffect } from "react";
import { TipTapEditor } from "../components/editor";
import SelectCategory from "../components/selectCategory";
import SelectPrice from "../components/selectPrice";
import { UploadDropzone } from "../lib/uploadThing";
import { useFormState } from "react-dom";
import { SellProduct, State } from "../actions";
import { toast } from "sonner";

function SellRoute() {
  const initialState: State = {message: '', status: undefined}
  const [state, formAction] = useFormState(SellProduct, initialState)
  const [json, setJson] = React.useState<JSONContent | null>(null);
  const [images, setImages] = React.useState<string[] | null>(null);
  const [files, setFiles] = React.useState<string | null>(null);

  useEffect(() => {
    if(state.status === 'success') {
      toast.success(state.message);
    }
    else if(state.status === 'error') {
      toast.error(state.message);
    }
  },[state])
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-8 md:mb-16">
      <Card className="border-primary shadow-xl shadow-[#f9802d]/20">
        <form action={formAction}>
          <CardHeader>
            <CardTitle>Select your product:</CardTitle>
            <CardDescription>
              Describe your product in the nest way you can.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
              <Label className="text-lg">Title:</Label>
              <Input
                name="title"
                type="text"
                placeholder="Enter the title of your product"
              />
              {state?.errors?.["name"]?.[0] && (
                <p className="text-destructive font-medium text-sm first-letter:uppercase">
                  {state?.errors?.["name"]?.[0]}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-y-2">
              <Label className="text-lg">Category:</Label>
              {state?.errors?.["category"]?.[0] && (
                <p className="text-destructive font-medium text-sm first-letter:uppercase">
                  {state?.errors?.["category"]?.[0]}
                </p>
              )}
              <SelectCategory />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label className="text-lg">Price:</Label>
              <SelectPrice />
              {state?.errors?.["price"]?.[0] && (
                <p className="text-destructive font-medium text-sm first-letter:uppercase">
                  {state?.errors?.["price"]?.[0]}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-y-2">
              <Label className="text-lg">Small summary:</Label>
              <Textarea
                placeholder="Please describe your product"
                name="smallDescription"
              />
              {state?.errors?.["smallDescription"]?.[0] && (
                <p className="text-destructive font-medium text-sm first-letter:uppercase">
                  {state?.errors?.["smallDescription"]?.[0]}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-y-2">
              <input
                type="hidden"
                name="description"
                value={JSON.stringify(json)}
              />
              <Label className="text-lg">Description:</Label>
              <TipTapEditor setJson={setJson} json={json} />
              {state?.errors?.["description"]?.[0] && (
                <p className="text-destructive font-medium text-sm first-letter:uppercase">
                  {state?.errors?.["description"]?.[0]}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-y-2">
              <input
                type="hidden"
                name="images"
                value={JSON.stringify(images)}
              />
              <Label className="text-lg">Product Image:</Label>
              <UploadDropzone
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  setImages(res.map((item: any) => item.url));
                  toast.success("Image uploaded successfully");
                }}
                onUploadError={(error: Error) => {
                  toast.error("Image upload failed");
                }}
              />
              {state?.errors?.["images"]?.[0] && (
                <p className="text-destructive font-medium text-sm first-letter:uppercase">
                  {state?.errors?.["images"]?.[0]}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter className="mt-6 flex justify-center w-[80%] mx-auto">
            <Button
              type="submit"
              className="w-full text-lg transition-all ease-linear hover:scale-105"
            >
              Submit product
            </Button>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}

export default SellRoute;

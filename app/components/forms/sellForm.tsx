"use client";

import React from "react";


import { SellProduct, State } from "@/app/actions";
import { UploadDropzone } from "@/app/lib/uploadThing";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { JSONContent } from "@tiptap/react";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { TipTapEditor } from "../editor";
import SelectCategory from "../selectCategory";
import SelectPrice from "../selectPrice";
import { ButtonFull } from "../SubmitButton";

function SellForm() {
  const initialState: State = { message: "", status: undefined };
  const [state, formAction] = useFormState(SellProduct, initialState);
  const [json, setJson] = React.useState<JSONContent | null>(null);
  const [images, setImages] = React.useState<string[] | null>(null);
  const [file, setFile] = React.useState<string | null>(null);

  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message);
    } else if (state.status === "error") {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <form action={formAction}>
      <CardHeader>
        <CardTitle className="text-4xl font-semibold tracking-norma; roboto">
          Create Your Perfect Product Today!
        </CardTitle>
        <CardDescription className="text-xl tracking-tight leading-none roboto">
          Create your custom product and bring your ideas to life with just a
          few clicks!
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-2">
          <Label className="text-lg">Title:</Label>
          <Input
            name="title"
            type="text"
            placeholder="Enter the title of your product"
            required
            minLength={3}
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
            required
            minLength={10}
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
          <input type="hidden" name="images" value={JSON.stringify(images)} />
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
        <div className="flex flex-col gap-y-2">
          <input type="hidden" name="productFile" value={file ?? ""} />
          <Label className="text-lg">Product File:</Label>
          <UploadDropzone
            endpoint="productFileUploader"
            onClientUploadComplete={(res) => {
              setFile(res[0].url);
              toast.success("Your Product file has been uploaded!");
            }}
            onUploadError={(error: Error) => {
              toast.error("File upload failed");
            }}
          />
          {state?.errors?.["productFile"]?.[0] && (
            <p className="text-destructive font-medium text-sm first-letter:uppercase">
              {state?.errors?.["productFile"]?.[0]}
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className="mt-6 flex justify-center w-[80%] mx-auto">
        <ButtonFull title="Create your product" />
      </CardFooter>
    </form>
  );
}

export default SellForm;

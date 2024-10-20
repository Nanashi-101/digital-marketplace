"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

function ButtonFull({title}: {title: string}) {
  const { pending } = useFormStatus();
  return (
    <div className="w-[80%] mx-auto">
      {pending ? (
        <Button disabled className="w-full text-lg">
          Please wait <Loader2 className="ml-2 h-4 w-4 animate-spin" />
        </Button>
      ) : (
        <Button
          type="submit"
          className="w-full text-lg transition-all ease-linear hover:scale-105"
        >
          {title}
        </Button>
      )}
    </div>
  );
}

function ButtonSmall({title}: {title: string}){
    const { pending } = useFormStatus();
    return (
      <div className="">
        {pending ? (
          <Button disabled className="text-lg">
            Please wait <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          </Button>
        ) : (
          <Button
            type="submit"
            className="text-lg transition-all ease-linear hover:scale-105"
          >
            {title}
          </Button>
        )}
      </div>
    );
}

export {
  ButtonFull,
  ButtonSmall,
};
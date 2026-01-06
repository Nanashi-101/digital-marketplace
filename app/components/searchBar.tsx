"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useActionState, useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { GetSearchedProduct, SearchState } from "../actions";
import { redirect } from "next/navigation";

function SearchBar() {
  const initialState: SearchState = { message: "", status: undefined };
  const [state, formAction] = useActionState(GetSearchedProduct, initialState);

  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message);
      redirect(`/product/${state.id}`);
    } else if (state.status === "error" && state.id === "not found") {
      redirect("/no-product");
    }
    else if (state.status === "error") {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <form
      action={formAction}
      className="flex gap-x-2 justify-center items-center w-full mx-auto"
    >
      <Input
        name="search"
        placeholder="Search for products"
        className="w-full rounded-full"
      />
      <Button type="submit" size={"icon"} className="rounded-full p-3">
        <SearchIcon size={20} />
      </Button>
    </form>
  );
}

export default SearchBar;

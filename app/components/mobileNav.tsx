"use server";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { AlignJustify, SearchIcon } from "lucide-react";
import Link from "next/link";
import { navLinks } from "../lib/data";
import { ModeToggle } from "./modeToggler";
import { GetSearchedProduct, SearchState } from "../actions";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import SearchBar from "./searchBar";

async function MobileNav() {
  // const initialState: SearchState = { message: "", status: undefined };
  // const [state, formAction] = useFormState(GetSearchedProduct, initialState);

  // useEffect(() => {
  //   if (state.status === "success") {
  //     toast.success(state.message);
  //     redirect(`/product/${state.id}`);
  //   } else if (state.status === "error") {
  //     toast.error(state.message);
  //   }
  // }, [state]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" className="p-2 rounded-full">
          <AlignJustify size={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 md:w-32" align="end">
        <DropdownMenuGroup>
          <div className="w-full px-2 md:hidden flex items-center justify-between gap-x-2">
            <h1 className="text-xl font-bold roboto tracking-tight">
              Chroma
              <span className="text-2xl text-[#F97316] font-bold roboto">
                UI
              </span>
            </h1>
            <ModeToggle />
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="md:hidden px-2 my-4">
            <SearchBar/>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          {navLinks.map((link) => (
            <DropdownMenuItem asChild key={link.id}>
              <Link
                href={link.url}
                className="text-muted-foreground hover:text-black font-medium"
              >
                {link.icon}
                {link.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="my-4">
          <div className="md:hidden flex items-center justify-center gap-x-2">
            <Button variant={"outline"} asChild className="ml-3">
              <LoginLink>Log in</LoginLink>
            </Button>
            <Button>
              <RegisterLink>Sign up</RegisterLink>
            </Button>
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MobileNav;

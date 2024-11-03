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
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { navLinks } from "../lib/data";
import { ModeToggle } from "./modeToggler";
import SearchBar from "./searchBar";

async function MobileNav() {
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
          <DropdownMenuSeparator className="md:hidden block" />
          <DropdownMenuGroup className="md:hidden px-2 my-4">
            <SearchBar />
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="md:hidden block" />
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
        <DropdownMenuSeparator className="md:hidden block" />
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

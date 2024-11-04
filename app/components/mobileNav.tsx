"use server";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Boxes } from "lucide-react";
import { navLinks } from "../lib/data";
import { ModeToggle } from "./modeToggler";
import NavbarLink from "./navbarLinks";
import SearchBar from "./searchBar";

async function MobileNav() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="p-2 rounded-full">
          <Boxes size={24} strokeWidth={1.25} className="text-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuGroup>
          <div className="w-full px-2 flex items-center justify-between gap-x-2">
            <h1 className="text-xl font-bold roboto tracking-tight">
              Chroma
              <span className="text-2xl text-[#F97316] font-bold roboto">
                UI
              </span>
            </h1>
            {!user ? <ModeToggle /> : <></>}
          </div>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {!user ? (
          <DropdownMenuGroup className="md:hidden px-2 my-4">
            <SearchBar />
          </DropdownMenuGroup>
        ) : (
          <></>
        )}
        <DropdownMenuSeparator className="" />
        <DropdownMenuLabel className="text-center font-semibold text-md bg-primary/20 rounded-lg ">
          Categories
        </DropdownMenuLabel>
        <DropdownMenuGroup className="mt-2">
          {navLinks.map((link) => (
            <NavbarLink key={link.id} link={link} />
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {!user ? (
          <DropdownMenuGroup className="mt-4 mb-4">
            <div className="md:hidden flex items-center justify-center gap-x-2">
              <Button variant={"outline"} asChild className="ml-3">
                <LoginLink>Log in</LoginLink>
              </Button>
              <Button>
                <RegisterLink>Sign up</RegisterLink>
              </Button>
            </div>
          </DropdownMenuGroup>
        ) : (
          <></>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MobileNav;

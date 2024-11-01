"use server";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Menu } from "lucide-react";
import Link from "next/link";
import { navLinks } from "../lib/data";
import { ModeToggle } from "./modeToggler";
import Image from "next/image";
import logo from "@/public/Logo1.png";
import {
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

async function MobileNav() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-2 rounded-full">
          <Menu size={24} />
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
              <ModeToggle />
            </div>
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
          <div className="flex items-center justify-center gap-x-2">
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

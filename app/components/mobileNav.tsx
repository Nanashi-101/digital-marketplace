"use server";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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

async function MobileNav() {
  // document.addEventListener("resize", () => {
  // const mobileNav = document.getElementById("mobile-nav");
  //   mobileNav?.classList.add("hidden");
  // });
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className=""
        id="mobile-nav"
      >
        <Menu size={32} color="#F97316" />
      </SheetTrigger>
      <SheetContent side={"left"} className="rounded-t-lg" >
        <div className="mt-5 flex px-2 space-y-1 flex-col">
          <div className="mb-16">
            <Link href="/" className="flex items-center justify-center gap-2">
              <Image
                src={logo}
                alt="Chroma UI Logo"
                className="w-[50px] h-[50px]"
              />
              <h1 className="text-3xl font-bold roboto tracking-tight">
                Chroma
                <span className="text-4xl text-[#F97316] font-bold roboto">
                  UI
                </span>
              </h1>
            </Link>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="hover:bg-muted hover:bg-opacity-75 group max-w-[70%] w-[300px] mx-auto uppercase flex items-center justify-center p-2 rounded-md text-md roboto font-semibold "
            >
              {link.name}
            </Link>
          ))}
          {user ? (
            <></>
          ) : (
            <div className="flex gap-x-2 justify-center">
              <ModeToggle />
              <Button variant={"outline"} asChild className="ml-4">
                <LoginLink>Log in</LoginLink>
              </Button>
              <Button>
                <RegisterLink>Sign up</RegisterLink>
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;

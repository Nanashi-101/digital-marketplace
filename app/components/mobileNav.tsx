"use server";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  LoginLink,
  RegisterLink
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Menu } from "lucide-react";
import Link from "next/link";
import { navLinks } from "../lib/data";

async function MobileNav() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={32} color="#F97316" />
      </SheetTrigger>
      <SheetContent side={"bottom"} className="rounded-t-lg">
        <div className="mt-5 flex px-2 space-y-1 flex-col">
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
              <Button variant={"outline"} asChild>
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

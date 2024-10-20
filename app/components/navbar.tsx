import { Button } from "@/components/ui/button";
import logo from "@/public/Logo1.png";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./mobileNav";
import NavbarLinks from "./navbarLinks";
import UserNav from "./userNav";

async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    // This is gonna be a new way to create a navbar for me in the future
    <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-3 mx-auto py-7">
      {/* This is the first part of the nav it takes upto 3 columns */}
      <div className="md:col-span-3">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image src={logo} alt="Chroma UI Logo" width={70} height={70} />
          <h1 className="text-3xl font-bold roboto tracking-tight">
            Chroma
            <span className="text-4xl text-[#F97316] font-bold roboto">UI</span>
          </h1>
        </Link>
      </div>
      {/* This is the second part of the nav it takes upto 6 columns. Built as a separate component for readability */}
      <NavbarLinks />
      {/* This is the Third part of the nav it also takes upto 3 columns */}
      <div className="flex item-center gap-x-2 ms-auto md:col-span-3">
        {user ? (
          <UserNav
            email={user.email as string}
            username={`${user.given_name}` as string}
            userImg={user.picture ?? `https://avatar.vercel.sh/${user.given_name}.svg`}
          />
        ) : (
          <div className="hidden md:flex gap-x-2">
            <Button variant={"outline"} asChild>
              <LoginLink>Log in</LoginLink>
            </Button>
            <Button>
              <RegisterLink>Sign up</RegisterLink>
            </Button>
          </div>
        )}

        <div className="md:hidden flex items-center" id="mobileNav">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

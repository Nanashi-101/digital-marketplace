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
import { ModeToggle } from "./modeToggler";
import NavbarLinks from "./navbarLinks";
import UserNav from "./userNav";
import prisma from "../lib/db";
import SearchBar from "./searchBar";

async function getUserData() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (user) {
    const data = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        profileImage: true,
      },
    });
    return data;
  }
}

async function Navbar() {
  const user = await getUserData();

  return (
    // This is gonna be a new way to create a navbar for me in the future
    <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 md:justify-between items-center px-4 md:px-8 mx-auto py-7">
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
      {/* <NavbarLinks /> */}

      <div className="w-[80%] relative md:translate-x-10 mx-auto col-span-6 md:flex items-center justify-center hidden">
        <SearchBar />
      </div>
      {/* This is the Third part of the nav it also takes upto 3 columns */}
      <div className="flex item-center gap-x-2 ms-auto md:col-span-3">
        {user ? (
          <div className="flex items-center gap-5">
            <UserNav
              email={user.email as string}
              username={`${user.firstName}` as string}
              userImg={
                user.profileImage ??
                `https://avatar.vercel.sh/${user.firstName}.svg`
              }
            />
          </div>
        ) : (
          <>
            <div className="hidden md:flex gap-x-2">
              <ModeToggle />
              <div className="flex items-center">
                <MobileNav />
              </div>
              <Button variant={"outline"} asChild className="ml-3">
                <LoginLink>Log in</LoginLink>
              </Button>
              <Button>
                <RegisterLink>Sign up</RegisterLink>
              </Button>
            </div>
            <div className="md:hidden flex items-center">
              <MobileNav />
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

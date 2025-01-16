import { Button } from "@/components/ui/button";
import logo from "@/public/Logo1.png";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import prisma from "../lib/db";
import MobileNav from "./mobileNav";
import { ModeToggle } from "./modeToggler";
import SearchBar from "./searchBar";
import UserNav from "./userNav";

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
    <motion.nav
      className="relative xl:max-w-[100rem] max-w-7xl w-full flex md:grid md:grid-cols-12 md:justify-between items-center px-4 md:px-8 mx-auto py-7"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1, delay: 0.4, type: "spring" }}
    >
      {/* This is the first part of the nav it takes upto 3 columns */}
      <motion.div
        className="md:col-span-3"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.1, delay: 0.4, type: "spring" }}
      >
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image src={logo} alt="Chroma UI Logo" width={70} height={70} />
          <h1 className="text-xl sm:text-3xl font-bold roboto tracking-tight">
            Chroma
            <span className="text-2xl sm:text-4xl text-[#F97316] font-bold roboto">
              UI
            </span>
          </h1>
        </Link>
      </motion.div>
      {/* This is the second part of the nav it takes upto 6 columns. Built as a separate component for readability */}
      {/* <NavbarLinks /> */}

      <motion.div className="w-[80%] relative md:translate-x-10 mx-auto col-span-6 md:flex items-center justify-center hidden">
        <SearchBar />
      </motion.div>
      {/* This is the Third part of the nav it also takes upto 3 columns */}
      <motion.div
        className="flex item-center gap-x-2 ms-auto md:col-span-3"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.1, delay: 0.4, type: "spring" }}
      >
        {user ? (
          <div className="flex items-center sm:gap-2">
            <MobileNav />
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
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;

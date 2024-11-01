
"use client";

import React from "react";

import { navLinks } from "@/app/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function NavbarLinks() {
  const location = usePathname();
  return (
    <div className="hidden relative md:translate-x-12 md:flex justify-center items-center col-span-6 gap-x-2">
      {navLinks.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          className={cn(
            location === link.url ? "bg-primary/10" : "hover:bg-muted hover:bg-opacity-75",
            "group flex items-center p-2 rounded-md text-md roboto font-semibold"
          )}
        >
          {link.name}
        </Link>
      ))}
      
    </div>
  );
}

export default NavbarLinks;

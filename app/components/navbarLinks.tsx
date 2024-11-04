
"use client";

import React from "react";

import { navLinks } from "@/app/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

function NavbarLink({ link }: { link: { id: number; name: string; url: string; icon: React.ReactNode } }) {
  const location = usePathname();
  return (
    <DropdownMenuItem asChild key={link.id} className="mb-2">
      <Link
        href={link.url}
        className={cn(
          location === link.url
            ? "bg-primary/10"
            : "hover:bg-muted hover:bg-opacity-75",
          "group flex items-center p-2 rounded-md text-md roboto font-semibold"
        )}
      >
        {link.icon}
        {link.name}
      </Link>
    </DropdownMenuItem>
  );
}

export default NavbarLink;

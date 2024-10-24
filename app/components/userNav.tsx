import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./modeToggler";

interface iUserProps {
  email: string;
  username: string;
  userImg: string | undefined;
}

function UserNav({ email, username, userImg }: iUserProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="ml-4">
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={userImg} alt="user-img" />
            <AvatarFallback className="text-primary">
              {username.slice(0, 3)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 backdrop:blur-md sm:backdrop:blur-none"
        align="end"
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{username}</p>
              <p className="text-xs leading-none text-muted-foreground">
                <span className="text-[#F9802D] font-bold">@</span>
                {`${
                  email ? email.slice(0, 9) : username.slice(0, 7)
                }.${Math.floor(Math.random() * 1000000)}`}
              </p>
            </div>
            <ModeToggle/>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/sell">Your Product</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/settings">Settings</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <div className="flex gap-x-3">
          <Button className="w-[80%] mb-3 flex items-center mx-auto hover:scale-105 transition-all ease-out">
            <LogoutLink className="flex items-center gap-2">
              Log out
              <LogOutIcon size={15} />
            </LogoutLink>
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserNav;

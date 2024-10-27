/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { State, UpdateUserData } from "@/app/actions";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { ButtonSmall } from "../SubmitButton";

interface IAppProps {
  firstName: string;
  lastName: string;
  email: string;
}

function ProfileForm({ firstName, lastName, email }: IAppProps) {
  const initialState: State = { message: "", status: undefined };
  const [state, formAction] = useFormState(UpdateUserData, initialState);
  
  useEffect(() =>{
    if(state.status === "success"){
      toast.success(state.message);
      window.location.reload();
    }
    else if(state.status === "error"){
        toast.error(state.message);
        }
  },[state]);
  return (
    <form action={formAction}>
      <CardHeader>
        <CardTitle className="text-4xl font-semibold roboto">
          Your Profile
        </CardTitle>
        <CardDescription className="text-xl robot font-medium">
          Here you can manage your account data
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-2">
          <Label className="text-xl font-medium">First name:</Label>
          <Input
            name="firstName"
            type="text"
            placeholder="First name"
            defaultValue={firstName}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label className="text-xl font-medium">Last name:</Label>
          <Input
            name="lastName"
            type="text"
            placeholder="Last name"
            defaultValue={lastName}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label className="text-xl font-medium">Email:</Label>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            defaultValue={email}
            disabled
          />
        </div>
      </CardContent>
      <CardFooter>
        <ButtonSmall title="Update your details" />
      </CardFooter>
    </form>
  );
}

export default ProfileForm;

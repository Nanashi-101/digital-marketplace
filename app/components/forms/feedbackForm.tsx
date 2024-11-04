"use client";

import { HandleFeedback, State } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { Sparkles } from "lucide-react";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { ButtonSmall } from "../SubmitButton";

function FeedbackForm() {
  const [rating, setRating] = React.useState<number>(1);
  const [consent, setConsent] = React.useState<boolean>(false);
  const initialState: State = { message: "", status: undefined };
  const [state, formAction] = useFormState(HandleFeedback, initialState);

  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message);
    } else if (state.status === "error") {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <form action={formAction}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl sm:text-4xl font-semibold roboto-700">
            Feedback Form
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm sm:text-lg font-semibold roboto-700">
            Hey, it's really nice of you to take your time and share some
            feedback.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-2">
            <Label className="text-md sm:text-lg roboto-700">Your name:</Label>
            <Input
              name="name"
              placeholder="Your name"
              type="text"
              className="mb-4"
              required
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label className="text-md sm:text-lg roboto-700">Your email:</Label>
            <Input
              name="email"
              placeholder="Your name"
              type="email"
              className="mb-4"
              required
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label className="text-md sm:text-lg roboto-700">Rate us:</Label>
            <div className="flex flex-col gap-y-4 w-full mx-auto mb-4">
              <Label className="text-lg roboto-900 rounded-xl max-w-[10%] text-center flex gap-x-2 items-center justify-center">
                {rating}
                <Sparkles className="text-primary hidden sm:block" />
              </Label>
              <Tooltip delayDuration={1000}>
                <input type="hidden" name="rating" value={rating} />
                <TooltipTrigger>
                  <Slider
                    defaultValue={[1]}
                    max={10}
                    step={1}
                    className=""
                    onValueChange={(value) => setRating(value[0])}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <h1>Slide to rate</h1>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <Label className="text-md sm:text-lg roboto-700">
              Your feedback:
            </Label>
            <Textarea
              name="feedback"
              placeholder="Write your feedback here"
              className="mb-4"
              required
            />
          </div>
          <div className="items-top flex space-x-2">
            <input
              type="hidden"
              name="consent"
              value={consent ? "agreed" : "not agreed"}
            />
            <Checkbox id="terms1" onCheckedChange={() => setConsent(true)} />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              <p className="text-sm text-muted-foreground">
                You agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex items-center justify-center sm:justify-end w-full">
            <ButtonSmall title="Submit"/>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
}

export default FeedbackForm;

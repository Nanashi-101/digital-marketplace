import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SelectCategory from "../components/selectCategory";
import SelectPrice from "../components/selectPrice";
import { Textarea } from "@/components/ui/textarea";
import { TipTapEditor } from "../components/editor";

function SellRoute() {
  return (
    <section className="max-w-3xl mx-auto px-4 md:px-8 md:mb-16">
      <Card className="border-primary shadow-xl shadow-[#f9802d]/20">
        <form action="">
          <CardHeader>
            <CardTitle>Select your product:</CardTitle>
            <CardDescription>
              Describe your product in the nest way you can.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
              <Label className="text-lg">Title:</Label>
              <Input
                type="text"
                placeholder="Enter the title of your product"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label className="text-lg">Category:</Label>
              <SelectCategory />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label className="text-lg">Price:</Label>
              <SelectPrice/>
            </div>
            <div className="flex flex-col gap-y-2">
              <Label className="text-lg">Small summary:</Label>
              <Textarea placeholder="Please describe your product"/>
            </div>
            <div className="flex flex-col gap-y-2">
              <Label className="text-lg">Description:</Label>
              <TipTapEditor />
            </div>
          </CardContent>
        </form>
      </Card>
    </section>
  );
}

export default SellRoute;

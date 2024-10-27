
"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

function SelectPrice() {
  const [price, setPrice] = React.useState<number>(0);
  const [currency, setCurrency] = React.useState<string>("PLN");


  return (
    <div className="grid grid-cols-3  gap-x-3">
      <Input
        name="price"
        type="number"
        placeholder="Enter the price of your product"
        className="col-span-2"
        onChange={(e) => setPrice(Number(e.target.value))}
        required
        minLength={1}
      />
      <input type="hidden" name="currency" value={currency} />
      <Select
        onValueChange={(value) => setCurrency(value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Currency" className="placeholder:text-muted-foreground"/>
        </SelectTrigger>
        <SelectContent align="center">
          <SelectItem value="zł">PLN</SelectItem>
          <SelectItem value="$">USD</SelectItem>
          <SelectItem value="€">EUR</SelectItem>
          <SelectItem value="₹">INR</SelectItem>
          <SelectItem value="¥">JPY</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectPrice;

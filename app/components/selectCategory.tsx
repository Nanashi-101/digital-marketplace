"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { categoryItems } from "../lib/categoryItems";

function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  return (
    <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {categoryItems.map((item) => (
        <div key={item.id} className="flex items-center justify-center">
          <Card
            className={cn(
              selectedCategory === item.name
                ? `border-2 border-primary text-primary scale-105`
                : `border-normal`,
              `w-full flex items-center justify-center hover:text-primary hover:scale-105 hover:border-primary duration-100 ease-in cursor-pointer px-5 py-4 gap-6 shadow-md`
            )}
            onClick={() => setSelectedCategory(item.name)}
          >
            <div className="font-medium">{item.image}</div>
            <div
              className={`font-medium text-lg transition-all duration-300`}
            >
              {item.title}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default SelectCategory;

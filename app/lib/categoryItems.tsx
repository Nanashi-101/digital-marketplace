import { ChefHat, Globe, Shapes } from "lucide-react";
import { ReactNode } from "react";

interface iCategoryItems {
    id: number;
    name: string;
    title: string;
    image: ReactNode
}

export const categoryItems: iCategoryItems[] = [
  {
    id: 0,
    name: "templates",
    title: "Templates",
    image: <Globe size={28} />,
  },
  {
    id: 1,
    name: "Uikits",
    title: "Ui Kits",
    image: <ChefHat size={28} />,
  },
  {
    id: 2,
    name: "icons",
    title: "Icons",
    image: <Shapes size={28} />,
  },
];
import { ChefHat, Globe, PartyPopper } from "lucide-react";
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
    name: "ui-kits",
    title: "Ui Kits",
    image: <ChefHat size={28} />,
  },
  {
    id: 2,
    name: "icons",
    title: "Icons",
    image: <PartyPopper size={28} />,
  },
];
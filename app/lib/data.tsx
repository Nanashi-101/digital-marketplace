import { House, icons, LayoutGrid, LayoutPanelLeft, Triangle } from "lucide-react";

export const navLinks = [
  {
    id: 0,
    name: "Home",
    url: "/",
    icon: <House size={24} />,
  },
  {
    id: 1,
    name: "Templates",
    url: "/products/templates",
    icon: <LayoutPanelLeft size={24} />,
  },
  {
    id: 2,
    name: "UI Kits",
    url: "/products/Uikits",
    icon: <Triangle size={24} />,
  },
  {
    id: 3,
    name: "Icons",
    url: "/products/icons",
    icon: <LayoutGrid size={24} />,
  },
];
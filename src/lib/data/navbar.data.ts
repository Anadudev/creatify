import { HandCoins, HeartHandshake, Wrench } from "lucide-react";

export const navItems = [
  {
    name: "Solution",
	Icon: HeartHandshake,
    submenu: [
      {
        name: "Features",
        href: "#",
      },
      {
        name: "Integrations",
        href: "#",
      },
    ],
  },
  {
    name: "Resources",
	Icon: Wrench,
    submenu: [
      {
        name: "Docs",
        href: "#",
      },
      {
        name: "Blog",
        href: "#",
      },
    ],
  },
  {
    name: "Pricing",
	Icon: HandCoins,
    href: "#",
  },
];

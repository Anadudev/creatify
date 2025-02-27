import React from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// ---------
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ChevronDown } from "lucide-react";

const navItems = [
  {
    name: "Solution",
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
    href: "#",
  },
];

const Navbar = () => {
  return (
    <div className="w-full flex">
      <div className="flex justify-between shadow-md shadow-neutral-700/50 items-center w-full p-4">
        <div className="">
          <Logo />
        </div>
        <div className="flex gap-4">
          {navItems.map((item, index) => (
            <div key={index} className="group relative">
              {item.href ? (
                <Link href={item?.href}>{item.name}</Link>
              ) : (
                <div className="cursor-pointer inline-flex space-x-2">
                  {" "}
                  <p>{item.name} </p>
                  <ChevronDown size={16} className="my-auto" />
                </div>
              )}
              {item.submenu && (
                <div className="hidden bg-neutral-900 group-hover:block absolute top-[200%] left-0 bg-neutral-850 shadow-lg  shadow-neutral-700 pt-4 pb-4 w-48 transition-all duration-200 rounded-md space-y-4">
                  {item.submenu?.map((sub, index) => (
                    <div
                      key={index}
                      className=" group text-sm hover:text-accent bg-accent/5 p-2"
                    >
                      <Link href={sub.href}>{sub.name}</Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="space-x-4">
          <Button className="bg-transparent bg-gradient-to-b from-violet-400 to-violet-500 bg-clip-text hover:text-transparent border border-neutral-500 hover:shadow-sm hover:shadow-neutral-500 transition-shadow duration-100 font-extrabold ">
            Get Started
          </Button>
          <Button className="bg-gradient-to-b hover:shadow-sm hover:shadow-neutral-500 transition-shadow duration-200  from-violet-400 to-violet-700  font-extrabold ">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

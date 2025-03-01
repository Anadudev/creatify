"use client";
import React, { useState } from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { navItems } from "@/lib/data/navbar.data";

const MobileNavbar = () => {
  return (
    <div className="md:hidden card-bg-blur gap-4 fixed z-50 flex items-center justify-around bottom-4 left-1/2 transform -translate-x-1/2 bg-neutral-900 shadow-md shadow-neutral-700/50 bg-opacity-75 rounded-full px-6 py-4 w-9/12 max-w-sm">
      {navItems.map((item, index) => (
        <div key={index} className="group relative">
          {item.submenu ? (
            <div className="cursor-pointer flex space-x-2">
              <item.Icon size={24} />
              <ChevronUp size={16} className="" />
            </div>
          ) : (
            <Link href={item?.href || "#"} title={item.name}>
              <item.Icon size={24} />
            </Link>
          )}
          {item.submenu && (
            <div className="hidden group-hover:block absolute bottom-full -left-8 bg-neutral-900 border border-neutral-700 pt-4 pb-4 w-48 transition-all duration-200 rounded-md space-y-4">
              {item.submenu.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item?.href || "#"}
                    className="px-4 py-2 hover:bg-neutral-800 transition-all duration-200 block"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const DesktopNavbar = () => {
  return (
    <div className={`hidden md:flex gap-4`}>
      {navItems.map((item, index) => (
        <div key={index} className="group relative">
          {item.href ? (
            <Link href={item?.href}>{item.name}</Link>
          ) : (
            <div className="cursor-pointer inline-flex space-x-2">
              <p>{item.name} </p>
              <ChevronDown size={16} className="my-auto" />
            </div>
          )}
          {item.submenu && (
            <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 bg-neutral-900 border border-neutral-700 pt-4 pb-4 w-48 transition-all duration-200 rounded-md space-y-4">
              {item.submenu.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item?.href || "#"}
                    className="px-4 py-2 hover:bg-neutral-800 transition-all duration-200 block"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [openNave, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNave);
  };

  return (
    <div className="w-full flex">
      <Menu
        onClick={toggleNav}
        className="absolute z-50 sm:hidden block right-5 top-5 size-8 cursor-pointer"
      />
      <div className="flex sm:flex-row flex-col gap-4 justify-between shadow-md shadow-neutral-700/50 items-center w-full p-4 max-w-6xl mx-auto space-y-0">
        <div className="mx-auto sm:mx-0">
          <Logo />
        </div>
        <MobileNavbar />
        <DesktopNavbar />
        <div
          className={`md:flex sm:mx-0 mx-auto space-x-4 ${
            openNave ? "" : "hidden"
          }`}
        >
          <Button className="bg-transparent bg-gradient-to-b from-violet-400 to-violet-500 bg-clip-text hover:text-transparent border border-neutral-500 hover:shadow-sm hover:shadow-neutral-500 transition-shadow duration-100 font-extrabold ">
            Sign in
          </Button>
          <Button className="bg-gradient-to-b hover:shadow-sm hover:shadow-neutral-500 transition-shadow duration-200  from-violet-400 to-violet-700  font-extrabold ">
            Start for free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import Logo from "@/components/Logo";
import Link from "next/link";

const navItems = [
  {
    title: "product",
    items: [
      {
        name: "Documentation",
        link: "#",
      },
      {
        name: "changelog",
        link: "#",
      },
      {
        name: "pricing",
        link: "#",
      },
      {
        name: "parses",
        link: "#",
      },
      {
        name: "SDTF",
        new: true,
        link: "#",
      },
      {
        name: "use cases",
        link: "#",
      },
      {
        name: "launch week",
        link: "#",
      },
      {
        name: "feedback",
        link: "#",
      },
    ],
  },
  {
    title: "resources",
    items: [
      { name: "guide", link: "#" },
      { name: "blog", link: "#" },
      { name: "customers", link: "#" },
      { name: "help center", link: "#" },
    ],
  },
  {
    title: "company",
    items: [
      { name: "press kit", link: "#" },
      { name: "climate", link: "#" },
      { name: "jobs", link: "#" },
      { name: "contact us", link: "#" },
    ],
  },
  {
    title: "community",
    items: [
      { name: "discord", link: "#" },
      { name: "twitter", link: "#" },
      { name: "github", link: "#" },
      { name: "dribble", link: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto space-y-4">
      <div className="">
        <hr className="border-neutral-700" />
      </div>
      <div className=" flex justify-between">
        <div className="">
          <Logo />
        </div>
        <div className="flex pr-8 gap-9 justify-start">
          {navItems.map((item, index) => (
            <div key={index}>
              <h3 className="mb-4 font-bold text-lg">{item.title}</h3>
              {item.items.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.link}
                    className="block mb-2 text-sm hover:text-accent transition-all duration-200 text-neutral-500"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <hr className="border-neutral-700" />
      </div>
      <div className="flex justify-between p-4 text-neutral-400 font-semibold text-sm">
        <div className="flex gap-4">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Security</p>
        </div>
        <div className="flex gap-4">
          <p>© 2023 Clearify All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

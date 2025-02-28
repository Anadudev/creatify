import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ActionLinkProps } from "@/interfaces/interface";

const ActionLink: React.FC<ActionLinkProps> = ({ link, className, text }) => {
  return (
    <Link
      href={link}
      className={`group/actionLink text-black font-bold bg-neutral-50 w-fit px-4 py-2 rounded-full mx-auto flex items-center justify-center gap-2 sm:gap-4 cursor-pointer text-sm ${className}`}
    >
      <p className="">{text}</p>
      <ArrowRight
        size={20}
        className="bg-black group-hover/actionLink:translate-x-1 duration-500 text-neutral-50 p-1 rounded-full"
      />
    </Link>
  );
};

export default ActionLink;

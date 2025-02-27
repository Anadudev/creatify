import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
interface GuideListItemProps {
  Icon: LucideIcon;
  title: string;
  body: string;
  linkText?: string;
}

const GuideListItem: React.FC<GuideListItemProps> = ({
  Icon,
  title,
  body,
  linkText,
}) => {
  return (
    <div className="space-y-4 hover:bg-neutral-800 card-bg-blur-hover rounded-xl p-4 max-w-[21rem] mx-auto cursor-default ">
      <div className="flex gap-2">
        <Icon className="text-primary size-5" />
        <h4 className="font-bold text-neutral-50">{title}</h4>
      </div>
      <div className="">
        <p className="text-neutral-500 hover:text-neutral-400">
          {body} <Link href="#">{linkText}</Link>
        </p>
      </div>
    </div>
  );
};

export default GuideListItem;

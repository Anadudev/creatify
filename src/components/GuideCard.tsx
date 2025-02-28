import React from "react";
import Image from "next/image";
import { GuideCardProps } from "@/interfaces/interface";
import ActionLink from "@/components/ActionLink";


const GuideCard: React.FC<GuideCardProps> = ({
  title,
  description,
  linkText,
  thumbnail
}) => {
  return (
    <div className="group border flex flex-1 text-center flex-col rounded-xl border-neutral-600 max-w-96">
      <div className="shadow-xl flex-1 justify-between p-4 shadow-neutral-700/50 flex flex-col gap-4">
        <div className="">
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <div className="">
          <p className="text-neutral-400">{description}</p>
        </div>
        <div className="">
          <ActionLink link="#" text={linkText} />
        </div>
      </div>
      <div className="">
        <div className="relative h-48 bg-cover overflow-hidden">
          <Image src={thumbnail || ""} className="h-full rounded-b-xl group-hover:scale-110 transition-all ease-in-out duration-200 object-cover" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default GuideCard;

import Image from "next/image";
import React from "react";
import { TrusteeCardProps } from "@/interfaces/interface";

const TrusteeCard: React.FC<TrusteeCardProps> = ({ trustee }) => {
  return (
    <div
      title={trustee.companyName}
      className="rounded-xl p-4 flex flex-col justify-between gap-4 w-[25rem] min-w-[20rem] flex-1 card-bg-blur bg-neutral-50 border border-transparent hover:border-neutral-500 bg-opacity-15"
    >
      <div className="relative">
        <Image src={trustee.logo} fill alt={trustee.companyName} />
      </div>
      <div className="">
        <p className="">&quot;{trustee.detail}&quot;</p>
      </div>
      <div className="flex gap-4">
        <div className="relative size-12">
          <Image
            src={trustee.profile}
            className="rounded-lg"
            fill
            alt={trustee.name}
          />
        </div>
        <div className="">
          <p className="font-bold">{trustee.name}</p>
          <p className="text-neutral-400 font-bold">{trustee.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TrusteeCard;

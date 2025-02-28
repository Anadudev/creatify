import React from "react";
import Image from "next/image";
import { TestimonialCardProps } from "@/interfaces/interface";
import ActionLink from "@/components/ActionLink";

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimony,
  isCurrent,
}) => {
  return (
    <div
      className={`flex border border-neutral-700 hover:border-neutral-600  ease-in-out rounded-2xl sm:w-[33rem] mx-auto h-64 gap-1 sm:gap-4 bg-neutral-900 absolute transition-transform duration-300 top-12 ${
        isCurrent ? "" : ""
      }`}
    >
      <div
        title={testimony.companyName}
        style={{
          background: `linear-gradient(140deg, ${testimony.color} 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)`,
        }}
        className="flex-2 flex flex-col gap-4 justify-between p-4 rounded-tl-2xl rounded-bl-2xl"
      >
        <div className="relative h-5 sm:h-7 w-full">
          <Image
            src={testimony.companyLogo}
            alt={testimony.companyName}
            fill
            className="object-contain"
          />
        </div>
        <div className="space-y-2">
          <p className="uppercase text-sm sm:text-base font-bold text-neutral-500">
            integrated apps
          </p>
          <div className="flex gap-2">
            {testimony.integratedApps?.map((app, index) => (
              <app.icon
                style={{ backgroundColor: testimony.color }}
                key={index}
                size={30}
                className="p-1 rounded-full"
              />
            ))}
          </div>
        </div>
        <ActionLink text="Case study" link="#" />
      </div>
      <div className="flex flex-col justify-center flex-1 space-y-4 text-sm sm:text-base p-2 sm:p-4">
        <div className="">
          <p className="font-bold text-neutral-50">{testimony.name}</p>
          <span className="capitalize font-bold text-neutral-500">
            {testimony.title}
          </span>
        </div>
        <p className="">&quot;{testimony.testimony}&quot;</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

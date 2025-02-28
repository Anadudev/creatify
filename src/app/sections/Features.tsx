import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { features } from "@/lib/data/features.data";
import Image from "next/image";

const Features = () => {
  return (
    <section className="max-w-6xl mx-auto space-y-8 px-2">
      <SectionTitle
        title="Taking design tokens to the next level"
        description="Creatify helps you gain control over your design system across teams and products"
        primaryButton="Book demo"
        secondaryButton="Start for free"
      />
      <div className="relative max-w-7xl mx-auto space-y-12 m:space-y-0">
        {features.map((feature, index) => (
          <div key={index} className={`sm:flex group cursor-default transition-all ease-in-out duration-300`}>
            <div className="md:w-[45%] group-even:border-y border-neutral-600 p-4 space-y-2">
              <div className="flex group-hover:text-primary gap-2">
                <feature.icon className="size-3" />
                <h3 className="font-bold text-sm">
                  {feature.title}
                </h3>
              </div>
              <p className="text-neutral-400 group-hover:text-neutral-300">{feature.description}</p>
            </div>
            <div
              className={`md:absolute flex items-center md:w-1/2 right-0 h-full group-hover:z-10 top-0 ${
                index === 0 ? "" : "-z-10"
              }`}
            >
              <div className={`relative flex-1 h-full w-full aspect-[3/2] max-h-[20rem] my-auto`}>
                <Image
                  src={feature.image}
                  fill
                  alt={feature.title}
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

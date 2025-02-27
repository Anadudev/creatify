import SectionTitle from "@/components/SectionTitle";
import { ChevronsDown, ChevronsUp, SquareDot } from "lucide-react";
import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Unified desgin language",
    group: "unified",
    icon: ChevronsDown,
    description:
      "Manage your design tokens in one place. You can easily export them to your favorite tools and libraries.",
    image: "/features/unified-design.jpg",
  },
  {
    title: "Effortless collaboration",
    group: "collaboration",
    icon: SquareDot,
    description:
      "Creatify provides a collaboration space where designers can sync design tokens, and developers can seamlessly integrate design tokens into their platform.",
    image: "/features/collaboration.jpg",
  },
  {
    title: "Customizable workflows",
    group: "workflows",
    icon: ChevronsUp,
    description:
      "Tailor your Creatify to your team's unique workflow. No matter how specific your design and development processes are, our platform adapts to your needs.",
    image: "/features/workflow.jpg",
  },
];

const Features = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <SectionTitle
        title="Taking design tokens to the next level"
        description="Creatify helps you gain control over your design system across teams and products"
        primaryButton="Book demo"
        secondaryButton="Start for free"
      />
      <div className="relative max-w-7xl mx-auto ">
        {features.map((feature, index) => (
          <div key={index} className={`flex group cursor-default transition-all ease-in-out duration-300`}>
            <div className="w-[45%] group-even:border-y border-neutral-600 p-4 space-y-2">
              <div className="flex group-hover:text-primary gap-2">
                <feature.icon className="size-3" />
                <h3 className="font-bold text-sm">
                  {feature.title}
                </h3>
              </div>
              <p className="text-neutral-400 group-hover:text-neutral-300">{feature.description}</p>
            </div>
            <div
              className={`absolute flex items-center w-1/2 right-0 h-full group-hover:z-10 top-0 ${
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

import React from "react";
import GuideCard from "@/components/GuideCard";
import SectionTitle from "@/components/SectionTitle";
import { resources } from "@/lib/data/about.data";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto space-y-8 px-2">
      <div className="">
        <hr className="border-neutral-700" />
      </div>
      <div className="">
        <SectionTitle title="Design tokens are the heart of your design system" />
      </div>
      <div className="flex flex-col sm:flex-row w-fit mx-auto gap-4">
        {resources.map((resource, index) => (
          <GuideCard
            key={index}
            title={resource.title}
            description={resource.description}
            linkText={resource.linkText}
            thumbnail={resource.thumbnail}
          />
        ))}
      </div>
    </section>
  );
};

export default About;

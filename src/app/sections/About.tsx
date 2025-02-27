import GuideCard from "@/components/GuideCard";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const resources = [
  {
    title: "Design tokens and assets",
    description:
      "Clearify supports color, text styles, shadows, dimensions, bitmaps, vectors, font files, and many more. All of them are automatically synced and updated",
    linkText: "View documentation",
    thumbnail: "/about/about1.jpg",
  },
  {
    title: "Export production-ready code",
    description:
      "Use our templates to generate design tokens for any platform,  ranging from CSS, Tailwind, React to react Native, Flutter, Style Dictionary and more.",
    linkText: "Discover our template",
    thumbnail: "/about/about2.jpg",
  },
];

const About = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="pt-2">
        <hr className="border-neutral-700" />
        <SectionTitle title="Design tokens are the heart of your design system" />
      </div>
      <div className="flex w-fit mx-auto gap-4">
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
      <div className="">
        <SectionTitle
          title="Start automation your design system today"
          primaryButton="Book demo"
        />
      </div>
    </section>
  );
};

export default About;

import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { PlayCircle } from "lucide-react";
import GuideCard from "../../components/GuideCard";
import GuideListItem from "../../components/GuideListItem";
import { guideList, guides } from "@/lib/data/guide.data";

const Guide = () => {
  return (
    <section className=" max-w-6xl mx-auto space-y-8 px-2">
      <SectionTitle
        title="Easy setup and instant output"
        description="Noting has been more easy for designers and more customizable for developers"
        primaryButton="Book demo"
        secondaryButton="watch video"
        SecondaryIcon={PlayCircle}
      />
      <div className="flex flex-col sm:flex-row w-fit mx-auto gap-4">
        {guides.map((guide, index) => (
          <GuideCard
            key={index}
            title={guide.title}
            description={guide.description}
            linkText={guide.linkText}
            thumbnail={guide.thumbnail}
          />
        ))}
      </div>
      <div className="responsive-grid gap-4 justify-center ">
        {guideList.map((guide, index) => (
          <GuideListItem
            key={index}
            Icon={guide.icon}
            title={guide.title}
            body={guide.body}
            linkText={guide.linkText}
          />
        ))}
      </div>
    </section>
  );
};

export default Guide;

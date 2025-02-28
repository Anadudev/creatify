import SectionTitle from "@/components/SectionTitle";
import {
  Boxes,
  Earth,
  PlayCircle,
  Section,
  Settings,
  SlidersHorizontal,
  UsersRound,
  Zap,
} from "lucide-react";
import React from "react";
import GuideCard from "../../components/GuideCard";
import GuideListItem from "../../components/GuideListItem";

const guides = [
  {
    title: "Sync your tokens",
    description:
      "Creatify is natively compatible with Figma, GitHub, Notion, Raycast, and nay more to come. Our REST API and CLI help you to connect even more.",
    linkText: "Discover all available apps",
    thumbnail: "/guide/guide1.jpg",
  },
  {
    title: "Customize outputs",
    description:
      "Creatify's opensource parsers help you generate design tokens and assets that match your company standards",
    linkText: "Discover all parsers",
    thumbnail: "/guide/guide2.jpg",
  },
];

const guideList = [
  {
    icon: Boxes,
    title: "Stay flexible",
    body: "Sync tokens from multiple sources to one repository, extract them in any structure using our SDK, GitHub integration, or CLI. we got you covered once you want to scale.",
  },
  {
    icon: UsersRound,
    title: "Reduce errors margins",
    body: "Collaboration has never been easier, resulting in less errors and redundant meeting. Any change is easily transformed and communicated with you other teams.",
  },
  {
    icon: Zap,
    title: "Automate",
    body: "Automatically sync, convert,and optimize your design token and vectors. Set up automated pull request with out GitHub integration.",
  },
  {
    icon: Settings,
    title: "Save time",
    body: "Set up once, get benefits instantly. We guarantee time savings fro your design and development teams while you keep doing what you're good at and what you enjoy.",
  },
  {
    icon: SlidersHorizontal,
    title: "Prioritize quality",
    body: "When you're able to put quality above anything else, it means your processes are well adopted. We cn help you to prioritize the quality your digital products.",
  },
  {
    icon: Earth,
    title: "Get teh support you needed",
    body: "We're here to help you to get the output you need. Feel free to challenge us if  you think your output is not possible",
    likText: "read more here.",
  },
];

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
          />
        ))}
      </div>
    </section>
  );
};

export default Guide;

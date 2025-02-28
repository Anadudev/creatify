import SectionTitle from "@/components/SectionTitle";
import TrusteeCard from "@/components/TrusteeCard";
import React from "react";
import Marquee from "react-fast-marquee";

const trustees = [
  {
    logo: "/logos/airbnb.svg",
    companyName: "airbnb",
    detail:
      "Creatify has been a game-changer for our design system. It has made it easier for us to manage our design tokens and collaborate with our development team.",
    profile: "/profile/profile5.jpg",
    name: "Jim El Abbassi",
    title: "Front-end developer",
  },
  {
    logo: "/logos/airbnb.svg",
    companyName: "pocket",
    detail:
      "Creatify helps our designers keep their assets and design decisions in sync with the actual code, avaiding extra development effort and making design implementation much more flexible.",
    profile: "/profile/profile1.jpg",
    name: "Niels Boey",
    title: "Product designer",
  },
  {
    logo: "/logos/airbnb.svg",
    companyName: "makemusic",
    detail:
      "Ceatify is the missing link between our design and engineering teams. I definitely helped us integrate design tokens in an automated way very quickly and seamlessly into our codebase.",
    profile: "/profile/profile2.jpg",
    name: "Gabriel Cousin",
    title: "Front-end developer",
  },
  {
    logo: "/logos/airbnb.svg",
    companyName: "pelo studio",
    detail:
      "Creatify is the best perfect addition to our front-end boilerplate. Tokens, assets, fonts: everything comes straight out from Figma, Less configuration, more creative development, more creative development. our team loves it!",
    profile: "/profile/profile3.jpg",
    name: "Alexis Oney",
    title: "Lead Developer",
  },
  {
    logo: "/logos/airbnb.svg",
    companyName: "pelo studio",
    detail:
      "The automated workflow is a game-changer for our design system. It has made it easier for us to manage our design tokens and collaborate with our development team.",
    profile: "/profile/profile4.jpg",
    name: "Roy Oney",
    title: "Lead Designer",
  },
];

const Trustees = () => {
  return (
    <section className="space-y-8 p-2 sm:p-0">
      <SectionTitle
        title="Trusted by product teams"
        description="Book your demo and start automating the distribution of you design -- your team will love it"
        primaryButton="Book demo"
        secondaryButton="Get started with Creatify"
      />
      <div className="bg-gradient-to-b from-violet-950 via-blue-700 to-violet-700 gap-4 py-24 rounded-3xl">
        <Marquee autoFill pauseOnHover speed={30}>
          <div className="flex overflow-y-auto gap-4 mx-2">
            {trustees.map((trustee, index) => (
              <TrusteeCard key={index} trustee={trustee} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Trustees;

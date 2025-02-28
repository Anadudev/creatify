import React from "react";
import SectionTitle from "@/components/SectionTitle";
import TrusteeCard from "@/components/TrusteeCard";
import { trustees } from "@/lib/data/trustees.data";
import Marquee from "react-fast-marquee";


const Trustees = () => {
  return (
    <section className="space-y-8">
      <SectionTitle
        title="Trusted by product teams"
        description="Book your demo and start automating the distribution of you design -- your team will love it"
        primaryButton="Book demo"
        secondaryButton="Get started with Creatify"
      />
      <div className="bg-gradient-to-b from-violet-950 via-blue-700 to-violet-700 gap-4 py-9 sm:py-24 rounded-2xl">
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

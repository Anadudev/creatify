import React from "react";
import { lovedByCompanyLogos } from "@/lib/data/lovedBy.data";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const LovedBy = () => {
  return (
    <section className="space-y-8 px-2">
      <h2 className="text-xl font-bold text-center">Creatify is loved by</h2>
      <Marquee autoFill pauseOnHover>
        <div className="flex overflow-hidden gap-9">
          {lovedByCompanyLogos.map((logo, index) => (
            <div
              key={index}
              className="relative min-w-20 size-20 cursor-pointer flex-1"
              title={logo.name}
            >
              <Image fill src={logo.logo} alt={logo.name} />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default LovedBy;

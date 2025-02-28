import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const lovedByCompanyLogos = [
  {
    name: "Adobe",
    logo: "/logos/adobe-44195.svg",
  },
  {
    name: "Alfa Capital",
    logo: "/logos/alfa-capital.svg",
  },
  {
    name: "Coteau du Lac",
    logo: "/logos/coteau-du-lac-1307.svg",
  },
  {
    name: "Disney",
    logo: "/logos/disney-white.svg",
  },
  {
    name: "Fendi Watches",
    logo: "/logos/fendi-watches.svg",
  },
  {
    name: "Fila Watches",
    logo: "/logos/fila-watches.svg",
  },
  {
    name: "Indeed",
    logo: "/logos/indeed-logo.svg",
  },
  {
    name: "LG Electronics",
    logo: "/logos/lg-electronics.svg",
  },
  {
    name: "LinkedIn",
    logo: "/logos/linkedin-icon-1.svg",
  },
  {
    name: "Amazon",
    logo: "/logos/logo-amazon.svg",
  },
  {
    name: "Mobil",
    logo: "/logos/mobil-logo-1.svg",
  },
  {
    name: "Oryon",
    logo: "/logos/oryon-icon.svg",
  },
  {
    name: "Spotify",
    logo: "/logos/spotify-logo.svg",
  },
  {
    name: "TED",
    logo: "/logos/ted-2.svg",
  },
  {
    name: "Yamada",
    logo: "/logos/yamada-3.svg",
  },
];

const LovedBy = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-xl font-bold text-center">
        Creatify is loved by
      </h2>
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

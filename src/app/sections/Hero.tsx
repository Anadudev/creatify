import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-16 space-y-9 max-w-6xl mx-auto">
      <Link href={'#'} className="text-black font-bold bg-neutral-50 w-fit px-4 py-2 rounded-full mx-auto flex items-center justify-center gap-4 cursor-pointer text-sm">
        <p className="">Learn About the Creatify Design Token Format</p>
        <ArrowRight
          size={20}
          className="bg-black text-neutral-50 p-1 rounded-full"
        />
      </Link>
      <h1 className="bg-gradient-to-r from-violet-200 to-violet-700 bg-clip-text font-extrabold text-transparent text-7xl capitalize text-center">
        your design token engine
      </h1>
      <p className="mx-auto max-w-lg text-center">
        Flexible and powerful, Creatify makes it easy to build the exact Design
        Token workflow your Design System needs.
      </p>
      <div className="mx-auto space-x-4 w-fit font-bold">
        <Button>Book demo</Button>
        <Button className="bg-transparent border hover:bg-transparent">
          Start for free <ArrowRight size={16} />
        </Button>
      </div>
      <div className="w-full">
        <div className="inner-shadow-rb inner-shadow-tl relative md:w-[80%] bg-cover bg-center max-w-4xl h-96 md:h-[25rem] mx-auto rounded-3xl">
          <Image
            src="/hero-illustration.jpg"
            className="aspect-square shadow-xl  rounded-3xl -z-10"
            fill
            alt="Hero Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

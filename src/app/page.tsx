import Hero from "@/app/sections/Hero";
import LovedBy from "@/app/sections/LovedBy";
import Features from "@/app/sections/Features";
import Testimonials from "@/app/sections/Testimonials";
import Guide from "@/app/sections/Guide";
import Trustees from "@/app/sections/Trustees";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <LovedBy />
      <Features />
      <Testimonials />
      <Guide />
      <Trustees />
    </div>
  );
}

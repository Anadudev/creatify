import Hero from "@/app/sections/Hero";
import LovedBy from "@/app/sections/LovedBy";
import Features from "@/app/sections/Features";
import Testimonials from "@/app/sections/Testimonials";
import Guide from "@/app/sections/Guide";
import Trustees from "@/app/sections/Trustees";
import About from "@/app/sections/About";

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />
      <LovedBy />
      <Features />
      <Testimonials />
      <Guide />
      <Trustees />
      <About />
    </div>
  );
}

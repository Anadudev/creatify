"use client";
import React from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/data/testimonials.data";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  // const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    // setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section>
      <div className="w-full py-8 px-2">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full flex justify-center items-center overflow-hidden"
        >
          <CarouselContent className="flex gap-2 mx-auto max-w-4xl">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                style={{ overflow: "visible" }} // Ensure visibility
                className={`relative h-80 flex items-center justify-center sm:min-w-[33rem] w-screen`}
              >
                <TestimonialCard
                  testimony={testimonial}
                  isCurrent={index === current - 1}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;

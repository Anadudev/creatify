"use client";
import React, { useState } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonials } from "@/lib/data/testimonials.data";
import { settings } from "@/lib/config/slider.config";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    setCurrentSlide(newIndex);
  };
  return (
    <section>
      <div className="w-full py-8 px-2">
        <Slider
          {...settings}
          className="relative"
          beforeChange={handleBeforeChange}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{ overflow: "visible" }} // Ensure visibility
              className={`relative h-80`}
            >
              <TestimonialCard
                testimony={testimonial}
                isCurrent={index === currentSlide}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

"use client";
import React, { useState } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { Braces, Receipt } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonials = [
  {
    companyName: "Indeed",
    companyLogo: "/logos/indeed-logo.svg",
    color: "blue",
    name: "Jeremy Dehan",
    title: "Design system designer",
    testimony:
      "Creatify brought us confidence and ease of mind. Before, we used to be cautious and hesitant before updating our design tokens. We're now confident about updating a token, rolling back to previous version, or even trying new ones",
    integratedApps: [
      {
        name: "app name",
        url: "#",
        icon: Braces,
      },
      {
        name: "app name",
        url: "#",
        icon: Receipt,
      },
    ],
  },
  {
    companyName: "Fendi Watches",
    companyLogo: "/logos/fendi-watches.svg",
    color: "green",
    name: "Andrew Smith",
    title: "Design system designer",
    testimony:
      "Thanks to Creatify, we've been able to effectively manage our design tokens and collaborate with our development team. It's been a game-changer for us!",
    integratedApps: [
      {
        name: "app name",
        url: "#",
        icon: Braces,
      },
      {
        name: "app name",
        url: "#",
        icon: Receipt,
      },
    ],
  },
  {
    companyName: "Fila Watches",
    companyLogo: "/logos/fila-watches.svg",
    color: "red",
    name: "John Doe",
    title: "Design system designer",
    testimony:
      "Creatify has been a game-changer for our design system. It has made it easier for us to manage our design tokens and collaborate with our development team.",
    integratedApps: [
      {
        name: "app name",
        url: "#",
        icon: Braces,
      },
      {
        name: "app name",
        url: "#",
        icon: Receipt,
      },
    ],
  },
  // {
  //   companyName: "Adobe",
  //   companyLogo: "/logos/adobe-44195.svg",
  //   color: "purple",
  //   name: "John Doe",
  //   title: "Design system designer",
  //   testimony:
  //     "Creatify has been a game-changer for our design system. It has made it easier for us to manage our design tokens and collaborate with our development team.",
  //   integratedApps: [
  //     {
  //       name: "app name",
  //       url: "#",
  //       icon: Braces,
  //     },
  //     {
  //       name: "app name",
  //       url: "#",
  //       icon: Receipt,
  //     },
  //   ],
  // },
];

const settings = {
  dots: true,
  // infinite: true,
  speed: 500,
  slidesToShow: 3, // Show 3 cards at once
  // slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  // centerMode: true,
  focusOnSelect: true,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    setCurrentSlide(newIndex);
  };
  return (
    <section>
      <div className="w-full py-8">
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

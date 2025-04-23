"use client";

import React, { useState } from "react";
import Navbar from "@/Components/Navbar";

const slides = [
  {
    image: "/images/1.jpg",
    heading: "Herbs and Spices",
    subheading: "FLAT 10% OFF",
    coupon: "USE COUPON: 1234",
  },
  {
    image: "/images/2.jpg",
    heading: "Organic Masalas",
    subheading: "Buy 1 Get 1 Free",
    coupon: "USE COUPON: MASALA",
  },
  {
    image: "/images/4.jpg",
    heading: "Homegrown Spices",
    subheading: "20% OFF Today",
    coupon: "USE COUPON: SPICE20",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Loop back to first slide
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length // Loop back to last slide
    );
  };

  return (
    <section className="relative lg:h-[120vh] h-screen overflow-hidden">
      <Navbar />

      {/* Slide Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Horizontal sliding effect
          width: `${slides.length * 100}%`, // Ensure that all slides are in one line horizontally
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Text Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-5xl font-serif italic font-semibold">{slide.heading}</h2>
              <h3 className="text-4xl mt-4 text-yellow-500 border-t border-red-500 border-b py-2">
                {slide.subheading}
              </h3>
              <h3 className="text-2xl mt-2 text-yellow-500">
                {slide.coupon.split(":")[0]}:{" "}
                <span className="text-white font-bold">{slide.coupon.split(":")[1]}</span>
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-6 justify-between w-full absolute top-[10%] px-3 mt-10">
        <button
          onClick={prevSlide}
          className="px-3 py-2 rounded-full bg-white text-black hover:bg-yellow-500 transition"
        >
          ⬅
        </button>
        <button
          onClick={nextSlide}
          className="px-3 py-2 rounded-full bg-white text-black hover:bg-yellow-500 transition"
        >
          ➡
        </button>
      </div>
    </section>
  );
};

export default Hero;

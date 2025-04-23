"use client";

import Navbar from "@/Components/Navbar";
import { useState } from "react";
import { GrLinkNext, GrPrevious } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
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

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollCarousel = (direction) => {
    const newIndex = (currentIndex + direction + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="w-full   h-screen">
      {/* <Navbar/> */}
      <div className="overflow-hidden absolute top-0 ">
        <div
          className="flex transition-transform duration-500 ease-in-out transform"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-screen relative">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>

              {/* Text Content */}
              <div className="absolute top-[59%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
                <h2 className="sm:text-5xl  text-2xl mt-10 font-serif italic font-semibold">
                  {slide.heading}
                </h2>
                <h3 className="sm:text-4xl text-[20px] mt-4 text-yellow-500 border-t border-red-500 border-b py-2">
                  {slide.subheading}
                </h3>
                <h3 className="sm:text-2xl  text-bold text-[17px] mt-2 text-yellow-500">
                  {slide.coupon}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 sm:p-3 p-1 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
        onClick={() => scrollCarousel(-1)}
        aria-label="Previous Slide"
      >
      <GrLinkPrevious/>
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 sm:p-3 p-1 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
        onClick={() => scrollCarousel(1)}
        aria-label="Next Slide"
        >
          <GrLinkNext/>
      </button>
    </section>
  );
}

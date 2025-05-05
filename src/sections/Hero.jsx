"use client";

import Navbar from "@/Components/Navbar";
import { useState } from "react";
import { GrLinkNext, GrPrevious } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
const slides = [
  {
    image: "/images/1.jpg",
    heading: "Herbs & Spices",
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
    <section className="w-full   h-[111.5vh]  ">
      {/* <Navbar/> */}
      <div className="overflow-hidden absolute top-0 ">
        <div
          className="flex transition-transform duration-500 ease-in-out transform"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-[130vh]  overflow-x-hidden  relative"
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>

              {/* Text Content */}
              <div className="absolute    p-[20px] w-[70%]  flex flex-col items-center justify-center md:bg-transparent  lg:top-[50%]   md:top-[50%] top-[50%] sm:top-[40%] bg-black  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
                <h1 className="    text-[43px] md:text-[58px]   px-[30px] mb-[10px]">
                  {slide.heading}
                </h1>
                <h3 className=" font-serif text-[30px] md:text-[40px] lg:w-[40%]  text-yellow-500 border-t border-red-500 border-b  mt-0 lg:mb-[10px] mb-[20px] mx-[20px]">
                  {slide.subheading}
                </h3>
                <h3 className=" font-serif md:text-[26px] mb-[10px] text-bold text-[17px] text-yellow-500">
                  {slide.coupon}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <button
        className="absolute top-[60%] left-2 transform -translate-y-1/2 sm:p-3 p-1 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
        onClick={() => scrollCarousel(-1)}
        aria-label="Previous Slide"
      >
        <GrLinkPrevious />
      </button>
      <button
        className="a"
        onClick={() => scrollCarousel(1)}
        aria-label="Next Slide"
      >
        <GrLinkNext />
      </button> */}

      <button
        onClick={() => scrollCarousel(-1)}
        className=" flex items-center justify-center absolute top-[60%] left-2 transform -translate-y-1/2 sm:p-3 text-[24px] rounded-full text-white hover:bg-opacity-75 focus:outline-none  border-amber-900 w-[40px] h-[40px] border-2 transition-all duration-500 bg hover:border-yel-color hover:bg-yel-color cursor-pointer"
      >
        {"<"}
      </button>
      <button
        onClick={() => scrollCarousel(1)}
        className=" flex items-center justify-center  absolute top-[60%] right-2 transform -translate-y-1/2 sm:p-3 text-[24px] rounded-full text-white hover:bg-opacity-75 focus:outline-none  border-amber-900 w-[40px] h-[40px] border-2 transition-all duration-500 bg hover:border-yel-color hover:bg-yel-color cursor-pointer"
      >
        {">"}
      </button>
    </section>
  );
}

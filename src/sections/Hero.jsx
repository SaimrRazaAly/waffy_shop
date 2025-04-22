"use client";

import React, { useState } from 'react';

const slides = [
  {
    image: '/images/1.jpg',
    heading: 'Herbs and Spices',
    subheading: 'FLAT 10% OFF',
    coupon: 'USE COUPON: 1234',
  },
  {
    image: '/images/2.jpg',
    heading: 'Organic Masalas',
    subheading: 'Buy 1 Get 1 Free',
    coupon: 'USE COUPON: MASALA',
  },
  {
    image: '/images/4.jpg',
    heading: 'Homegrown Spices',
    subheading: '20% OFF Today',
    coupon: 'USE COUPON: SPICE20',
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slide */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50 transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      ></div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-5xl font-serif italic font-semibold">
          {slides[currentIndex].heading}
        </h2>
        <h3 className="text-4xl mt-4 text-yellow-500 border-t border-red-500 border-b py-2">
          {slides[currentIndex].subheading}
        </h3>
        <h3 className="text-2xl mt-2 text-yellow-500">
          {slides[currentIndex].coupon.split(':')[0]}:{' '}
          <span className="text-white font-bold">
            {slides[currentIndex].coupon.split(':')[1]}
          </span>
        </h3>

        {/* Buttons */}
        <div className="flex gap-6 mt-10">
          <button
            onClick={prevSlide}
            className="px-6 py-2 bg-white text-black rounded-lg hover:bg-yellow-500 transition"
          >
            ⬅ Prev
          </button>
          <button
            onClick={nextSlide}
            className="px-6 py-2 bg-white text-black rounded-lg hover:bg-yellow-500 transition"
          >
            Next ➡
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

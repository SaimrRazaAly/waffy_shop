"use client";

import React, { useState } from "react";
import Border_Btn from "@/Components/Border_Btn";
import Sec_Heading from "@/Components/Sec_Heading";
import { Blog_Post_data } from "@/constants/data";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { HiCalendarDateRange } from "react-icons/hi2";
import { LiaCommentsSolid } from "react-icons/lia";

import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const Blog_Post = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === Blog_Post_data.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Blog_Post_data.length - 1 : prev - 1
    );
  };

  return (
    <section className="my-10 overflow-hidden xl:px-30">
      <Sec_Heading
        title={"Blog Post"}
        para={"Suspendisse potenti nullam ac tortor vitae purus faucibus orn."}
      />

      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${Blog_Post_data.length * 100}%`,
            transform: `translateX(-${
              currentIndex * (100 / Blog_Post_data.length)
            }%)`,
          }}
        >
          {Blog_Post_data.map((v) => (
            <div
              key={v.id}
              className="w-full relative flex-shrink-0 px-5 flex flex-col xl:flex-row items-center justify-center gap-5 border border-amber-400 p-2"
              style={{ width: `${100 / Blog_Post_data.length}%` }}
            >
              {/* Image */}
              <div className="lg:w-[400px] lg:h-[300px] relative w-full sm:h-[500px] h-[400px] rounded-md overflow-hidden">
                <Image
                  src={v.image}
                  alt={v.title}
                  fill
                  className="object-center object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-5 items-start">
                <h2 className="text-4xl font-bold font-serif">{v.title}</h2>
                <ul className="flex gap-2 flex-wrap text-[18px]">
                  <li className="flex gap-1 items-center">
                    <span className="text-amber-900">
                      <FaUser />
                    </span>
                    {v.author} |
                  </li>
                  <li className="flex gap-1 items-center">
                    <span className="text-amber-900">
                      <HiCalendarDateRange />
                    </span>
                    {v.date} |
                  </li>
                  <li className="flex gap-1 items-center">
                    <span className="text-amber-900">
                      <LiaCommentsSolid />
                    </span>
                    {v.comments} comments
                  </li>
                </ul>
                <p>{v.description}</p>
                <Border_Btn title={"Read More"} />
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-5 mt-5">
          <button
            onClick={prevSlide}
            className="bg-amber-500 text-white px-2 py-2 rounded-full cursor-pointer"
          >
            <GrLinkPrevious />
          </button>
          <button
            onClick={nextSlide}
            className=" bg-amber-500 text-white px-2 py-2 rounded-full cursor-pointer"
          >
            <GrLinkNext />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog_Post;

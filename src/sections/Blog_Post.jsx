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
import Link from "next/link";

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
    <section className="overflow-hidden px-[30px] lg:px-[40px] mt-[100px] mb-[50px]  relative">
      <Sec_Heading
        title={"Blog Post"}
        para={"Suspendisse potenti nullam ac tortor vitae purus faucibus orn."}
      />

      <div className="relative w-[100%]  mx-[0px] overflow-hidden">
        <div
          className="flex items-center justify-center transition-transform gap-2 duration-500 ease-in-out overflow-hidden"
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
              className="w-full relative  flex flex-col lg:px-[40px]  tlg:flex-row items-center justify-center overflow-hidden "
              style={{ width: `${100 / Blog_Post_data.length}%` }}
            >
              {/* Image */}
              <div className="relative w-full tlg:w-[85%]  tlg:h-[271px] lg:h-[700px] mr-[30px] sm:h-[400px]  h-[260px] rounded-md ">
                <Image
                  src={v.image}
                  alt={v.title}
                  fill
                  className="object-center object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col items-start p-[30px] ">
                <Link href={"/colletion/all"}>
                  <h2 className="text-[20.4px] font-bold font-serif mb-[12px]">
                    {v.title}
                  </h2>
                </Link>
                <ul className="flex  items-center flex-wrap text-[16px] mb-[12px] w-full">
                  <li className="flex  items-center font-light">
                    <span className="text-amber-900 mr-[8px] text-[18px]">
                      <FaUser />
                    </span>
                    {v.author}
                  </li>
                  <span className="px-[15px]">|</span>
                  <li className="flex  items-center font-light">
                    <span className="text-amber-900 mr-[8px] text-[18px]">
                      <HiCalendarDateRange />
                    </span>
                    {v.date}
                  </li>
                  <span className="px-[15px]">|</span>
                  <li className="flex items-center font-light">
                    <span className="text-amber-900 mr-[8px] text-[18px]">
                      <LiaCommentsSolid />
                    </span>
                    {v.comments} comments
                  </li>
                </ul>
                <p className="mb-[20px] text-[16px] lg:w-[85%]">
                  {v.description}
                </p>
                <Border_Btn title={"Read More"} className={"!text-black !mt-0" } />
              </div>
            </div>
          ))}
        </div>

      </div>
        {/* Controls */}
        <div className=" absolute md:top-[65%] top-[58%] w-[90%] md:w-full items-center md:px-[20px]  sm:-left-0 flex justify-between text-[20px] gap-5 mt-5">
          <button
            onClick={prevSlide}
            className=" border-amber-900 sm:translate-x-1 md:translate-0 -translate-x-3 w-[40px] h-[40px] border-2 transition-all duration-500 bg hover:border-yel-color hover:bg-yel-color rounded-full cursor-pointer"
          >
            {"<"}
          </button>
          <button
            onClick={nextSlide}
            className=" border-amber-900 w-[40px] h-[40px] border-2 transition-all duration-500 bg hover:border-yel-color hover:bg-yel-color rounded-full cursor-pointer"
          >
            {">"}
          </button>
        </div>
    </section>
  );
};

export default Blog_Post;

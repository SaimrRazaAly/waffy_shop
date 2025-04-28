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
    <section className="overflow-hidden px-[30px] mt-[100px] mb-[50px] ">
      <Sec_Heading
        title={"Blog Post"}
        para={"Suspendisse potenti nullam ac tortor vitae purus faucibus orn."}
      />

      <div className="relative w-full xl:px-[50px] mx-[15.5px] lg:mx-[30px] px-[30px]">
        <div
          className="flex transition-transform duration-500 ease-in-out "
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
              className="w-full relative flex-shrink-0 h-full    flex flex-col xl:flex-row items-center justify-center "
              style={{ width: `${100 / Blog_Post_data.length}%` }}
            >
              {/* Image */}
              <div className="relative w-[100%] lg:w-[60%] xl:h-[271px] lg:h-[700px] mr-[30px] sm:h-[400px]  h-[260px] rounded-md ">
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
                <p className="mb-[20px] text-[16px] lg:w-[85%]">{v.description}</p>
                <Border_Btn title={"Read More"} />
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className=" absolute top-1/2 sm:top-[52%]  sm:-left-0 -left-4 flex justify-between w-full text-[20px] gap-5 mt-5">
          <button
            onClick={prevSlide}
            className=" border-amber-900 w-[40px] h-[40px] border-2 transition-all duration-500 bg hover:border-yel-color hover:bg-yel-color rounded-full cursor-pointer"
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
      </div>
    </section>
  );
};

export default Blog_Post;

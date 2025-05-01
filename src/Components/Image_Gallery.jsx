"use client";

import Image from "next/image";

import Border_Btn from "./Border_Btn";
import { Items_data } from "@/constants/data";
import Link from "next/link";

const Image_Gallery = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-3 mt-14">
      {/* Left Section */}
      <div className="flex flex-col gap-1 xl:gap-5 xl:flex-row xl:w-[65%]">
        {/* Big Image */}
        <HoverCard extraClass="w-full h-[400px] xl:h-[600px] xl:w-[70%]" />

        {/* Small Images */}
        {/* <div className="md:flex gap-5 md:items-center md:justify-center h-[400px]">
          <div className="flex flex-col md:flex-col  md:gap-3 xl:gap-1 gap-1">
            <HoverCard extraClass="md:w-[200px] md:h-[300px] w-full h-[400px]" />
            <HoverCard extraClass="md:w-[200px] md:h-[300px] w-full h-[400px]" />
          </div> */}

          {/* <div className="md:flex items-center justify-center xl:flex-col gap-1 xl:hidden hidden md:gap-3 xl:gap-1">
            <HoverCard extraClass="md:w-[190px] md:h-[300px] w-full h-[400px]" />
            <HoverCard extraClass="md:w-[170px] md:h-[300px] w-full h-[400px]" />
          // </div>*/}
        {/* </div>  */}
      </div>

<div className="flex">

      <div className=" flex-col gap-1 flex">
          <HoverCard extraClass="md:w-[350px] md:h-[300px] w-full h-[400px]" />
          <HoverCard extraClass="md:w-[350px] md:h-[300px] w-full h-[400px]" />
        </div>
      {/* Right Section */}
      <div className="md:flex gap-4">

        <HoverCard extraClass="w-full md:h-[600px] h-[400px] xl:h-[600px] xl:w-[50%] md:w-[30%]" />

        <div className="flex flex-col gap-1">
          <HoverCard extraClass="md:w-[250px] md:h-[300px] w-full h-[400px]" />
          <HoverCard extraClass="md:w-[250px] md:h-[300px] w-full h-[400px]" />
        </div>
      </div>
</div>
   
      </div>
  );
};

export default Image_Gallery;

// ========== HoverCard component ==========
const HoverCard = ({ extraClass }) => {
  return (
    <div className={`relative group overflow-hidden  ${extraClass}`}>
      <Image
        src={"/images/2.jpg"}
        alt="This"
        fill
        className="object-cover object-center transition-all duration-500 group-hover:scale-110"
      />

      {/* Hover Overlay (Left Side) */}
      <div
        className="absolute inset-0 bg-black/70 group-hover:w-[100%] w-0 top-0 left-1/2 transform
      -translate-x-1/2 flex justify-center items-center text-white transition-all duration-500 ease-in-out"
      />

      {/* Text and Button */}
      <div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-all duration-500 ease-in-out">
        <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center">
          <h2 className="text-2xl font-bold mb-2">Title Here</h2>
          <p className="text-sm mb-4 text-amber-400">
            Subtitle or small description
          </p>
          <Link href={"/collections/all"}>
          <Border_Btn title="Learn More" />
          </Link>
        </div>
      </div>
    </div>
  );
};

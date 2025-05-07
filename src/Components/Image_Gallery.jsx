"use client";

import Border_Btn from "./Border_Btn";
import Link from "next/link";
import Image from "next/image";

// ========== HoverCard component ==========

const HoverCard = ({ extraClass }) => {
  return (
    <div
      className={`relative group overflow-hidden w-full h-[300px] ${extraClass}`}
    >
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
            <Border_Btn title="Learn More" black={false}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

// ========== Image Gallery ==========

const Image_Gallery = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 tlg:grid-cols-6">
      <div className="lg:col-span-3 tlg:col-span-2 tlg:row-span-3">
        <HoverCard extraClass={"lg:!h-[610px]"} />
      </div>
      <div>
        <HoverCard />
      </div>
      <div className="lg:row-span-3 tlg:col-span-2">
        <HoverCard extraClass={"lg:!h-[610px]"} />
      </div>
      <div>
        <HoverCard />
      </div>
      <div>
        <HoverCard />
      </div>
      <div>
        <HoverCard />
      </div>
    </div>
  );
};

export default Image_Gallery;

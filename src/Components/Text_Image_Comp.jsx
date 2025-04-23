import React from "react";
import Image from "next/image";
const Text_Image_Comp = () => {
  return (
    <div className="flex items-center justify-center lg:gap-8 flex-col lg:flex-row gap-5 px-3 md:px-4 lg:px-10 py-10">
      <div className="lg:w-[40%] md:px-5 lg:px-0">
        <h2 className="text-amber-900 sm:text-start text-center text-2xl font-bold font-serif">
          The Richest Masala In The World
        </h2>
        <p className="my-4 text-[16px]">
          Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka
          dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper
          suscipit, posuere a, pede. Donec nec justo eget felis facilisis
          fermentum. Morbi in sem quis dui placerat ornare. Pellentesque odio
          nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
          consequat
        </p>
        <p className="italic border-l px-3 border-black text-[16px]">
          Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse
          urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
          justo eget felis facilisis fermentum. Morbi in sem quis dui placerat
          ornare. Tortor dignissim convallis aenean et tortor. Ac tincidunt
          vitae semper quis lectus nulla at volutpat diam.
        </p>
      </div>
      <div className="">
        <div className="lg:max-w-[500px] lg:max-h-[500px] w-full h-[10%]">
          <img
            src={"/images/4.jpg"}
            alt="Masala"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Text_Image_Comp;

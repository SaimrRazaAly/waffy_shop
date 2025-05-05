"use client";

import Offer_Box from "@/Components/Offer_Box";
import OverLay from "@/Components/OverLay";
import { Offer_data, images } from "@/constants/data";
import Image from "next/image";
import React from "react";

const Offers = ({ row }) => {
  return (
    <section className="mt-5 px-6 pt-16 w-full  mx-auto">
      <div
        className={`w-full  flex flex-col gap-5 justify-center items-center px-6 ${
          row === "row-reverse" ? "tlg:flex-row-reverse" : "tlg:flex-row"
        }`}
      >
        {/* Left Image Section */}
        <div className="w-full  overflow-hidden relative group h-[300px] md:h-[350px] tlg:w-[400px] tlg:h-[620px]">
          <Image
            src={images.Image2}
            alt="Foods"
            fill
            className="object-cover"
          />

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 w-0 bg-black opacity-30 group-hover:w-full transition-all duration-700" />

          {/* Overlay Content */}
          <OverLay
            title="The Flavors of Spices"
            para="50% FLAT OFFER ALL PRODUCTS"
            row={row}
            classes="xl:right-[10%] xl:left-[2%] xl:top-[2%] md:top-[2%] md:left-[2%] xl:bottom-[50%]"
          />
        </div>

        {/* Right Grid Section */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2  place-items-center max-w-[400px] md:max-w-[600px] lg:max-w-[960px] ">
          {Offer_data.map((item) => (
            <Offer_Box
              key={item.id}
              title={item.title}
              image={item.image}
              classes="lg:h-[60%]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;

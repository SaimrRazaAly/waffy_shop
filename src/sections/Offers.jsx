import Offer_Box from "@/Components/Offer_Box";
import { Offer_data, images } from "@/constants/data";
import Image from "next/image";
import React from "react";
import { OverLay } from "@/Components/Offer_Box";

const Offers = () => {
  return (
    <div className=" mx-auto py-5  flex flex-col lg:flex-row gap-5 justify-center  items-center px-2 bg-slate-300">
      <div className="">
        <div className=" md:w-[720px] lg:w-[400px] w-[350px] lg:h-[660px] h-[250px] mt-10 overflow-hidden relative group">
          <Image
            src={images.Image2}
            alt="Foods"
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 w-0 bg-black opacity-30 group-hover:w-full transition-all duration-700 " />

          {/* Content */}
          <OverLay
            title={"The Flavors of Spices"}
            para={"50% FLAT OFFER ALL PRODUCTS"}
            classes={"lg:!bottom-[50%] lg:left-[10%] "}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-rows-2 gap-5">
        {Offer_data.map((item, index) => {
          return (
            <Offer_Box key={item.id} title={item.title} image={item.image} />
          );
        })}
      </div>
    </div>
  );
};

export default Offers;

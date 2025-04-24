import Offer_Box from "@/Components/Offer_Box";
import { Offer_data, images } from "@/constants/data";
import Image from "next/image";
import React from "react";
import { OverLay } from "@/Components/Offer_Box";

const Offers = ({row}) => {
  return (
    <div className={`mx-auto py-5 flex flex-col ${row === "row-reverse" ? "xl:flex-row-reverse" : "xl:flex-row"} gap-5 justify-center items-center px-2`}>

      <div className="">
        <div className=" md:w-[740px] xl:w-[400px] sm:w-[350px] w-[90vw] xl:h-[660px] h-[250px] mt-10 overflow-hidden relative group">
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
            row={row}
            classes={`xl:right-[10%] xl:left-[2%] xl:!top[2%]  md:!top-[2%] md:!left-[2%] xl:bottom-[50%] `}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-rows-2 md:gap-5 gap-2">
        {Offer_data.map((item, index) => {
          return (
            <Offer_Box key={item.id} title={item.title} image={item.image} classes={"!lg:h-[40%]"} />
          );
        })}
      </div>
    </div>
  );
};

export default Offers;

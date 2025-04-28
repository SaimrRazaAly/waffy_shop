
import Offer_Box from "@/Components/Offer_Box";
import OverLay from "@/Components/OverLay";
import { Offer_data, images } from "@/constants/data";
import Image from "next/image";
import React from "react";

const Offers = ({ row }) => {
  return (
    <section className="mt-[20px]">
      <div
        className={`mx-auto w-full py-5 items-center flex gap-5 flex-col ${
          row === "row-reverse" ? "tlg:flex-row-reverse" : "tlg:flex-row"
        }   px-[30px]`}
      >
        <div className="">
          <div className="w-full tlg:w-[400px]   tlg:h-[630px] md:h-[350px] h-[250px] mt-10 overflow-hidden relative group">
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

        <div className="grid md:grid-cols-2 tlg:grid-rows-2 gap-[26px] place-items-center">
          {Offer_data.map((item) => (
            <Offer_Box
              key={item.id}
              title={item.title}
              image={item.image}
              classes="!lg:h-[40%]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;

import Sec_Heading from "@/Components/Sec_Heading";
import Image from "next/image";
import React from "react";
import { Premium_Products_data } from "@/constants/data";
import Border_Btn from "@/Components/Border_Btn";

const Premium_Products = () => {
  return (
    <section className="px-[30px] bg-[#f4f4f4] md:px-[2%] lg:px-[5%] tlg:px-[100px] py-[80px] ">
      <Sec_Heading
        title={"Premium Quality Products"}
        para={
          "At volutpat diam ut venenatis tellus in metus vulputate sit set ramet sagit."
        }
      />
      <div className="grid grid-cols-1 w-full md:grid-cols-2 tlg:grid-cols-4 gap-[30px]  md:gap-0 place-items-center ">
        {Premium_Products_data.map((v, i) => (
          <div
            className=" border-red-900 flex flex-col items-center justify-center mx-auto "
            key={v.id}
          >
            <div className="relative  w-[100%] h-[280px] sm:h-[340px] md:h-[282px] md:w-[90%] tlg:h-[158px] ">
              <Image
                src={v.image}
                alt={v.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center mt-[20px] px-2">
              <h1 className="text-main-color lg:text-[24px] text-[20px] mb-[10px]">
                {v.title}
              </h1>
              <p className="text-[16px] mb-[20px]">{v.description}</p>
              <Border_Btn
                title={"Read more"}
                className={"!mt-[0px] !text-black"}
              />
            </div>
          </div>
        ))}
      </div>
     
    </section>
  );
};

export default Premium_Products;

import Sec_Heading from "@/Components/Sec_Heading";
import Image from "next/image";
import React from "react";
import { Premium_Products_data } from "@/constants/data";
import Border_Btn from "@/Components/Border_Btn";

const Premium_Products = () => {
  return (
    <section className="py-10 md:px-4 px-2 bg-slate-300">
      <Sec_Heading
        title={"Premium Quality Products"}
        para={
          "At volutpat diam ut venenatis tellus in metus vulputate sit set ramet sagit."
        }
      />
      <div className="flex flex-wrap mx-auto items-center justify-center mt-10">
        {Premium_Products_data.map((v, i) => (
          <div
            className="sm:max-w-[300px] px-7 md:px-0 flex flex-col items-center justify-center mx-2 my-5"
            key={v.id}
          >
            <div className="relative w-[300px] h-[280px]">
              <Image
                src={v.image}
                alt={v.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center mt-5 px-2">
              <h2 className="font-bold font-serif mb-5 text-2xl">{v.title}</h2>
              <p className="mb-5">{v.description}</p>
              <Border_Btn title={"Readmore"} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Premium_Products;

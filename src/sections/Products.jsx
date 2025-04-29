import Border_Btn from "@/Components/Border_Btn";
import Product_Card from "@/Components/Cards";
import Glowing_Btn from "@/Components/Glowing_Btn";
import Sec_Heading from "@/Components/Sec_Heading";
import { products } from "@/constants/data";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const Products = () => {
  return (
    <section className="relative border border-transparent">
      <div className="absolute right-0 top-0  ">
        <Image src={"/images/2.jpg"} width={400} height={700} alt="this" />
      </div>
      <div className="absolute left-0 bottom-0  ">
        <Image src={"/images/1.jpg"} width={400} height={800} alt="this" />
      </div>
      <div className=" py-[90px] ">
        <div className="flex items-center justify-center flex-col gap-5 ">
          <Sec_Heading
            title={"Best Products"}
            para={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, veritatis."
            }
          />
          {/*  heading Btn */}
          <div className="flex gap-5 w-full items-center justify-center -mt-1 ">
            <Border_Btn
              title={"Dried Seeds"}
              className={
                "!shadow-xl !text-black !mt-0 !text-[18px] !bg-yel-color ! !border-yel-color"
              }
            />
            <Border_Btn
              title={"Spicy Masalas"}
              className={"hover:!shadow-xl !text-black !mt-0 text-[18px] "}
            />
          </div>

          {/* cards */}
          <div className="flex gap-4 flex-wrap justify-center items-center my-10 z-10">
            {products.map((item, index) => (
              <div
                key={item.id}
                className="flex border-2 text-center  border-amber-200 flex-col items-center justify-center  cursor-pointer shadow-lg bg-white rounded-md p-2"
              >
                <div className="relative w-[100%] h-[186px] md:h-[290px] aspect-[3/4]">
                  <Image
                    src={item.image}
                    alt="Dires"
                    fill
                    className="object-cover object-center md:rounded-full"
                  />
                </div>
                <div className="p-[30px]">
                  <h2 className="main_text text-[20px] font-semibold mb-[10px]">
                    {item.title}
                  </h2>
                  <p className="mb-[10px] text-[16px]">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

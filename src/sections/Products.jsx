import Border_Btn from "@/Components/Border_Btn";
import Product_Card from "@/Components/Cards";
import Glowing_Btn from "@/Components/Glowing_Btn";
import Sec_Heading from "@/Components/Sec_Heading";
import { products } from "@/constants/data";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Product_Card_Shop from "@/Components/Product_Card";
const Products = () => {
  return (
    <section className="relative ">
      <div className="absolute -right-4 top-[-50px] -z-10  ">
        <Image src={"/images/flow1.png"} width={400} height={700} alt="this" />
      </div>
      <div className="absolute left-[-150px] bottom-0 -z-10 ">
        <Image src={"/images/flow1.png"} width={400} height={800} alt="this" />
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
            {products.map((item) => (
              <Product_Card_Shop
                key={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

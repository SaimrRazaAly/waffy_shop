import Border_Btn from "@/Components/Border_Btn";
import Product_Card from "@/Components/Cards";
import Glowing_Btn from "@/Components/Glowing_Btn";
import Sec_Heading from "@/Components/Sec_Heading";
import { products } from "@/constants/data";
import React from "react";

const Products = () => {
  return (
    <section className="pb-[90px]">
      <div className="flex items-center justify-center flex-col gap-5 ">
        <Sec_Heading
          title={"Best Products"}
          para={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, veritatis."
          }
        />
        {/*  heading Btn */}
        <div className="flex gap-5 w-full items-center justify-center ">
          <Border_Btn
            title={"Dried Seeds"}
            className={
              "!shadow-xl !text-black !mt-0 !text-[18px] !bg-yel-color ! border-yel-color"
            }
          />
          <Border_Btn
            title={"Spicy Masalas"}
            className={"hover:!shadow-xl !text-black !mt-0 text-[18px] "}
          />
        </div>

        {/* cards */}
        <div className="flex gap-4 flex-wrap justify-center items-center my-10">
          {products.map((item, index) => (
            <Product_Card
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

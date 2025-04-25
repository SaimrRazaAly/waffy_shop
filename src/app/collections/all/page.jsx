import Border_Btn from "@/Components/Border_Btn";
import Product_Card from "@/Components/Cards";
import Page_Hero_Banner from "@/Components/Page_Hero_Banner";
import { food_list } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Shop_Page = () => {
  return (
    <>
      <Page_Hero_Banner title={" Collection"} />

      <div className="py-10 md:py-20 px-14">
        <div className="mx-auto md:gap-5 gap-3 flex items-center justify-center flex-wrap px-5 py-20">
          {food_list.map((v, i) => {
            return (
              <div
                key={v._id}
                className="flex border-2 border-amber-200 w-full flex-col items-center justify-center md:h-[430px] md:w-[250px] cursor-pointer px-6 py-2 shadow-lg bg-white rounded-md"
              >
                <div className="relative md:w-[200px] w-[100%] h-[200px] aspect-[3/4]">
                  <Image
                    src={v.image}
                    alt="Dires"
                    fill
                    className="object-cover object-center md:rounded-full"
                  />
                </div>
                <h2 className="main_text text-xl mt-3 font-semibold mb-5">
                  {v.name}
                </h2>
                <p className="mb-3">${v.price}</p>
                <Link href={`/products/${v.name.replace(/\s+/g, "-")}`}>
                  <Border_Btn title={"Shop Now"} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shop_Page;

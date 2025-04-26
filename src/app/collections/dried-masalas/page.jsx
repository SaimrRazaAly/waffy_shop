import Plus from "@/app/products/[product_name]/Plus";
import Border_Btn from "@/Components/Border_Btn";
import Product_Card from "@/Components/Cards";
import Page_Hero_Banner from "@/Components/Page_Hero_Banner";
import { food_list } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Dired_Massla = () => {
  return (
    <>
      <Page_Hero_Banner title={" Roaster Seeds"} />

      <div className="py-10 md:py-5 px-14">
        <div className="mx-auto md:gap-5 gap-3 flex items-center justify-center flex-wrap px-5 py-20">
          {food_list.map((v, i) => {
            if (v.category === "Salad" || v.category === "Rolls")
              return (
                <div
                  key={v._id}
                  className="flex  border-2 border-amber-200 w-full flex-col items-center justify-center  md:w-[250px] cursor-pointer px-6 py-2 shadow-lg bg-white rounded-md"
                >
                  <div className="relative md:w-[200px] w-[100%] h-[200px] aspect-[3/4]">
                    <Image
                      src={v.image}
                      alt="Dires"
                      fill
                      className="object-cover object-center md:rounded-full"
                    />
                  </div>
                  <Link href={`/products/${v.name.replace(/\s+/g, "-")}`}>
                    <h2 className="main_text text-xl mt-3 font-semibold mb-5">
                      {v.name}
                    </h2>
                    <p className="mb-3 text-center text-[18px] font-bold">
                      ${v.price}
                    </p>
                  </Link>
                  <div className="  flex items-center gap-4 mb-5  transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <Plus id={v._id} notitle={false} />
                    <Link href={"/cart"}>
                      <span className="p-4 bg-mber-900 cursor-pointer text-gray-900">
                        <FaCartShopping />
                      </span>
                    </Link>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </>
  );
};

export default Dired_Massla;

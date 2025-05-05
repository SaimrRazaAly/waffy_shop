import Border_Btn from "@/Components/Border_Btn";
import Product_Card from "@/Components/Cards";
import Page_Hero_Banner from "@/Components/Page_Hero_Banner";
import Product_Card_Shop from "@/Components/Product_Card";
import { food_list } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Shop_Page = () => {
  return (
    <>
      <Page_Hero_Banner title={" Collection"} />

      <div className="py-10 md:py-5 px-14">
        <div className="mx-auto md:gap-5 gap-3 flex items-center justify-center flex-wrap px-5 py-20">
          {food_list.map((v, i) => {
            return (
           <Product_Card_Shop key={i} image={v.image} price={v.price} title={v.name} show_Btn={true}/>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shop_Page;

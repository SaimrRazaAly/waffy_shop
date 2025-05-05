import Plus from "@/app/products/[product_name]/Plus";
import Border_Btn from "@/Components/Border_Btn";
import Product_Card from "@/Components/Cards";
import Page_Hero_Banner from "@/Components/Page_Hero_Banner";
import Product_Card_Shop from "@/Components/Product_Card";
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
                <Product_Card_Shop image={v.image} price={v.price} key={v._id} title={v.name} />
              );
          })}
        </div>
      </div>
    </>
  );
};

export default Dired_Massla;

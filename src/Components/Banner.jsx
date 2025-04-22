import React from "react";
import Border_Btn from "./Border_Btn";

const Banner = ({ banner1 }) => {
  return banner1 ? (
    <div className="flex text-white items-center lg:px-5 px-2 py-10 lg:min-h-screen md:h-[80vh] bg-[url('/images/2.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="flex flex-col lg:w-[60%]">
        <span>Healthy Herbs</span>
        <h1 className="my-5 md:text-6xl text-4xl text-amber-300 font-bold font-serif">
          Get 10% off <br /> On all Spicy & Herbs
        </h1>
        <p className="md:text-[18px] md:font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nobis
          quasi officiis. Aliquam sapiente eveniet perspiciatis consequatur esse
          cupiditate recusandae.
        </p>
        <div className="mt-5 flex gap-5">
          <Border_Btn title={"View More"} border_color={"amber"} />
          <Border_Btn title={"Shop Now"} border_color={"white"} />
        </div>
      </div>
    </div>
  ) : (
    <div className="relative mt-10 h-[90vh] py-10 w-full gap-5 flex items-center justify-center text-white overflow-hidden">
      {/* Background using `before` */}
      <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/5.jpg')] before:bg-cover before:bg-center before:brightness-50 before:z-0" />

      {/* Text Content */}
      <div className="relative z-10 text-center px-4">
        <p className="text-lg md:text-4xl font-extrabold font-serif mt-4"> Cardamom / Clove / Cumi</p>
        <h1 className="text-4xl md:text-[90px] py-2 font-bold text-amber-400">50% OFF</h1>
        <p className="text-2xl md:text-4xl font-mdeium  text-amber-400"> ALL PRODUCTS</p>
        <div className="flex gap-5 mt-10 items-center justify-center">
          <Border_Btn title={"Shop Now"} />
          <Border_Btn title={"View more"} border_color={"white"} />
        </div>
      </div>
    </div>
  );
};

export default Banner;

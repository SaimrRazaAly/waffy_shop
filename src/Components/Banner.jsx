import React from "react";
import Border_Btn from "./Border_Btn";

const Banner1 = () => {
  return (
    <div className="flex text-white items-center  lg:px-5 px-2 py-10 md:h-[80vh]  bg-[url('/images/2.jpg')]  bg-no-repeat bg-cover bg-center bg-fixed ">
      <div className="flex flex-col lg:w-[60%] ">
        <span>Healthy Herbs</span>
        <h1 className="my-5 md:text-6xl  text-4xl text-amber-300 font-bold font-serif">Get 10% off <br/> On all Spicy & Herbs</h1>
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
  );
};

export default Banner1;

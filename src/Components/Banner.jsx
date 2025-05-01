import React from "react";
import Border_Btn from "./Border_Btn";

const Banner = ({ banner1 }) => {
  return banner1 ? (
    <div className="flex text-white items-center  font  lg:min-h-screen md:h-[80vh] bg-[url('/images/2.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className=" p-[30px]">
        <div className="flex flex-col xl:w-[60%] lg:w-[80%] py-[20px]  px-[15px]">
          <p className="text-light-white text-[20px] mb-[30px]">
            {" "}
            Healthy Herbs
          </p>
          <h1 className="my-5 md:text-6xl text-[50px] text-yel-color  mb-[30px]">
            Get 10% off <br /> On all Spicy & Herbs
          </h1>
          <p className=" text-light-white text-[20px] md:font-medium mb-[30px]">
            Lorem ipsum has become the industry standard for design mockups and
            prototypes. By adding a little bit of Latin to a mockup..
          </p>
          <div className=" flex gap-5">
            <Border_Btn
              title={"View More"}
              border_color={"amber"}
              black={false}
            />
            <Border_Btn title={"Shop Now"} black={false} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="relative mt-10 h-[100vh] py-10 w-full flex items-center justify-center text-white overflow-hidden">
      {/* Background using `before` */}
      <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/5.jpg')] before:bg-cover before:bg-center before:brightness-[0.27] before:z-0" />

      {/* Text Content */}
      <div className="relative z-10 text-center px-[15px]">
        <h1 className="text-[40px] md:text-4xl  mb-[10px] text-light-white">
          Cardamom / Clove / Cumi
        </h1>
        <h2 className="text-[70px] mb-[20px] font-mdeium  text-[#f4b323]">
          50% OFF
        </h2>
        <p className="text-[30px] md:text-4xl font-mdeium  text-[#f4b323] mb-[30px] tracking-[8.8px] w-full">
          ALL PRODUCTS
        </p>
        <div className="flex gap-[15px] -mt-4 items-center justify-center">
          <Border_Btn
            title={"Shop Now"}
            className={
              "!border-white !text-white hover:!text-white !text-[18px] hover:!border-yel-color "
            }
          />
          <Border_Btn
            title={"View more"}
            className={"!text-[18px]"}
            black={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

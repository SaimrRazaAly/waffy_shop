import { Services_data } from "@/constants/data";
import React from "react";

const Services = () => {
  return (
    <section className="mt-[40px] mb-[20px] pt-[100px] pb-[40px]">
      <div className="lg:container m-auto lg:px-[30px]">
        <div className=" flex md:gap-5 text-center md:flex-row  items-center md:justify-center flex-col mb-[30px] px-[30px]">
          {Services_data.map((v) => (
            <div
              key={v.id}
              className="p-[30px] w-full md:w-[336px] md:h-[270px] lg:h-[240px] pt-[70px] border border-slate-300 relative flex flex-col items-center justify-center mb-[80px] rounded-lg shadow-md"
            >
              <div className="absolute -top-5 w-[80px] h-[80px] transition-all duration-300 border border-main-color hover:bg-yel-color flex items-center justify-center rounded-full bg-[#9f4103] mb-5">
                <div className="text-white text-[36px]">{v.icon}</div>
              </div>
              <div className="text-center">
                <h1 className="text-[20px] text-main-color mb-3">{v.title}</h1>
                <p className="text-[16px] leading-[24px]">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

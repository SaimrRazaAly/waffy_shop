import { Services_data } from "@/constants/data";
import React from "react";

const Services = () => {
  return (
    <section>
      <div className=" flex md:gap-5 gap-10 items-center justify-center flex-wrap md:mt-20 mt-10 px-20 py-10">
        {Services_data.map((v, i) => {
          return (
            <div
              key={v.id}
              className="max-w-[350px] h-[250px] relative flex flex-col items-center justify-center  p-5 rounded-lg shadow-md"
            >
              <div className=" absolute -top-2 w-10 h-10 scale-150  flex items-center justify-center rounded-full bg-amber-900 mb-5">
               <div className="scale-125 text-white"> {v.icon}</div>
              </div>
              <div className="mt-10">

              <h2 className="md:text-3xl  text-2xl  text-amber-900 mb-3 font-bold font-serif">{v.title}</h2>
              <p>{v.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

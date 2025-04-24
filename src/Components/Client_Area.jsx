import React from "react";
import Sec_Heading from "./Sec_Heading";
import { LiaStarSolid } from "react-icons/lia";
import { Clients_data } from "@/constants/data";
import Image from "next/image";
const Client_Area = () => {
  return (
    <div className="px-2 py-14 bg-pink-100 ">
      <Sec_Heading
        title={"Our Client Words"}
        para={"Pellentesque at justo porttitor quis"}
      />

      <div className=" grid md:grid-cols-3 grid-cols-1 mt-10 lg:px-20 gap-5  px-5">
        {/* Cards will come here */}
        {Clients_data.map((v, i) => {
          return (
            <div key={i} className="lg:max-w-[400px]">
              <p>
                Fringilla est ullamcorper eget nulla facilisi etiam dignissim
                diam. Ac felis donec et odio pellentesque diam volutpat. Justo
                nec ultrices dui sapien eget mi proin sed libero. Purus ut
                faucibus pulvinar elementum inte.
              </p>
              {/* stars */}
              <div className="flex items-center my-4  gap-1">
                <LiaStarSolid />
                <LiaStarSolid />
                <LiaStarSolid />
                <LiaStarSolid />
                <LiaStarSolid />
              </div>
              <div className="flex items-center  gap-3">
                <Image
                  src={"/images/1Client.jpg"}
                  width={80}
                  height={80}
                  alt="clients"
                  className="object-cover object-center rounded-full"
                />
                <div className="flex items-center gap-2 flex-col sm:flex-row">
                  <h3 className="text-bold">{v.name}</h3>{" "}
                  <span>- {v.profession}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Client_Area;

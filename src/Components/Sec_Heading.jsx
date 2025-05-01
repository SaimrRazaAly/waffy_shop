import Image from "next/image";
import React from "react";

const Sec_Heading = ({ title, para }) => {
  return (
    <div className="text-center mb-[40px] flex flex-col items-center justify-center ">
      <h1 className="md:text-[40px] text-[34px] mb-[10px] text-main-color  ">
        {title}
      </h1>
      <p className="text-[16px] pb-[7px]">{para}</p>
      <Image src={"/icons/stars.png"} alt={title} width={60} height={20} />
    </div>
  );
};

export default Sec_Heading;

import Image from "next/image";
import React from "react";

const Sec_Heading = ({ title, para }) => {
  return (
    <div className="text-center mb-[40px] flex flex-col items-center justify-center ">
      <h2 className="md:text-5xl text-[34px] mb-[10px] font-main italic  ">
        {title}
      </h2>
      <p className="text-[16px] pb-[7px]">{para}</p>
      <Image src={"/icons/stars.png"} alt={title} width={70} height={20} />
    </div>
  );
};

export default Sec_Heading;

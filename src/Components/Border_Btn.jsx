import React from "react";

const Border_Btn = ({ border_color = "amber", title,className }) => {
  return (
    <button
      className={` py-[10px] px-[28px] text-[16px] text-light-white cursor-pointer
            border-amber-900 border-2 transition-all duration-500 hover:bg-yel-color  hover:border-yel-color rounded-full mt-[30px] mb-[15px] ${className} `}
    >
      {title}
    </button>
  );
};

export default Border_Btn;

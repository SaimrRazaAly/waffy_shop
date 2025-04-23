import React from "react";

const Glowing_Btn = ({ title }) => {
  return (
    <button className="sm:px-6 sm:py-4 px-3 py-2 transition duration-500 hover:scale-110 cursor-pointer  rounded-full text-white bg-amber-400 shadow-2xl-">
      {title}
    </button>
  );
};

export default Glowing_Btn;

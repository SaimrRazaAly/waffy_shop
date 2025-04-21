import React from "react";

const Glowing_Btn = ({ title }) => {
  return (
    <button className="px-6  transition duration-500 hover:scale-110 cursor-pointer py-4 rounded-full text-white bg-amber-400 shadow-2xl-">
      {title}
    </button>
  );
};

export default Glowing_Btn;

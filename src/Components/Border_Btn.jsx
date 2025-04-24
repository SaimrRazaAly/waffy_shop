import React from "react";

const Border_Btn = ({ border_color = "amber", title }) => {
  return (
    <button
      className={`md:px-6 md:py-3 cursor-pointer
           px-4 py-2 border-amber-900 border-2 transition-all duration-500 hover:bg-amber-400  hover:border-amber-400 rounded-full `}
    >
      {title}
    </button>
  );
};

export default Border_Btn;

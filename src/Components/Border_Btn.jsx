

import React from "react";

const Border_Btn = ({ border_color = "amber", title }) => {
  return (
    <button
      className={`sm:px-6 sm:py-4 px-3 py-2 transition duration-500 hover:scale-110 cursor-pointer border-2 border-${border_color}-500 rounded-full font-light`}
    >
      {title}
    </button>
  );
};

export default Border_Btn;

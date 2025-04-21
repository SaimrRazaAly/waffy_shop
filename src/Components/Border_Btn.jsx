"use client";

import React, { useState } from "react";

const Border_Btn = ({ border_color, title }) => {
  const [color, setColor] = useState("");
  if (border_color === "") {
    setColor("amber");
  }
  return (
    <button
      className={`px-6  transition duration-500 hover:scale-110 py-4 cursor-pointer border border-${color}-500  rounded-full font-light`}
    >
      {title}
    </button>
  );
};

export default Border_Btn;

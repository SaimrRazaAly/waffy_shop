"use client"

import { useEffect } from "react";

export default function Loading() {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, []);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#474554]/70 backdrop-blur-md overflow-hidden">
      <div className="relative flex items-center justify-center w-[80px] h-[80px]">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`relative flex items-center h-full w-1/4 origin-top ${
              i === 0
                ? 'animate-[swing_1.2s_linear_infinite]'
                : i === 3
                ? 'animate-[swing2_1.2s_linear_infinite]'
                : ''
            }`}
          >
            <div className="w-full h-1/4 rounded-full bg-white shadow-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

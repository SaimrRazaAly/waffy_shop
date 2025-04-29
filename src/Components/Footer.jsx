import { footerData } from "@/constants/data";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" text-white">
      <div className="relative before_Image">
        <div className="px-4 lg:mx-[100px] py-[40px] pt-[60px]">
          <div className="grid grid-cols-1 mini-sm:grid-cols-2 tlg:grid-cols-6 gap-[30px]">
            {footerData.map((section, index) => (
              <ul
                key={index}
                className={`space-y-2 ${index === 0 ? "tlg:col-span-2 tlg:px-[25px]" : ""}`}
              >
                <h2 className="text-yel-color text-[24px] font-semibold mb-4">
                  {section.heading}
                </h2>

                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className={`text-[16px] leading-relaxed transition-all duration-300 ${
                      index === 0 ? "" : "hover:text-yel-color"
                    }`}
                  >
                    <a href="#">
                      {index !== 0 && <span className="mr-[10px]">{">"}</span>}
                      {item}
                    </a>
                  </li>
                ))}

                {index === 0 && (
                  <div>
                    <h2 className="text-[16px] my-[30px] leading-relaxed text-yel-color">
                      Read mroe
                    </h2>
                    <div className="flex gap-[10px] items-center">
                      <FaFacebook className="transition-all duration-500 hover:text-yel-color cursor-pointer" />
                      <FaSquarePinterest className="transition-all duration-500 hover:text-yel-color cursor-pointer" />
                      <FaInstagram className="transition-all duration-500 hover:text-yel-color cursor-pointer" />
                    </div>
                  </div>
                )}

                {section.isIconSection && (
                  <ul className="flex gap-3 mt-4">
                    {[...Array(6)].map((_, i) => (
                      <li key={i}>icons</li>
                    ))}
                  </ul>
                )}
              </ul>
            ))}
          </div>
        </div>

        <hr className="my-[20px] h-[0.5px] bg-white" />

        <div className="px-4 lg:mx-[100px] flex flex-col sm:flex-row justify-between items-center gap-3 pb-[20px] text-[16px] text-center sm:text-start">
          <p>© 2025 Waffy (password: buddha) Powered by Shopify</p>
          <div className="">
            <a href="#" className="transition-all duration-500 hover:text-yel-color">Home page</a>
            <span className="px-[10px]">|</span>
            <a href="#" className="transition-all duration-500 hover:text-yel-color">Privacy Policy</a>
            <span className="px-[10px]">|</span>
            <a href="#" className="transition-all duration-500 hover:text-yel-color">Search</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

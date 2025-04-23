"use client";
import { Navbar_data } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { HiX } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative top-0 w-full flex flex-col gap-5 items-center justify-center  p-3 z-50">
      {/* Top Row: Logo + Icons */}
      <div className="flex items-center justify-between px-4">
        <Image
          src={"/images/1main_logo.png"}
          width={200}
          height={200}
          alt="logo"
        />
      </div>
      {/* Icons (always visible at top right) */}

      <div
        className=" gap-4 text-xl flex justify-between items-center   w-[90%] py-3 px-2
       bg-black xl:bg-transparent text-white "
      >
        <div
          className="lg:hidden text-2xl cursor-pointer links_hover_Color "
          onClick={() => setClick(true)}
        >
          <RxHamburgerMenu />
        </div>
        {/* smally */}
        <div className="lg:hidden flex gap-4 items-center justify-center lg:gap-4">
          <CiSearch className="links_hover_Color" />
          <span>USD </span>
          <FaCartShopping className="links_hover_Color" />
          <FaUser className="links_hover_Color" />
        </div>

        {/* on screen huge */}
        <div
          className={`${
            isSticky ? "lg:fixed lg:w-full lg:py-4 lg:top-0 lg:px-20 lg:left-0   lg:items-center " : ""
          }  lg:flex lg:flex-row-reverse   lg:justify-between  lg:items-center  py-4 px-5 hidden lg:bg-black lg:text-white lg:w-[110%]`}
        >
          <div className="hidden lg:flex gap-2 items-center justify-center lg:gap-4">
            <CiSearch className="links_hover_Color" />
            <span>USD </span>
            <FaCartShopping className="links_hover_Color" />
            <FaUser className="links_hover_Color" />
          </div>

          {/* Hamburger Menu on Mobile */}
          <nav className={`hidden  ${isSticky ? " lg:px-4 lg:py-2  " : ""}   lg:flex items-center  justify-end gap-8 mt-3 lg:text-white text-black text-[18px]`}>
            {Navbar_data.slice(0, 6).map((v) => (
              <Link
                href={v.link}
                key={v.id}
                className="hover:text-amber-500 transition"
              >
                {v.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 right-0 transition-all lg:w-0 duration-500 ease-in-out ${
          click ? "w-screen" : "w-0"
        } bg-[#000000c2] h-screen overflow-y-hidden -z-10`}
      />
      <div
        className={`fixed  top-0 right-0 h-full sm:w-[300px] w-[60%] bg-white z-50 transform transition-transform duration-700 ease-in-out ${
          click ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        {/* Close Button */}
        <div
          className="absolute top-5 right-5 text-3xl cursor-pointer"
          onClick={() => setClick(false)}
        >
          <HiX />
        </div>

        {/* Slide-in Nav Links */}
        <ul className={`flex flex-col   ${click ? "items-start" : "items-center"} justify-center h-full gap-5 text-black text-lg`}>
          {Navbar_data.slice(0, 6).map((v) => (
            <li key={v.id} className="text-2xl lg:text-[16px] lg:mb-0 mb-3 ml-5 w-full lg:w-auto border-slate-200 border-b-[0.5px]">
              <Link
                href={v.link}
                onClick={() => setClick(false)}
                className="hover:text-amber-500 transition  "
              >
                {v.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

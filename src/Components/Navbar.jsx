"use client";
import { Navbar_data } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { HiX } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [dropDown, setdropDown] = useState(false);

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
          <Link href={"/account/login"}>
            <button className="cursor-pointer">
              <FaUser className="links_hover_Color" />
            </button>
          </Link>
        </div>

        {/* on screen huge */}
        <div
          className={`${
            isSticky
              ? "lg:fixed lg:w-full lg:py-4 lg:top-0 lg:px-20 lg:left-0   lg:items-center "
              : ""
          }  lg:flex lg:flex-row-reverse   lg:justify-between  lg:items-center  py-4 px-5 hidden lg:bg-black lg:text-white lg:w-[110%]`}
        >
          <div className="hidden lg:flex gap-2 items-center justify-center lg:gap-4">
            <CiSearch className="links_hover_Color" />
            <span>USD </span>
            <FaCartShopping className="links_hover_Color" />
            <Link href={"/account/login"}>
              <button className="cursor-pointer">
                <FaUser className="links_hover_Color" />
              </button>
            </Link>
          </div>

          {/* Hamburger Menu on Mobile */}
          <nav
            className={`hidden  ${
              isSticky ? " lg:px-4 lg:py-2  " : ""
            }   lg:flex items-center  justify-end gap-8 mt-3 lg:text-white text-black text-[18px]`}
          >
            {Navbar_data.map((item, i) => (
              <li key={item.id} className="relative group list-none">
                <Link
                  href={item.link}
                  onClick={() => setClick(false)}
                  className="text-2xl lg:text-[16px] hover:text-amber-500 transition"
                >
                  {item.children ? item.title + " ↓" : item.title}
                </Link>

                {item.children && (
                  <ul className="absolute overflow-hidden opacity-0 group-hover:opacity-100 focus:block bg-white border shadow-md mt-1 transition-all duration-500  z-10 w-44">
                    {item.children.map((child) => (
                      <li key={child.id} className="border border-gray-200 ">
                        <Link
                          onClick={() => setClick(true)}
                          href={child.link}
                          className="block px-4 py-2 text-sm hover:text-amber-400 text-black "
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
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
        className={`fixed  top-0 right-0 h-full sm:w-[300px] w-[80%] bg-white z-50 transform transition-transform duration-700 ease-in-out ${
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
        <ul
          className={`flex flex-col   ${
            click ? "items-start" : "items-center"
          } pt-10 h-full gap-5 text-black text-lg`}
        >
          {Navbar_data.map((item, i) => (
            <li key={item.id} className="relative group ml-5">
              <Link
                href={item.link}
                onClick={() => setClick(item.children ? true : false)}
                className="text-2xl lg:text-[16px] hover:text-amber-500 transition"
              >
                {item.children ? item.title + " ↓" : item.title}
              </Link>

              {item.children && (
                <ul className="absolute overflow-hidden opacity-0 group-hover:opacity-100 focus:block bg-white   mt-3 transition-all duration-500 scale-105  z-10 w-44">
                  {item.children.map((child) => (
                    <li key={child.id} className="border border-gray-200 ">
                      <Link
                      onClick={() => setClick(true)}
                        href={child.link}
                        className="block px-4 py-2 text-sm hover:text-amber-400 text-black "
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

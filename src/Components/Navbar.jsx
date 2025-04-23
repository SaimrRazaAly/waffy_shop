"use client";
import { Navbar_data } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { HiX } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <header className="relative w-full flex flex-col gap-5 items-center justify-center  shadow-md p-3 z-50">
      {/* Top Row: Logo + Icons */}
      <div className="flex items-center justify-between px-4">
        <Image
          src={"/images/1main_logo.png"}
          width={100}
          height={100}
          alt="logo"
        />
      </div>
      {/* Icons (always visible at top right) */}

      <div className=" gap-4 text-xl flex justify-between items-center  w-[90%] py-3 px-2
       bg-black text-white ">
        <div
          className="lg:hidden text-2xl cursor-pointerhover:text-amber-400 transition-all duration-500 "
          onClick={() => setClick(true)}
        >
          <RxHamburgerMenu />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <CiSearch className="links_hover_Colo" />
          <FaCartShopping  className="links_hover_Colo"/>
          <FaUser className="links_hover_Colo" />
        </div>
      </div>
      {/* Hamburger Menu on Mobile */}

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center justify-center gap-8 mt-3 text-black text-[18px]">
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

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 right-0 h-full sm:w-[300px] w-[60%] bg-white z-50 transform transition-transform duration-500 ease-in-out ${
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
        <ul className="flex flex-col items-center justify-center h-full gap-5 text-black text-lg">
          {Navbar_data.slice(0, 6).map((v) => (
            <li key={v.id}>
              <Link
                href={v.link}
                onClick={() => setClick(false)}
                className="hover:text-amber-500 transition"
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

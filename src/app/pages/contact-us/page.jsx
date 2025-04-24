"use client";
import Loading from "@/app/loading";
import Page_Hero_Banner from "@/Components/Page_Hero_Banner";
import Sec_Heading from "@/Components/Sec_Heading";
import React from "react";

import { IoIosTimer } from "react-icons/io";
const arr = [1, 2, 3];
const Contact = () => {
  return (
    <>
      <Page_Hero_Banner title={"Contact us"} />

      <div className="py-20 px-4 lg:px-10">
        <Sec_Heading
          title={"Contact us"}
          para={"Tortor at risus viverra adipiscing at in tellus integer."}
        />
        <div className="flex flex-wrap gap-5 items-center justify-center my-5">
          {arr.map((v, i) => (
            <div
              key={i}
              className="p-5 rounded-lg border border-amber-900 hover:border-amber-400"
            >
              <div className=" w-[60px] h-[60px] p-4 rounded-full group-hover:bg-amber-400 bg-amber-900 text-3xl text-white">
                <IoIosTimer />
              </div>
              <div>
                <h2 className="main_text text-2xl my-2">Call</h2>
                <p className="mb-3">
                  <span className="font-bold text-[18px]">spanToll-Free</span>{" "}
                  0000 - 123 - 456789
                </p>
                <p>
                  <span className="font-bold text-[18px]">Fax</span>123 - 456789
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="min-h-screen my-4 flex flex-col md:flex-row items-stretch justify-between bg-white p-4 md:p-10 gap-6">
          {/* Map Section */}
          <div className="w-full md:w-1/2 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1602802684192!2d77.39638073968018!3d28.504825075835775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks%20%7C%20Coding%20Classes!5e0!3m2!1sen!2sin!4v1702963476861!5m2!1sen!2sin"
              className="w-full h-full min-h-[400px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 space-y-4 my-6">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="input_style"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="input_style"
              />
              <input
                type="tel"
                placeholder="Phone"
                required
                className="input_style"
              />
              <textarea
                placeholder="Message"
                rows="5"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full rounded-full border border-yellow-800 text-black py-3 transition hover:bg-yellow-100"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

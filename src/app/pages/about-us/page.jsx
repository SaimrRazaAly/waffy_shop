import Sec_Heading from "@/Components/Sec_Heading";
import Text_Image_Comp from "@/Components/Text_Image_Comp";
import { RiCupFill } from "react-icons/ri";
import Page_Hero_Banner from "@/Components/Page_Hero_Banner";
import { Unique_flavors_data } from "@/constants/data";
import { TiSocialFacebook } from "react-icons/ti";
import { TfiYoutube } from "react-icons/tfi";
import { FaTwitter, FaPinterest } from "react-icons/fa";
import Image from "next/image";
import Client_Area from "@/Components/Client_Area";

let arr = [1, 2, 3, 4];

const About_Page = () => {
  return (
    <>
      <Page_Hero_Banner title={"About us"} />
      <Text_Image_Comp />

      {/* Unique flavors spices section */}

      <div className="bg-slate-200 px-4 py-8 md:px-5 lg:px-28">
        <Sec_Heading
          title={"Unique flavors spices"}
          para={"Quisque volutpat mattis eros."}
        />
        <div className=" my-14 grid l md:grid-cols-2 grid-cols-1 gap-10 ">
          {/* Looping the data  */}
          {Unique_flavors_data.map((v, i) => {
            return (
              <div className="flex gap-4" key={v.id}>
                <div className="p-3 bg-amber-400 text-4xl h-[60px] w-[60px] transition-all du">
                  {/* icons */}
                  <RiCupFill />
                </div>
                <div>
                  {/* text */}
                  <h2 className="font-extrabold font-serif text-[18px]">
                    {v.title}
                  </h2>
                  <p>{v.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* A unique blended taste */}

      <div className="my-20">
        <Sec_Heading
          title={"A unique blended taste"}
          para={
            "Pellentesque habitant morbi tristique senectus et netus et male."
          }
        />
        <div>
          <Text_Image_Comp para={false} />
          <Text_Image_Comp para={false} reverse={false} />
        </div>
      </div>
      {/* Clients Area */}
      <Client_Area />

      {/* Team Area */}
      <div>
        <div className="px-8 py-20">
          <Sec_Heading
            title={"Our Team"}
            para={"In iaculis nunc sed augue lacus viverra vitae congue eu."}
          />
          {/* card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/*Loopoing through all the cards  */}
            {arr.map((v, i) => {
              return (
                <div
                  key={i}
                  className="group overflow-hidden flex items-center flex-col justify-center relative min-h-[350px] w-full md:max-w-[600px] md:h-[350px] mt-3"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={"/images/1Client.jpg"}
                      alt="hermna"
                      fill
                      className="object-cover object-center"
                    />

                    {/* Left overlay */}
                    <div className="absolute left-0 top-0 h-full bg-[#000000c2] w-0 transition-all duration-500 group-hover:w-[50%]" />

                    {/* Right overlay */}
                    <div className="absolute right-0 top-0 h-full bg-[#000000c2] w-0 transition-all duration-500 group-hover:w-[50%]" />
                  </div>

                  {/* Social icons container */}
                  <div className="absolute -bottom-5 group-hover:bottom-14  flex items-center gap-4 mb-5 translate-y-[150%] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="p-4 bg-white text-gray-900">
                      <FaPinterest />
                    </span>
                    <span className="p-4 bg-white text-gray-900">
                      <FaTwitter />
                    </span>
                    <span className="p-4 bg-white text-gray-900">
                      <TiSocialFacebook />
                    </span>
                    <span className="p-4 bg-white text-gray-900">
                      <TfiYoutube />
                    </span>
                  </div>

                  {/* Name and title */}
                  <div className="mt-2">
                    <h2 className="main_text text-3xl">Mila</h2>
                    <h3>Proprietor</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About_Page;

import Image from "next/image";
import { TiSocialFacebook } from "react-icons/ti";
import { TfiYoutube } from "react-icons/tfi";
import { FaTwitter, FaPinterest } from "react-icons/fa";
import { Team_icons_data } from "@/constants/data";

const Team_Card = ({ name, profession, image }) => {
  return (
    <div className="  border group  border-amber-400  tlg:w-auto h-full  w-full">
      <div className=" flex items-center justify-center bg-[#f4b323] p-[30px] mb-[30px]">
        <div className="relative w-[175px] h-[175px] overflow-hidden">
          <Image
            src={image}
            alt="Dires"
            fill
            className="rounded-full object-center object-cover transition-all duration-500 border-8   group-hover:border-amber-900"
          />
        </div>
      </div>
      <div className="h-[40%] flex flex-col items-center justify-center text-center mt-4 bg-white  ">
        <h2 className="text-[23.8px]  font-bold font-serif text-amber-900 mb-[10px] ">
          {name}
        </h2>
        <p className="font-extralight  my-[10px] ">{profession}</p>

        <ul className="flex gap-3.5 text-[16px] mb-[30px] mt-[10px] px-[15px]">
          {Team_icons_data.map((item) => (
            <li key={item.id} className="m-[5px] opacity-90">
              <a
                href={item.href}
                className="w-[30px] h-[30px] text-[16px] leading-[30px]"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team_Card;

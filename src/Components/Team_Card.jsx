import Image from "next/image";
import { TiSocialFacebook } from "react-icons/ti";
import { TfiYoutube } from "react-icons/tfi";
import { FaTwitter, FaPinterest } from "react-icons/fa";


 const Team_Card = ({ name, profession, image }) => {
    return (
      <div className="  border   border-amber-400  w-[270px]">
        <div className="h-[200px] flex items-center justify-center bg-amber-400">
          <div className="relative w-[150px] h-[150px] overflow-hidden">
  
          <Image
            src={"/images/4.jpg"}
            alt="Dires"
            fill
            className="rounded-full object-center object-cover transition-all duration-500 border-8   hover:border-amber-900"
            />
            </div>
        </div>
        <div className="h-[40%] flex flex-col items-center justify-center text-center mt-4 bg-white gap-6">
          <h2 className="text-4xl md:text-4xl font-bold font-serif text-amber-900 ">
            {name}
          </h2>
          <p className="font-extralight md:text-2xl ">{profession}</p>
  
          <div className="flex gap-4  mb-5  ">
            <FaPinterest />
            <FaTwitter />
            <TiSocialFacebook />
            <TfiYoutube />
          </div>
        </div>
      </div>
    );
  };


  export default Team_Card
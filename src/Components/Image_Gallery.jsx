import Image from "next/image";
import Border_Btn from "./Border_Btn";

const Image_Gallery = () => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center md:px-5 overflow-hidden">
      
    </div>
  );
};

export default Image_Gallery;






// =================== Card Component ================================
export const Image_Gallery_Card = ({ image, title }) => {
  return (
    <div className="relative transition-all duration-500  w-full h-[300px] hover:scale-110  group overflow-hidden rounded-md">
      <Image
        src={"/images/4.jpg"}
        fill
        alt="dome"
        className="object-center object-cover "
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-[#000000c2] flex-col text-white gap-5 flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out">
        <h2 className="font-bold font-serif text-2xl">Herbis is</h2>
        <p className="text-amber-400">this is a good thing to understand</p>
        <Border_Btn title={"View Collection"} />
      </div>
    </div>
  );
};

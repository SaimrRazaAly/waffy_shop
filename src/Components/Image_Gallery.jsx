import Image from "next/image";
import Border_Btn from "./Border_Btn";
import { Items_data } from "@/constants/data";

const Image_Gallery = () => {
  return (
    <div className="flex xl:flex-row my-20 flex-col gap-5 items-center justify-center md:px-5 overflow-hidden">
      {Items_data.map((v, i) => {
        return (
          <Image_Gallery_Card
            title={v.title}
            i={i}
            image={v.image}
            key={v.id}
            desc={v.description}
          />
        );
      })}
    </div>
  );
};

export default Image_Gallery;

// =================== Card Component ================================
export const Image_Gallery_Card = ({ image, title, desc, i }) => {
  return (
    <div className="relative transition-all duration-500  w-full h-[300px] hover:scale-110  group overflow-hidden ">
      <div
        className={`relative xl:w-[200px] ${
          i === 0 ? "xl:h-[660px]" : "xl:h-[300px]"
        }`}
      >
        <Image
          src={image}
          fill
          alt="dome"
          className="object-center object-cover "
        />
      </div>

      {/* Hover Overlay */}
      <div className="absolute w-full inset-0 bg-[#000000c2] flex-col text-white gap-5 flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out">
        <h2 className="font-bold font-serif text-2xl">{title}</h2>
        <p className="text-amber-400">{desc}</p>
        <Border_Btn title={"View Collection"} />
      </div>
    </div>
  );
};

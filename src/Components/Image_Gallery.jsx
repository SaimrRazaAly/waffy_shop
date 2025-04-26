import Image from "next/image";
import Border_Btn from "./Border_Btn";
import { Items_data } from "@/constants/data";

const Image_Gallery = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-3">
      <div className="flex flex-col gap-1 xl:gap-5 xl:flex-row border border-red-600 xl:w-[65%] ">
        <div className="relative w-full h-[400px] xl:h-[600px] xl:w-[70%] ">
          <Image
            src={"/images/2.jpg"}
            alt="This"
            fill
            className="object-center object-cover"
          />
        </div>

        <div className="md:flex gap-5 xl:block block md:items-center md:justify-center  h-[400px] ">
        <div className="flex flex-col md:flex-row xl:flex-col md:gap-3 xl:gap-1 gap-1">
            <div className="relative md:w-[200px] md:h-[300px]  w-full h-[400px]">
              <Image
                src={"/images/2.jpg"}
                alt="This"
                fill
                className="object-center object-cover"
              />
            </div>
            <div className="relative md:w-[200px] md:h-[300px]  w-full h-[400px]">
              <Image
                src={"/images/2.jpg"}
                alt="This"
                fill
                className="object-center object-cover"
              />
            </div>
          </div>

          <div className="md:flex  items-center justify-center xl:flex-col gap-1 xl:hidden hidden  md:gap-3 xl:gap-1 ">
            <div className="relative md:w-[190px] md:h-[300px]  w-full h-[400px]">
              <Image
                src={"/images/2.jpg"}
                alt="This"
                fill
                className="object-center object-cover"
              />
            </div>
            <div className="relative md:w-[170px] md:h-[300px]  w-full h-[400px]">
              <Image
                src={"/images/2.jpg"}
                alt="This"
                fill
                className="object-center object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 xl:gap-5  md:flex-row border border-red-600 xl:w-[50%] md:hidden xl:flex ">
        <div className="relative w-full  md:h-[600px] h-[400px] xl:h-[600px] xl:w-[50%] md:w-[30%] ">
          <Image
            src={"/images/2.jpg"}
            alt="This"
            fill
            className="object-center object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="relative md:w-[250px] md:h-[300px]  w-full h-[400px]">
            <Image
              src={"/images/2.jpg"}
              alt="This"
              fill
              className="object-center object-cover"
            />
          </div>
          <div className="relative md:w-[250px] md:h-[300px]  w-full h-[400px]">
            <Image
              src={"/images/2.jpg"}
              alt="This"
              fill
              className="object-center object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image_Gallery;

// // =================== Card Component ================================
// export const Image_Gallery_Card = ({ image, title, desc, i }) => {
//   return (
//     <div className="relative transition-all duration-500  w-full h-[300px] hover:scale-110  group overflow-hidden border border-amber-400">
//      <div
//   className={`relative w-full h-[300px] xl:w-[200px] ${
//     i === 0 ? "xl:h-[660px]" : "xl:h-[300px]"
//   }`}
// >
//         <Image
//           src={image}
//           fill
//           alt="dome"
//           className="object-center object-cover "
//         />
//       </div>

//       {/* Hover Overlay */}
//       <div className="absolute w-full inset-0 bg-[#000000c2] flex-col text-white gap-5 flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out">
//         <h2 className="font-bold font-serif text-2xl">{title}</h2>
//         <p className="text-amber-400">{desc}</p>
//         <Border_Btn title={"View Collection"} />
//       </div>
//     </div>
//   );
// };

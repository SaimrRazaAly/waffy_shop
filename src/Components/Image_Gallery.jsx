"use client";

// import Image from "next/image";
// import Border_Btn from "./Border_Btn";
// import { Items_data } from "@/constants/data";
// import Link from "next/link";

// const Image_Gallery = () => {
//   return (
//     <div className="flex flex-col xl:flex-row gap-3 mt-14">
//       {/* Left Section */}
//       <div className="flex flex-col gap-1 xl:gap-5 xl:flex-row xl:w-[65%]">
//         {/* Big Image */}
//         <HoverCard extraClass="w-full h-[400px] xl:h-[600px] xl:w-[70%]" />

//         {/* Small Images */}
//         <div className="md:flex gap-5 xl:block block md:items-center md:justify-center h-[400px]">
//           <div className="flex flex-col md:flex-row xl:flex-col md:gap-3 xl:gap-1 gap-1">
//             <HoverCard extraClass="md:w-[200px] md:h-[300px] w-full h-[400px]" />
//             <HoverCard extraClass="md:w-[200px] md:h-[300px] w-full h-[400px]" />
//           </div>

//           <div className="md:flex items-center justify-center xl:flex-col gap-1 xl:hidden hidden md:gap-3 xl:gap-1">
//             <HoverCard extraClass="md:w-[190px] md:h-[300px] w-full h-[400px]" />
//             <HoverCard extraClass="md:w-[170px] md:h-[300px] w-full h-[400px]" />
//           </div>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="flex flex-col gap-1 xl:gap-5 md:flex-row  xl:w-[50%] md:hidden xl:flex">
//         <HoverCard extraClass="w-full md:h-[600px] h-[400px] xl:h-[600px] xl:w-[50%] md:w-[30%]" />

//         <div className="flex flex-col gap-1">
//           <HoverCard extraClass="md:w-[250px] md:h-[300px] w-full h-[400px]" />
//           <HoverCard extraClass="md:w-[250px] md:h-[300px] w-full h-[400px]" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Image_Gallery;

// // ========== HoverCard component ==========
// const HoverCard = ({ extraClass }) => {
//   return (
//     <div className={`relative group overflow-hidden  ${extraClass}`}>
//       <Image
//         src={"/images/2.jpg"}
//         alt="This"
//         fill
//         className="object-cover object-center transition-all duration-500 group-hover:scale-110"
//       />

//       {/* Hover Overlay (Left Side) */}
//       <div
//         className="absolute inset-0 bg-black/70 group-hover:w-[100%] w-0 top-0 left-1/2 transform
//       -translate-x-1/2 flex justify-center items-center text-white transition-all duration-500 ease-in-out"
//       />

//       {/* Text and Button */}
//       <div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-all duration-500 ease-in-out">
//         <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center">
//           <h2 className="text-2xl font-bold mb-2">Title Here</h2>
//           <p className="text-sm mb-4 text-amber-400">
//             Subtitle or small description
//           </p>
//           <Link href={"/collections/all"}>
//           <Border_Btn title="Learn More" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";

export default function Image_Gallery() {
  const [selectedSpice, setSelectedSpice] = useState(null);

  const spices = [
    {
      id: "box1",
      name: "Coriander Seeds",
      description:
        "Coriander seeds have a warm, nutty flavor, often used in curries and pickling.",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd58d7?q=80&w=260&h=400&fit=crop",
    },
    {
      id: "box2",
      name: "Mixed Spice Powders",
      description:
        "A blend of turmeric, cumin, and chili powder, perfect for seasoning dishes.",
      image:
        "https://images.unsplash.com/photo-1597365657603-15af5b431889?q=80&w=260&h=200&fit=crop",
    },
    {
      id: "box3",
      name: "Whole Spices",
      description:
        "Includes cinnamon, star anise, and cloves, ideal for aromatic cooking.",
      image:
        "https://images.unsplash.com/photo-1603894584373-2d33f4b2b92f?q=80&w=260&h=200&fit=crop",
    },
    {
      id: "box4",
      name: "Turmeric",
      description:
        "Turmeric adds a vibrant yellow color and earthy flavor to dishes.",
      image:
        "https://images.unsplash.com/photo-1615485290382-441e9d161ca7?q=80&w=260&h=400&fit=crop",
    },
    {
      id: "box5",
      name: "Garam Masala",
      description:
        "A rich blend of ground spices, commonly used in Indian cuisine.",
      image:
        "https://images.unsplash.com/photo-1599021419575-5e358d0a63e6?q=80&w=260&h=200&fit=crop",
    },
    {
      id: "box6",
      name: "Spice Collection",
      description: "A variety of spices in bowls, perfect for diverse recipes.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=260&h=200&fit=crop",
    },
  ];

  const handleSpiceClick = (spiceId) => {
    setSelectedSpice(selectedSpice === spiceId ? null : spiceId);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Grid Layout */}
        <div className="custom-grid w-full">
          {spices.map((spice) => (
            <div
              key={spice.id}
              className="relative rounded-lg overflow-hidden shadow-md cursor-pointer"
            >
              <img
                src={"/images/2.jpg"}
                alt={"ai"}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

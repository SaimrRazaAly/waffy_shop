// const OverLay = ({ title, para, row, classes }) => {
//   return (
//     <div
//       className={`absolute   sm:bottom-10 top-2 p-5  left-2 sm:left-0 bottom-14 right-3 sm:p-5 bg-[#000000c2] bg-opacity-30 ${classes}   ${
//         row === "row-reverse"
//           ? "text-black bg-[#ffff]  "
//           : "text-white bg-[#000000c2]  "
//       }`}
//     >
//       <h2
//         className={`${
//           row === "row-reverse" ? "text-amber-900" : "text-yellow-500"
//         } text-2xl font-black font-serif mb-2 ${para ? "lg:text-4xl" : ""}`}
//       >
//         {title}
//       </h2>
//       {para && (
//         <p className="capitalize md:text-2xl font-medium sm:mb-10 mb-1">
//           {para}
//         </p>
//       )}
//       <button className="px-4 py-2 transition duration-500 hover:scale-110 cursor-pointer bg-black hover:bg-orange-400 text-white border-2 border-orange-400 rounded-full font-light">
//         Shop now
//       </button>
//     </div>
//   );
// };

import Border_Btn from "./Border_Btn";

// export default OverLay;

const OverLay = ({ title, para, row, classes }) => {
  return (
    <div
      className={`absolute h-auto bottom-[25px] right-[25px] w-auto bg-[#000000c2] p-[30px] bg-opacity-30 ${classes}   ${
        row === "row-reverse"
          ? "text-black bg-[#fbfbfb]  "
          : "text-white bg-[#000000c2]  "
      }`}
    >
      <h1
        className={`${
          row === "row-reverse" ? "text-amber-900" : "text-yellow-500"
        } text-2xl mb-[15px]  ${para ? "lg:text-[40px] " : ""}`}
      >
        {title}
      </h1>
      {para && <p className="capitalize md:text-[24px]   mb-[15px]">{para}</p>}
      <Border_Btn
      black={false}
        title={"Shop Now"}
        className={`!mt-0 !mb-0  `}
      />
    </div>
  );
};

export default OverLay;

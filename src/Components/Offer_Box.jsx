import Image from "next/image";

const Offer_Box = ({ title, image }) => {
  return (
    <div className=" lg:w-[400px] lg:h-[300px] sm:w-[350px] w-[80%] mx-auto sm:mx-0 h-[250px] md:mt-10 mt-0 overflow-hidden relative group">
      <Image
        src={image}
        alt="Foods"
        width={400}
        height={300}
        className="object-contain bg-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 w-0 bg-black opacity-30 group-hover:w-full transition-all duration-700 " />

      {/* Content */}
      <OverLay title={title} />
    </div>
  );
};

export default Offer_Box;

export const OverLay = ({ title, para, row,classes }) => {
  return (
    <div
      className={`absolute   sm:bottom-10 top-2  left-2 sm:left-0 bottom-14 right-3 sm:p-5 p-2 bg-[#000000c2] bg-opacity-30 ${classes}   ${
        row === "row-reverse"
          ? "text-black bg-[#ffff]   sm:h-auto  h-[65%]"
          : "text-white bg-[#000000c2]  sm:h-auto h-[65%]"
      }`}
    >
      <h2
        className={`${
          row === "row-reverse" ? "text-amber-900" : "text-yellow-500"
        } text-2xl font-black font-serif mb-2 ${para ? "lg:text-4xl" : ""}`}
      >
        {title}
      </h2>
      {para && (
        <p className="capitalize md:text-2xl font-medium sm:mb-10 mb-1">{para}</p>
      )}
      <button className="px-4 py-2 transition duration-500 hover:scale-110 cursor-pointer bg-black hover:bg-orange-400 text-white border-2 border-orange-400 rounded-full font-light">
        Shop now
      </button>
    </div>
  );
};

import Image from "next/image";

const Offer_Box = ({ title, image }) => {
  return (
    <div className="lg:w-[400px] lg:h-[300px] w-[350px] h-[250px] mt-10 overflow-hidden relative group">
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

export const OverLay = ({ title, classes, para }) => {
  return (
    <div
      className={`absolute bottom-10 right-3 p-5 bg-[#000000c2] bg-opacity-30  text-white ${classes}`}
    >
      <h2 className={`text-amber-400 text-2xl font-black font-serif mb-2 ${para ? "lg:text-4xl" : ""}`}>
        {title}
      </h2>
      {para && <p className="capitalize md:text-2xl font-medium mb-10">{para}</p>}
      <button className="px-4 py-2 transition duration-500 hover:scale-110 cursor-pointer bg-black hover:bg-orange-400 text-white border-2 border-orange-400 rounded-full font-light">
        Shop now
      </button>
    </div>
  );
};

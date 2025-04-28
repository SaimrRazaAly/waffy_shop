import OverLay from "./OverLay";
import Image from "next/image";
const Offer_Box = ({ title, image }) => {
  return (
    <div className="relative  w-full h-[300px] tlg:w-[335px]  mt-0 overflow-hidden group">
      {/* Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt="Foods"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 w-0 group-hover:w-full transition-all duration-700" />

      {/* Content */}
      <OverLay title={title} />
    </div>
  );
};

export default Offer_Box
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


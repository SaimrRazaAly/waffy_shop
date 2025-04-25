import Image from "next/image";

const Product_Card = ({ title, price, image }) => {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-white transition-all duration-500 hover:border-amber-900 hover:scale-105 cursor-pointer px-4 py-2 shadow-lg ">
      <div>
        <Image src={image} alt="Dires" width={200} height={200} />
      </div>
      <h2 className="text-amber-900 font-extrabold text-3xl">{title}</h2>
      <p className="text-2xl font-bold mt-2">$ {price}</p>
    </div>
  );
};

export default Product_Card;




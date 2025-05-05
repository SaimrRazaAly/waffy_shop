import Image from "next/image";
import Border_Btn from "./Border_Btn";
import Link from "next/link";
const Product_Card_Shop = ({ title, image, price, show_Btn = false }) => {
  return (
    <div className="w-[200px] relative group flex  text-center flex-col items-center justify-center cursor-pointer shadow-lg bg-white p-2 overflow-hidden transition-colors duration-300">
      {/* 4 animated borders */}
      <span className="absolute left-0 top-0 w-[3px] h-full bg-yel-color   transform translate-y-full group-hover:translate-y-0 transition-transform duration-700"></span>
      <span className="absolute right-0 top-0 w-[3px] h-full bg-main-color transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700"></span>
      <span className="absolute left-0 top-0 h-[3px] w-full bg-yel-color transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
      <span className="absolute left-0 bottom-0 h-[3px] w-full  bg-main-color transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>

      {/* Product Image */}
      <div className="relative w-full h-[186px]  aspect-[3/4]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center md:rounded-full"
        />
      </div>

      {/* Product Info */}
      <div className="p-[30px]">
          <Link href={`/products/${title.replace(/\s+/g, "-")}`}>
        <h2 className="main_text text-[20px] font-semibold mb-[10px]">
          {title}{" "}
        </h2>
        {price && <p className="mb-[10px] text-[16px] font-medium">${price}</p>}
          </Link>
      </div>
      {show_Btn && <Border_Btn title={"read more"} className={"!mt-0 "}/>}
    </div>
  );
};

export default Product_Card_Shop;

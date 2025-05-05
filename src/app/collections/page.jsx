import Border_Btn from "@/Components/Border_Btn";
import Glowing_Btn from "@/Components/Glowing_Btn";
import Page_Hero_Banner from "@/Components/Page_Hero_Banner";
import Product_Card_Shop from "@/Components/Product_Card";
import { collections_data } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

const arr = [1, 2, 3, 4];

const Collections = () => {
  return (
    <>
      <Page_Hero_Banner title={" All Collections"} />
      <div className="py-10 md:px-5 px-4 flex items-center justify-center flex-wrap gap-5">
        {collections_data.map((v, i) => (
          // <div
          //   key={v.id}
          //   className="flex w-full flex-col items-center justify-center border-2 md:h-[430px] border-white md:w-[250px] cursor-pointer px-6 py-2 shadow-lg bg-white rounded-md"
          // >
          //   <div className="relative md:w-[200px] w-[100%] h-[400px] aspect-[3/4]">
          //     <Image
          //       src={v.image}
          //       alt="Dires"
          //       fill
          //       className="object-cover object-center rounded-md"
          //     />
          //   </div>
          //   <h2 className="main_text text-xl mt-3 font-semibold mb-5">
          //     {v.name}
          //   </h2>
          //   <Link href={v.link}>
          //     <Border_Btn title={"Shop Now"} />
          //   </Link>
          // </div>
          <Product_Card_Shop key={v.id} title={v.name} show_Btn={true}/>
        ))}
      </div>
    </>
  );
};

export default Collections;

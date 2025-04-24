import Page_Hero_Banner from "@/Components/Page_Hero_Banner";
import Border_Btn from "@/Components/Border_Btn";
import Image from "next/image";
import { blogData } from "@/constants/data";
import Link from "next/link";
const Blog_Page = () => {
  return (
    <>
      <Page_Hero_Banner title={"News"} />

      <div className=" mx-auto md:gap-5 gap-3 flex items-center justify-center flex-wrap px-5 py-20">
        {blogData.map((v, i) => {
          return (
            <div
              key={v.id}
              className="sm:max-w-[300px] border-red-900 px-7 md:px-0 flex flex-col items-center justify-center mx-2 my-5"
            >
              <div className="relative sm:w-[300px] w-[100%] h-[280px]">
                <Image
                  src={v.image}
                  alt={v.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-center mt-5 px-2">
                <h2 className="font-bold font-serif mb-5 text-2xl">
                  {v.title}
                </h2>
                <p className="mb-5">
                  {v.description}
                </p>
                <Link href={v.title}>
                <Border_Btn title={"Readmore"} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blog_Page;

import Page_Hero_Banner from "@/Components/Page_Hero_Banner";
import Border_Btn from "@/Components/Border_Btn";
import Image from "next/image";
import { blogData } from "@/constants/data";
import Link from "next/link";

const Blog_Page = () => {
  return (
    <>
      <Page_Hero_Banner title={"News"} />

      <div className="mx-auto md:gap-5 gap-3 flex items-center justify-center flex-wrap px-5 py-20">
        {blogData.map((v) => {
          return (
            <div
              key={v.id}
              className="md:max-w-[400px] px-4 flex flex-col items-center justify-center mx-2 my-5"
            >
              <div className="w-full aspect-[4/3] relative overflow-hidden">
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
                <p className="mb-5 line-clamp-4 text-gray-600 md:text-md text-sm">
                  {v.description}
                </p>
                <Link href={`/blogs/new/${v.title.replace(/\s+/g, "-")}`}>
                  <Border_Btn title="Readmore" />
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

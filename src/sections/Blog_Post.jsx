import Border_Btn from "@/Components/Border_Btn";
import { Blog_Post_Card } from "@/Components/Cards";
import Sec_Heading from "@/Components/Sec_Heading";
import { Blog_Post_data } from "@/constants/data";
import Image from "next/image";
import React from "react";


import { FaUser } from "react-icons/fa";
import { HiCalendarDateRange } from "react-icons/hi2";
import { LiaCommentsSolid } from "react-icons/lia";

const Blog_Post = () => {
  return (
    <section className="my-10 overflow-hidden">
      <Sec_Heading
        title={"Blog Post"}
        para={"Suspendisse potenti nullam ac tortor vitae purus faucibus orn."}
      />
      <div className=" flex flex-col xl:flex-row sm:px-5">
        {Blog_Post_data.map((v, i) => {
          return (
            // <Blog_Post_Card
            //   key={v.id}
            //   title={v.title}
            //   description={v.description}
            //   author={v.author}
            //   date={v.date}
            //   comments={v.comments}
            // />
             <div className=" flex flex-col lg:flex-row items-center justify-center gap-5 border border-amber-400 p-2 mx-2">
                <div className="lg:w-[200px] lg:h-[200px] relative w-full sm:mx-5 sm:h-[500px] h-[400px] rounded-md transition-all duration-500 hover:brightness-50">
                  <Image src={v.image} alt={v.title} fill className="object-center object-cover" />
                </div>
                <div className="flex flex-col gap-5 items-start  ">
                  <h2 className="text-4xl font-bold font-serif">{v.title}</h2>
                  <ul className="flex gap-2">
                    <li>{v.author} |</li>
                    <li>{v.date} |</li>
                    <li>{v.comments}</li>
                  </ul>
                  <p>{v.description}</p>

                  <Border_Btn title={"Read More"}/>
                </div>
                </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog_Post;

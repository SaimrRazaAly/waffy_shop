import { Blog_Post_Card } from "@/Components/Cards";
import Sec_Heading from "@/Components/Sec_Heading";
import { Blog_Post_data } from "@/constants/data";
import React from "react";

const Blog_Post = () => {
  return (
    <section className="my-10">
      <Sec_Heading
        title={"Blog Post"}
        para={"Suspendisse potenti nullam ac tortor vitae purus faucibus orn."}
      />
      <div className="overflow-x-scroll flex flex-col xl:flex-row">
        {Blog_Post_data.map((v, i) => {
          return (
            <Blog_Post_Card
              key={v.id}
              title={v.title}
              description={v.description}
              author={v.author}
              date={v.date}
              comments={v.comments}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Blog_Post;

// app/blogs/[blog_id]/page.jsx

import Page_Hero_Banner from "@/Components/Page_Hero_Banner";
import { blogData } from "@/constants/data";
import Image from "next/image";
import { LiaCommentsSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa";
import { HiCalendarDateRange } from "react-icons/hi2";

export async function generateMetadata({ params }) {
  let { blog_id } = await params; // Get the blog slug from the URL
  blog_id = blog_id.replace(/-/g, " ");
  let blog = blogData.find((b) => b.title === blog_id); // Find the corresponding blog

  if (!blog)
    return { title: "Blog Not Found", description: "Page not available" };

  return {
    title: blog.title,
  };
}

let arr = [1, 2];
export default async function Indisual_Blog_Page({ params }) {
  const { blog_id } = await params;

  const titleFromSlug = blog_id.replace(/-/g, " ");
  const blog = blogData.find(
    (item) => item.title.toLowerCase() === titleFromSlug.toLowerCase()
  );

  if (!blog) {
    throw new Error("no more bolgs");
  }

  return (
    <>
      <Page_Hero_Banner
        title={titleFromSlug}
        para={"Home / News / " + titleFromSlug}
      />
      <div className="px-10 py-22 max-w-5xl mx-auto">
        <div className="relative w-full md:h-[450px] h-96 mb-5">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold mb-5 main_text !text-black">
          {blog.title}
        </h1>

        <div className="flex flex-col gap-5 items-start">
          <ul className="flex gap-2 flex-wrap md:text-[20px] md:gap-4 text-[18px]">
            <li className="flex gap-1 items-center">
              <span className="text-amber-900">
                <FaUser />
              </span>
              ali
            </li>
            <li className="flex gap-1 items-center">
              <span className="text-amber-900">
                <HiCalendarDateRange />
              </span>
              20/5/2025
            </li>
            <li className="flex gap-1 items-center">
              <span className="text-amber-900">
                <LiaCommentsSolid />
              </span>
              100 comments
            </li>
          </ul>
        </div>

        <div className="text-lg mt-5 text-gray-700 flex gap-3 flex-col ">
          <p>
            Gravida quis blandit turpis cursus in hac. Fames ac turpis egestas
            integer eget aliquet nibh praesent. Elementum facilisis leo vel
            fringilla est ullamcorper.Quis imperdiet massa tincidunt nunc
            pulvinar sapien et.
          </p>
          <span className="font-bold italic mt-3">
            <p>
              “Ridiculus mus mauris vitae ultricies leo. Non enim praesent
              elementum facilisis leo vel fringilla. Tincidunt nunc pulvinar
              sapien et ligula ullamcorper malesuada.”{" "}
            </p>
          </span>
          <p>
            Sapien faucibus et molestie ac feugiat sed lectus. Sit amet
            consectetur adipiscing elit. Sed cras ornare arcu dui vivamus arcu
            felis. A scelerisque purus semper eget duis at tellus at urna. Vitae
            congue mauris rhoncus aenean vel elit. Sapien faucibus et molestie
            ac feugiat.
          </p>
          <p>
            Id semper risus in hendrerit gravida rutrum quisque non tellus. Sed
            lectus vestibulum mattis ullamcorper. Amet venenatis urna cursus
            eget nunc. Eu augue ut lectus arcu. Fermentum iaculis eu non diam
            phasellus vestibulum lorem sed risus. Amet venenatis urna cursus
            eget nunc.
          </p>
          <p>
            Massa vitae tortor condimentum lacinia quis vel eros donec ac. Enim
            ut tellus elementum sagittis vitae. Massa sapien faucibus et
            molestie ac feugiat. Tincidunt ornare massa eget egestas purus
            viverra accumsan. Metus aliquam eleifend mi in nulla posuere.
          </p>
        </div>
      </div>

      {/* comments */}
      <div className=" flex max-w-5xl justify-between items-center border border-slate-100 mx-auto">
        <div className="new_Post">Older Post</div>
        <div className="new_Post">Newer Post</div>
      </div>
      {/* commment  */}
      <div className=" max-w-5xl mx-auto bg-slate-300 p-4 mb-20 mt-4">
        <h2 className="main_text sm:text-2xl flex gap-3 items-center text-[24px]">
          <LiaCommentsSolid /> 2 comments
        </h2>
        {arr.map((v, i) => {
          return (
            <div key={i} className="mt-4">
              <h2>{i + 1}.</h2>
              <div className="bg-white p-4 py-6 ">
                <div className="flex flex-col gap-3 sm:flex-row  text-[18px]">
                  <div className="flex gap-3 items-center ">
                    <span className="text-amber-900">
                      {" "}
                      <HiCalendarDateRange />{" "}
                    </span>{" "}
                    <h3>February 11, 2021</h3>{" "}
                  </div>
                  <div className="flex gap-3 items-center">
                    <span className="text-amber-900">
                      {" "}
                      <FaUser />
                    </span>{" "}
                    <h3>Muhmmad</h3>
                  </div>
                </div>
                <hr className="border-t border-t-slate-200 my-2" />
                <p className="mt-2 md:w-[50%] text-md">
                  Et netus et malesuada fames ac turpis. Consectetur adipiscing
                  elit duis tristique sollicitudin nibh sit amet. Duis ultricies
                  lacus sed turpis tincidunt id aliquet risus feugiat.
                </p>
              </div>
            </div>
          );
        })}

        <div>
          <h2 className="main_text text-3xl mt-10">Leave a comment</h2>
          <div className="flex items-center justify-center flex-col">
            <div className="  gap-4 p-10 d w-full md:flex-row flex flex-col items-center justify-center mx-auto">
              <input
                type="name"
                placeholder="name"
                className="input_style_login mb-4 md:mb-0 md:mr-4"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="input_style_login"
                required
              />
            </div>

            <textarea
              placeholder="Message"
              rows="5"
              required
              className="input_style_login !rounded-lg md:w-[90%] w-[83%] resize-none mb-8 py-4"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end px-8 sm:px-10">
          <button
            type="submit"
            className="  py-2 px-4 rounded-full border-2 cursor-pointer border-amber-400  hover:bg-amber-400  transition mb-8"
          >
            Post Comment
          </button>
        </div>
      </div>
    </>
  );
}

// app/blogs/[blog_id]/page.jsx

import Page_Hero_Banner from "@/Components/Page_Hero_Banner";
import { blogData, food_list } from "@/constants/data";
import Image from "next/image";
import { LiaCommentsSolid } from "react-icons/lia";

import { FaUser } from "react-icons/fa";
import { HiCalendarDateRange } from "react-icons/hi2";
import Border_Btn from "@/Components/Border_Btn";
import Plus from "./Plus";
import Link from "next/link";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  let { product_name } = await params; // Get the blog slug from the URL
  product_name = product_name.replace(/-/g, " ");
  let Food_item = food_list.find((b) => b.name === product_name); // Find the corresponding blog

  if (!Food_item)
    return { title: "Blog Not Found", description: "Page not available" };

  return {
    title: Food_item.title,
  };
}

export default async function Indisual_Blog_Page({ params }) {
  const { product_name } = await params;

  const titleFromSlug = product_name.replace(/-/g, " ");
  const Food_item = food_list.find(
    (item) => item.name.toLowerCase() === titleFromSlug.toLowerCase()
  );

  if (!Food_item) {
    throw new Error("no more bolgs");
  }

  let arr = [1, 2, 3, 4, 5];

  return (
    <>
      <Page_Hero_Banner title={"Product"} para={"All / " + titleFromSlug} />

      <div className="w-full  px-5 py-20">
        {/* main div */}
        <div className="flex   justify-center md:gap-10 md:mx-[10%] flex-col md:flex-row gap-4 my-10 ">
          {/* Div for images */}
          <div>
            {/* for big image */}
            <div className="relative w-[100%] h-[400px]">
              <Image
                src={Food_item.image}
                alt={Food_item.name}
                fill
                className="object-center object-cover"
              />
            </div>
            {/* Small images */}
            <div className="flex items-center gap-4 mt-4 justify-center w-full">
              {arr.map((v, i) => {
                return (
                  <div
                    key={i}
                    className=" relative h-[90px] w-[60px] border-2 border-white transition-all duration-500  hover:border-amber-900"
                  >
                    <Image
                      src={"/images/food_1.png"}
                      alt={titleFromSlug}
                      fill
                      className="object-center object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Div for TExt */}
          <div>
            <div>
              <h2 className="main_text mb-4 text-3xl">{Food_item.name}</h2>
              {/* stars or rating */}
              <span className="my-3">Revoiews</span>
              <p className="my-3 text-md">
                Nam tempus turpis at metus scelerisque placerat nulla deumantos
                solicitud felis. Pellentesque diam dolor, elementum etos
                lobortis des mollis ut risus. Sedcus faucibus an sullamcorper
                mattis drostique des commodo pharetras...
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-[50%]">
              <div className="flex items-center justify-between ">
                <h4 className="text-amber-900 font-bold">Prices:</h4>{" "}
                <span>${Food_item.price}</span>
              </div>
              <div className="flex items-center justify-between ">
                <h4 className="text-amber-900 font-bold">Weight:</h4>{" "}
                <span>250 gm</span>
              </div>
              <Plus id={Food_item._id} />
            </div>
            <div className="mt-5 flex gap-3 flex-wrap items-center">
              <Link href={"/cart"}>
                <Border_Btn title={"Add To cart"} />
              </Link>
              <Border_Btn title={"Buy it now"} />
              <Border_Btn title={"View my watchlist"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}




const getUserInfo = () =>{
return new Promise.resolve(setTimeout(() => {
  return {
    "name": "John Doe",
    "age": 30,
    "location": "New York"
  }
}, 2000))
}

const app =  ()=>{
  const userdata = use(getUserInfo())
  return(
    <>
<h1>User Data is here</h1>
<Suspense fallback={<h1>Lodaing///</h1>}>
  <h1>{userdata.name}</h1>
  <h1>{userdata.age}</h1>
  <h1>{userdata.location}</h1>
</Suspense>
    </>
  )
}


import Page_Hero_Banner from "@/Components/Page_Hero_Banner";
import Link from "next/link";
import React from "react";

const Not_Found = () => {
  return (
    <>
      <Page_Hero_Banner title={"4o4 Not Found"} />
      <div className=" p-20 md:p-32">
        <h1 className=" text-3xl md:text-6xl text-amber-900 font-extrabold font-serif mb-10">
          404 Page Not Found
        </h1>
        <p>
          The page you requested does not exist.<Link href={"/"}> Click</Link>{" "}
          here to continue shopping.
        </p>
      </div>
    </>
  );
};

export default Not_Found;

import React from "react";

const Page_Hero_Banner = ({ title, para }) => {
  return (
    <div className="h-[50vh]   w-full before:content-[''] before:absolute before:bg-[url('/images/2.jpg')] before:bg-cover before:w-full before:h-[70%] before:bg-center before:brightness-50 before:-z-10 flex items-center justify-center before:top-0">
      <div className="flex flex-col gap-4 items-center justify-center mx-auto w-full text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold font-serif ">
          {title}
        </h2>
        <p className="">{para ?  "Home / News / " + title : "Home /" + title} </p>
      </div>
    </div>
  );
};

export default Page_Hero_Banner;

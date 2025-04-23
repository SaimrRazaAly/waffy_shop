import React from "react";

const Page_Hero_Banner = ({title,adress}) => {
  return (
    <div className="h-[50vh] w-full">
      <div className="w-full before:top-0 before_Image">
        <div>
            <h2>{title}</h2>
            <p>Home / {adress}</p>
        </div>
      </div>
    </div>
  );
};

export default Page_Hero_Banner;

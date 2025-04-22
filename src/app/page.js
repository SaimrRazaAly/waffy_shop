import Banner from "@/Components/Banner";
import Hero from "@/sections/Hero";
import Offers from "@/sections/Offers";
import Products from "@/sections/Products";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <Banner banner1={true} />
      <Offers row={"row"} />
      <Offers row={"row-reverse"} />
      <Banner/>
    </>
  );
};

export default Home;

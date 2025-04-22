import Banner from "@/Components/Banner";
import Hero from "@/sections/Hero";
import Offers from "@/sections/Offers";
import Products from "@/sections/Products";
import Team from "@/sections/Team";
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
      <Team/>
    </>
  );
};

export default Home;

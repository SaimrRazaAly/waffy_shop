import Banner from "@/Components/Banner";
import Hero from "@/sections/Hero";
import Offers from "@/sections/Offers";
import Premium_Products from "@/sections/Premium_Products";
import Products from "@/sections/Products";
import Team from "@/sections/Team";

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
      <Premium_Products/>
    </>
  );
};

export default Home;

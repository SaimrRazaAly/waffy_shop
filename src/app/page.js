import Banner from "@/Components/Banner";
import Footer from "@/Components/Footer";
import Blog_Post from "@/sections/Blog_Post";
import Hero from "@/sections/Hero";
import Offers from "@/sections/Offers";
import Premium_Products from "@/sections/Premium_Products";
import Products from "@/sections/Products";
import Services from "@/sections/services";
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
      <Blog_Post/>
      <Premium_Products/>
      <Services/>
      <Footer/>
    </>
  );
};

export default Home;

const Hero = () => {
  return (
    <section>
      <div className="relative flex items-center bg-black justify-center min-h-screen w-full overflow-x-hidden bg-[url('/hero.png')] bg-cover bg-center z-[-1] opacity-65">
        {/* Hero text */}
        <div className="text-center text-white">
          <h2 className="text-5xl font-semibold italic font-serif">
            Herbs and Spices
          </h2>

          <h3 className="text-4xl mt-4 text-yellow-500 border-t border-red-500 border-b  ">
            FLAT 10% OFF
          </h3>

          <h3 className="text-2xl mt-2  text-yellow-500">
            USE COUPON: <span className="font-bold text-white">1234</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;

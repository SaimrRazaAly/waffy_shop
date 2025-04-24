import FAQSection from "@/Components/Faq";
import Page_Hero_Banner from "@/Components/Page_Hero_Banner";
import Sec_Heading from "@/Components/Sec_Heading";

const  Faq = () => {
  return (
    <>
      <Page_Hero_Banner title={"FAQ'S"} />
      <div className="py-20 md:px-20 px-10">
        <Sec_Heading
          title={"Frequently Asked Questions"}
          para={"A lot more questions"}
        />
        <div  className="mt-10">

        <FAQSection />
        </div>
      </div>
    </>
  );
};

export default Faq;

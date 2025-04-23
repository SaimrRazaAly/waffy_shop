import Sec_Heading from "@/Components/Sec_Heading";
import Text_Image_Comp from "@/Components/Text_Image_Comp";
import { RiCupFill } from "react-icons/ri";
import Page_Hero_Banner from "@/Components/Page_Hero_Banner";
import { Unique_flavors_data } from "@/constants/data";
const About_Page = () => {
  return (
    <>
      <Page_Hero_Banner title={"About us"} />
      <Text_Image_Comp />

      {/* Unique flavors spices section */}

      <div className="bg-slate-200 px-4 py-8 md:px-5 lg:px-28">
        <Sec_Heading
          title={"Unique flavors spices"}
          para={"Quisque volutpat mattis eros."}
        />
        <div className=" my-14 grid l md:grid-cols-2 grid-cols-1 gap-10 ">
          {/* Looping the data  */}
          {Unique_flavors_data.map((v,i)=>{
            return(
              <div className="flex gap-4" key={v.id}>
              <div className="p-3 bg-amber-400 text-4xl h-[60px] w-[60px] transition-all du">
                {/* icons */}
                <RiCupFill />
              </div>
              <div>
                {/* text */}
                <h2 className="font-extrabold font-serif text-[18px]">
                  {v.title}
                </h2>
                <p>
                  {v.para}
                </p>
              </div>
            </div>
            )
          })}
         
        </div>
      </div>

      {/* A unique blended taste */}

      <div className="my-20">
        <Sec_Heading title={"A unique blended taste"} para={"Pellentesque habitant morbi tristique senectus et netus et male."}/>
        <div>
          <Text_Image_Comp para={false}/>
          <Text_Image_Comp para={false} reverse={false}/>
        </div>
      </div>
    </>
  );
};

export default About_Page;

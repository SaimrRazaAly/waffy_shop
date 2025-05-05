
import Sec_Heading from "@/Components/Sec_Heading";
import Team_Card from "@/Components/Team_Card";
import { Team_data } from "@/constants/data";
import React from "react";

const Team = () => {
  return (
    <section
      className="pt-[100px] pb-[70px] md:px-[70px] "
    >
      <Sec_Heading
        title={"Our Team"}
        para={"Lacus vestibulum sed arcu non sit eru racdi odio euismod."}
      />
      <div className="grid md:mx-[2%] grid-cols-1 gap-[30px] md:grid-cols-2  tlg:mx-[30px] lg:mx-[40px] tlg:grid-cols-4  md:px-0 px-[30px]">
        {Team_data.map((v, i) => {
          return (
            <Team_Card
              name={v.title}
              image={v.image}
              profession={v.profession}
              key={v.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Team;

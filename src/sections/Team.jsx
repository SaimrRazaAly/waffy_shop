
import Sec_Heading from "@/Components/Sec_Heading";
import Team_Card from "@/Components/Team_Card";
import { Team_data } from "@/constants/data";
import React from "react";

const Team = () => {
  return (
    <section
      className="py-5
     md:py-10 md:px-4 px-2"
    >
      <Sec_Heading
        title={"Our Team"}
        para={"Lacus vestibulum sed arcu non sit eru racdi odio euismod."}
      />
      <div className="flex gap-4 mt-10 justify-center items-center flex-wrap mx-auto">
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

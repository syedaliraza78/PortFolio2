import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc/hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((currele) => (
          <div className="w-28 h-28" key={currele.name}>
            <BallCanvas icon={currele.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");

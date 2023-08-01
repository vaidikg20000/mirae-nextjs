import React from "react";
import Image from "next/image";
import classes from "./Section.module.css";

const Section = () => {
  return (
    <div className={classes.section}>
      {/* Content of the section goes here */}
      <div className="flex md:justify-start justify-center items-center" style={{height:'100vh'}}>
        <h1 className={classes.heading}>
          INVEST IN
          <b className={classes.sub_heading}>GLOBAL GROWTH</b>
        </h1>
      </div>
    </div>
  );
};

export default Section;

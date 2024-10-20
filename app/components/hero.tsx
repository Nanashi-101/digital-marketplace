"use client";

import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <React.Fragment>
      <div className="bg-[#ff8e47] absolute hidden sm:block -z-10 rounded-full  sm:w-[7.75rem] sm:h-[7.75rem] sm:left-[3rem] sm:blur[3rem] md:w-[8.75rem] md:h-[8.75rem] md:blur-[4rem] md:left-[8rem] lg:left-[17rem] lg:w-[9.75rem] lg:h-[9.75rem] lg:blur-[4rem] xl:left-[22rem] xl:w-[11.75rem] xl:h-[11.75rem] xl:blur-[6rem] 2xl:left-[65rem]" />
      <div className="max-w-7xl mx-auto text-center varela my-4">
        <h1 className="text-[1.2rem] sm:text-3xl lg:text-5xl font-bold ">
          <span className="first-letter:text-primary">Pixels.</span>{" "}
          <span className="text-primary">Patterns.</span>{" "}
          <span className="first-letter:text-primary">Perfection.</span>
        </h1>
        <h1 className="text-md sm:my-3 sm:text-3xl lg:text-6xl font-bold">
          Find the best{" "}
          <ReactTyped
            strings={["Layouts", "UI Kits", "Icons"]}
            loop
            typeSpeed={100}
            backSpeed={50}
            className="text-primary roboto"
          />{" "}
          from tailwind
        </h1>
        <p className="text-sm lg:text-lg text-muted-foreground mx-auto mt-5 sm:w-[60%] font-normal ">
          ChromaUI is a professional digital marketplace offering premium UI/UX
          components, empowering designers and developers to create seamless,
          visually stunning interfaces with ease.
        </p>
      </div>
    </React.Fragment>
  );
}

export default Hero;

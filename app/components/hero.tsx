"use client";

import React from "react";
import { ReactTyped } from "react-typed";
import * as  motion from "motion/react-client";

function Hero({
  condition,
  tag,
  context,
}: {
  condition: boolean;
  tag?: string;
  context: string;
}) {
  return (
    <React.Fragment>
      {condition && (
        <motion.div
          className="bg-[#ff8e47] absolute hidden sm:block -z-10 rounded-full  sm:max-sm:w-[7.75rem] sm:max-sm:h-[7.75rem] sm:max-sm:left-[3rem] sm:max-sm:blur[3rem] md:w-[8.75rem] md:h-[8.75rem] md:blur-[4rem] md:left-[8rem] lg:left-[17rem] lg:w-[9.75rem] lg:h-[9.75rem] lg:blur-[4rem] xl:left-[22rem] xl:w-[11.75rem] xl:h-[11.75rem] xl:blur-[5rem] 2xl:left-[65rem]"
          initial={{ x:200, opacity: 0 }}
          animate={{ x:0, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.2 }}
        />
      )}
      <div className="max-w-7xl mx-auto text-center roboto-900 font-extrabold my-4">
        {condition && (
          <motion.h1
            className="text-[1.2rem] sm:text-3xl lg:text-4xl xl:text-5xl font-bold "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.3 }}
          >
            <span className="first-letter:text-primary">Pixels.</span>{" "}
            <span className="text-primary">Patterns.</span>{" "}
            <span className="first-letter:text-primary">Perfection.</span>
          </motion.h1>
        )}
        {condition ? (
          <motion.h1
            className="text-md sm:my-3 sm:text-3xl lg:text-5xl xl:text-6xl font-bold"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.3 }}
          >
            Find the best{" "}
            <ReactTyped
              strings={["Layouts", "UI Kits", "Icons"]}
              loop
              typeSpeed={100}
              backSpeed={50}
              className="text-primary roboto"
            />{" "}
            from tailwind
          </motion.h1>
        ) : (
          <h1 className="text-md sm:my-3 sm:text-3xl lg:text-5xl font-bold">
            Find the best{" "}
            <span className="text-primary">
              {tag === "all" ? "Products" : tag}
            </span>{" "}
            from tailwind
          </h1>
        )}

        <motion.p
          className="text-sm lg:text-xl text-muted-foreground mx-auto mt-5 sm:w-[60%] font-normal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.8 }}
        >
          {context}
        </motion.p>
      </div>
    </React.Fragment>
  );
}

export default Hero;

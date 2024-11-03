"use client";

import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

function DevProjectBar() {
  const appearDown = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.889,
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      className="mx-auto w-full bg-primary/90 text-white font-semibold text-xs p-1 sm:text-md text-center rounded-b-xl shadow-md shadow-black/30 drop-shadow-xl"
      variants={appearDown}
      initial="hidden"
      animate="visible"
    >
      <ReactTyped
        strings={[
          "This Project is in Development",
          "Please share your feedback",
          "I am open to collaboration",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
        className="py-2"
      />
    </motion.div>
  );
}

export default DevProjectBar;

"use client";

import React, { ReactElement } from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { CrossIcon, X } from "lucide-react";

type ElementType = HTMLDivElement | null;

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

  const handleCloseBar = () =>{
    const elem: ElementType = document.querySelector<HTMLDivElement>(".dev-project-bar");
    if (elem) {
      elem.style.display = "none";
    }
  }
  return (
    <motion.div
      className="dev-project-bar mx-auto w-full flex items-center justify-center bg-primary/90 text-white font-semibold text-xs px-2 sm:text-md text-center rounded-b-xl shadow-md shadow-black/30 drop-shadow-xl"
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
      {/* <div className="absolute right-8 cursor-pointer" onClick={handleCloseBar}>
        <X size={16}/>
      </div> */}
    </motion.div>
  );
}

export default DevProjectBar;

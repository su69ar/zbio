'use client'

import { motion } from "motion/react";
import { Highlight } from "./ui/hero-highlight";

export default function AboutZbioText() {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className="text-2xl md:text-2xl lg:text-4xl font-bold text-[#1F382B] dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-left  "
    >
      ZBIO is a Complete Ecosystem that Transforms {" "}
      <Highlight className="text-white dark:text-white">
      
      Your Food Waste Into Regenerative Resources
      </Highlight><span className="text-black">.</span>
    </motion.h1>
  )
}
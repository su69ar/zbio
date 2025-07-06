"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export function HeroHighlightText() {
  return (
    <HeroHighlight>

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
        className="text-2xl px-4 md:text-4xl lg:text-4xl font-bold text-black dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white leading-snug">
        Bali’s 
              <span className="text-[#3b5c42] font-bold">Organic Waste </span>
              <span className="text-[#3b5c42] font-bold">
              Crisis
              </span>
            </h2>
        
      </motion.h1>
    </HeroHighlight>
  );
}

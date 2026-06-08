"use client";

import React from "react";
import { motion } from "framer-motion";
import data from "../data/data.json";

// Mapping skills to custom brand colors/styles for premium aesthetics
const skillStyles: Record<string, { color: string; border: string; bg: string }> = {
  "Next.js": {
    color: "text-base-content",
    border: "border-base-content/20",
    bg: "bg-base-200/50",
  },
  React: {
    color: "text-info",
    border: "border-info/20",
    bg: "bg-info/10",
  },
  TypeScript: {
    color: "text-primary",
    border: "border-primary/20",
    bg: "bg-primary/10",
  },
  JavaScript: {
    color: "text-warning",
    border: "border-warning/20",
    bg: "bg-warning/10",
  },
  "Node.js": {
    color: "text-success",
    border: "border-success/20",
    bg: "bg-success/10",
  },
  Express: {
    color: "text-accent",
    border: "border-accent/20",
    bg: "bg-accent/10",
  },
  MongoDB: {
    color: "text-success",
    border: "border-success/20",
    bg: "bg-success/5",
  },
  PostgreSQL: {
    color: "text-info",
    border: "border-info/30",
    bg: "bg-info/5",
  },
  Python: {
    color: "text-warning",
    border: "border-warning/30",
    bg: "bg-warning/5",
  },
  "C++": {
    color: "text-secondary",
    border: "border-secondary/20",
    bg: "bg-secondary/10",
  },
  Git: {
    color: "text-error",
    border: "border-error/20",
    bg: "bg-error/10",
  },
};

export default function Marquee() {
  const skillsList = data.skills;
  // Duplicate skills list to ensure seamless transition/infinite scroll
  const duplicatedSkills = [...skillsList, ...skillsList, ...skillsList, ...skillsList];

  return (
    <div className="w-full py-12 bg-base-200/40 border-y border-base-200/50 overflow-hidden relative">
      {/* Absolute overlay gradients for fading edges */}
      <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-base-100 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-base-100 to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Stack & Technologies</p>
        </div>

        {/* Outer scrolling container */}
        <div className="flex overflow-hidden select-none w-full mask-gradient">
          <motion.div
            className="flex gap-4 shrink-0 pr-4"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
            whileHover={{ transition: { duration: 70 } }} // Optional: Slows down on hover
          >
            {duplicatedSkills.map((skill, index) => {
              const styles = skillStyles[skill.name] || {
                color: "text-base-content",
                border: "border-base-200",
                bg: "bg-base-200/50",
              };
              return (
                <div
                  key={`${skill.name}-${index}`}
                  className={`flex items-center gap-3 px-6 py-4.5 rounded-2xl border ${styles.border} ${styles.bg} shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer`}
                >
                  {/* Stylized placeholder icon */}
                  <span className={`font-bold text-lg ${styles.color}`}>
                    {skill.name === "TypeScript" ? "TS" : 
                     skill.name === "JavaScript" ? "JS" : 
                     skill.name.charAt(0)}
                  </span>
                  <span className="font-extrabold text-base tracking-wide whitespace-nowrap">{skill.name}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

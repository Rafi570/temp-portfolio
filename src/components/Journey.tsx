"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Flag, Rocket, Trophy } from "lucide-react";
import data from "../data/data.json";

type JourneyItem = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  type: "education" | "milestone";
};

const typeConfig = {
  education: {
    icon: GraduationCap,
    color: "secondary",
    label: "Education",
  },
  milestone: {
    icon: Rocket,
    color: "accent",
    label: "Milestone",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function Journey() {
  const educationItems: JourneyItem[] = data.education.map((edu) => ({
    title: edu.degree,
    subtitle: edu.institution,
    period: edu.period,
    description: edu.description,
    type: "education" as const,
  }));

  const milestoneItems: JourneyItem[] = data.journey.map((item) => ({
    title: item.title,
    subtitle: item.subtitle,
    period: item.period,
    description: item.description,
    type: "milestone" as const,
  }));

  const allItems = [...educationItems, ...milestoneItems].sort((a, b) => {
    const yearA = parseInt(a.period.split(/[-\s]/).pop() || "0", 10);
    const yearB = parseInt(b.period.split(/[-\s]/).pop() || "0", 10);
    return yearB - yearA;
  });

  return (
    <section id="journey" className="py-20 bg-base-200/20 relative">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <div className="badge badge-secondary badge-outline gap-2 font-bold px-4 py-3 mx-auto">
            <Flag className="w-4 h-4" />
            Personal Growth
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-base-content/70">
            From academic foundations to key milestones — the path that shaped who I am today.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative"
        >
          {/* Vertical connector line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-secondary/30 to-accent/40 hidden sm:block" />

          <div className="space-y-8">
            {allItems.map((item, idx) => {
              const config = typeConfig[item.type];
              const Icon = config.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={`${item.title}-${item.period}`}
                  variants={stepVariants}
                  className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step indicator — center on desktop */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10 hidden sm:flex">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{
                        background: `color-mix(in srgb, var(--color-${config.color}) 15%, transparent)`,
                        border: `1px solid color-mix(in srgb, var(--color-${config.color}) 30%, transparent)`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: `var(--color-${config.color})` }} />
                    </div>
                  </div>

                  {/* Mobile step indicator */}
                  <div className="flex sm:hidden items-center gap-3 w-full">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `color-mix(in srgb, var(--color-${config.color}) 15%, transparent)`,
                        border: `1px solid color-mix(in srgb, var(--color-${config.color}) 30%, transparent)`,
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: `var(--color-${config.color})` }} />
                    </div>
                    <span className="badge badge-sm badge-outline font-bold">{config.label}</span>
                  </div>

                  {/* Content card */}
                  <div
                    className={`w-full md:w-[calc(50%-2.5rem)] ${
                      isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto md:text-left"
                    } pl-14 sm:pl-0`}
                  >
                    <div className="card bg-base-100/80 backdrop-blur-sm border border-base-200 hover:border-secondary/30 hover:shadow-xl transition-all duration-300 rounded-2xl group">
                      <div className="card-body p-6">
                        <div className={`flex items-center gap-2 mb-1 ${isEven ? "md:justify-end" : ""} hidden sm:flex`}>
                          <span className="badge badge-sm badge-outline font-bold">{config.label}</span>
                          {item.type === "milestone" && (
                            <Trophy className="w-3.5 h-3.5 text-accent opacity-60" />
                          )}
                        </div>
                        <time className="font-mono text-xs font-bold opacity-50">{item.period}</time>
                        <h3 className="text-lg font-black mt-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm font-bold" style={{ color: `var(--color-${config.color})` }}>
                          {item.subtitle}
                        </p>
                        <p className="text-base-content/75 text-sm mt-2 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

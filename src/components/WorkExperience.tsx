"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2 } from "lucide-react";
import data from "../data/data.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function WorkExperience() {
  const experiences = data.experience;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <div className="badge badge-primary badge-outline gap-2 font-bold px-4 py-3 mx-auto">
            <Briefcase className="w-4 h-4" />
            Career
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-base-content/70">
            A timeline of my professional roles, responsibilities, and the impact I&apos;ve made along the way.
          </p>
        </motion.div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
        >
          {experiences.map((exp, idx) => (
            <motion.li key={`${exp.company}-${exp.period}`} variants={itemVariants}>
              {idx > 0 && <hr className="bg-base-300" />}
              <div className="timeline-middle">
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10">
                  <Building2 className="w-4 h-4 text-primary" />
                </div>
              </div>
              <div className="timeline-end mb-10 px-4 md:px-6">
                <div className="card bg-base-200/50 border border-base-200 hover:border-primary/25 hover:shadow-lg transition-all duration-300 rounded-2xl">
                  <div className="card-body p-6">
                    <time className="font-mono text-xs font-bold text-primary uppercase tracking-wider">
                      {exp.period}
                    </time>
                    <h3 className="text-xl font-black mt-1">{exp.role}</h3>
                    <span className="badge badge-primary badge-outline font-bold mt-1">{exp.company}</span>
                    <p className="text-base-content/75 text-sm mt-3 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
              <hr className="bg-base-300" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

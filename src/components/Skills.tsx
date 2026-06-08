"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Server, Database, Code, ShieldCheck, Sparkles } from "lucide-react";
import data from "../data/data.json";

const levelColors: Record<string, string> = {
  Expert: "badge-primary",
  Advanced: "badge-secondary",
  Intermediate: "badge-accent",
};

export default function Skills() {
  const skills = data.skills;
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Frontend", "Backend", "Database", "Programming", "Tools"];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Layout className="w-5 h-5 text-info" />;
      case "Backend":
        return <Server className="w-5 h-5 text-success" />;
      case "Database":
        return <Database className="w-5 h-5 text-accent" />;
      case "Programming":
        return <Code className="w-5 h-5 text-primary" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-secondary" />;
    }
  };

  const filteredSkills =
    activeTab === "All" ? skills : skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
        >
          <div className="badge badge-accent badge-outline gap-2 font-bold px-4 py-3 mx-auto">
            <Sparkles className="w-4 h-4" />
            Tech Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-base-content/70">
            Technologies, frameworks, and tools I use to build robust, scalable digital products.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="tabs tabs-boxed gap-1.5 p-1.5 bg-base-200/80 backdrop-blur-sm rounded-2xl border border-base-300/50">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`tab tab-sm sm:tab-md font-bold rounded-xl transition-all duration-300 ${
                  activeTab === cat ? "bg-primary text-primary-content shadow-md" : "hover:bg-base-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Badge cloud — all skills at a glance */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`badge badge-lg badge-outline font-semibold px-4 py-3 cursor-default hover:badge-primary transition-colors duration-200 ${
                activeTab !== "All" && skill.category !== activeTab ? "opacity-30" : ""
              }`}
            >
              {skill.name}
            </span>
          ))}
        </motion.div>

        {/* Detailed skill cards grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                key={skill.name}
                className="card bg-base-200/40 backdrop-blur-sm border border-base-200 hover:border-primary/25 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group rounded-2xl"
              >
                <div className="card-body p-5 flex flex-row items-center gap-4">
                  <div className="p-3 rounded-xl bg-base-100 shadow-inner group-hover:bg-primary/10 transition-colors">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <h3 className="font-bold text-base leading-none truncate">{skill.name}</h3>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="badge badge-xs badge-ghost font-semibold">{skill.category}</span>
                      <span className={`badge badge-xs ${levelColors[skill.level] ?? "badge-ghost"} font-bold`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

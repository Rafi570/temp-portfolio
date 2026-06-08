"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layout, Server, Database, Code, ShieldCheck } from "lucide-react";
import data from "../data/data.json";

export default function Skills() {
  const skills = data.skills;
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Frontend", "Backend", "Database", "Programming", "Tools"];

  // Helper to match category icon
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
    <section id="skills" className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-base-content/70">
            A comprehensive list of technologies, frameworks, and programming languages I use to build robust digital products.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="tabs tabs-boxed gap-1.5 p-1.5 bg-base-200 rounded-2xl">
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

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              key={skill.name}
              className="card bg-base-200/50 hover:bg-base-200 border border-base-200 hover:border-primary/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group rounded-2xl"
            >
              <div className="card-body p-6 flex flex-row items-center gap-4">
                <div className="p-3.5 rounded-xl bg-base-100 shadow-inner group-hover:bg-primary/10 transition-colors">
                  {getCategoryIcon(skill.category)}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-lg leading-none">{skill.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="badge badge-sm badge-outline opacity-60 font-semibold">{skill.category}</span>
                    <span className="text-xs font-bold text-primary">{skill.level}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import data from "../data/data.json";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const projects = data.projects;
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    activeTab === "All" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-base-200/30">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base-content/70">
            A selection of my recent works ranging from full-stack applications to front-end dashboards and algorithm tools.
          </p>
        </div>

        {/* Filters */}
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

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={project.id}
                className="card bg-base-100 border border-base-200/60 shadow-xl overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-300 rounded-3xl group"
              >
                {/* Image Section with Overlay */}
                <div className="relative aspect-video overflow-hidden bg-base-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-3 w-full justify-end">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-circle btn-primary btn-sm shadow-md"
                        title="View Source Code"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-circle btn-accent btn-sm shadow-md"
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 badge badge-primary font-bold shadow-lg py-3 px-4">
                    <Layers className="w-3.5 h-3.5 mr-1" />
                    {project.category}
                  </span>
                </div>

                {/* Content Section */}
                <div className="card-body p-6 sm:p-8 space-y-4">
                  <h3 className="card-title text-2xl font-extrabold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-base-content/75 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="badge badge-sm badge-secondary/15 text-secondary border-none font-bold py-2.5 px-3 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action links for mobile (always visible) */}
                  <div className="flex md:hidden justify-between items-center pt-4 border-t border-base-200 mt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-bold hover:underline"
                    >
                      <GithubIcon className="w-4 h-4" /> Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

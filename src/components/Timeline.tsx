"use client";

import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import data from "../data/data.json";

export default function Timeline() {
  const experiences = data.experience;
  const educations = data.education;

  return (
    <section id="timeline" className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-base-content/70">
            A chronological timeline of my professional work experience and academic background.
          </p>
        </div>

        {/* Double Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Work Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-base-200 pb-4">
              <span className="p-2 bg-primary/10 text-primary rounded-xl">
                <Briefcase className="w-6 h-6" />
              </span>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              {experiences.map((exp, idx) => (
                <li key={exp.role}>
                  {idx > 0 && <hr className="bg-base-300" />}
                  <div className="timeline-middle">
                    <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                  </div>
                  <div className="timeline-start md:text-end mb-10 px-4 md:px-6">
                    <time className="font-mono text-sm font-bold opacity-60">{exp.period}</time>
                    <h4 className="text-lg font-black mt-1">{exp.role}</h4>
                    <span className="text-primary font-extrabold text-sm">{exp.company}</span>
                    <p className="text-base-content/75 text-sm mt-3 leading-relaxed max-w-md md:ml-auto">
                      {exp.description}
                    </p>
                  </div>
                  <hr className="bg-base-300" />
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-base-200 pb-4">
              <span className="p-2 bg-secondary/10 text-secondary rounded-xl">
                <GraduationCap className="w-6 h-6" />
              </span>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              {educations.map((edu, idx) => (
                <li key={edu.degree}>
                  {idx > 0 && <hr className="bg-base-300" />}
                  <div className="timeline-middle">
                    <div className="w-4 h-4 rounded-full bg-secondary animate-pulse" />
                  </div>
                  <div className="timeline-start md:text-end mb-10 px-4 md:px-6">
                    <time className="font-mono text-sm font-bold opacity-60">{edu.period}</time>
                    <h4 className="text-lg font-black mt-1">{edu.degree}</h4>
                    <span className="text-secondary font-extrabold text-sm">{edu.institution}</span>
                    <p className="text-base-content/75 text-sm mt-3 leading-relaxed max-w-md md:ml-auto">
                      {edu.description}
                    </p>
                  </div>
                  <hr className="bg-base-300" />
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

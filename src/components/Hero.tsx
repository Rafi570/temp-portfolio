"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
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

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);


export default function Hero() {
  const { name, title, subtitle, bio, github, linkedin, twitter, email, avatar } = data.personalInfo;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-base-200/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Content info */}
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="badge badge-primary badge-outline gap-2 font-bold px-4 py-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              Available for Freelance & Remote Work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none"
            >
              Hi, I'm <span className="gradient-text">{name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-bold opacity-80"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-base-content/75 leading-relaxed"
            >
              {bio}
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle btn-md hover:bg-primary/20 hover:text-primary transition-all">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle btn-md hover:bg-primary/20 hover:text-primary transition-all">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href={twitter} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle btn-md hover:bg-primary/20 hover:text-primary transition-all">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href={`mailto:${email}`} className="btn btn-ghost btn-circle btn-md hover:bg-primary/20 hover:text-primary transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Call to action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2"
            >
              <a href="#projects" className="btn btn-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 group">
                View My Projects
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="#contact" className="btn btn-outline border-base-content/20 hover:bg-base-200">
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Avatar side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Spinning or glowing ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse" />
              
              {/* Outer border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary to-accent p-[3px] shadow-2xl">
                {/* Inner image container */}
                <div className="w-full h-full rounded-[21px] overflow-hidden bg-base-100 relative">
                  <img
                    src={avatar}
                    alt={name}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                </div>
              </div>

              {/* Float cards for aesthetic wow factor */}
              <div className="absolute -bottom-4 -left-4 glassmorphism px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2.5 animate-bounce [animation-duration:3s]">
                <div className="w-8 h-8 rounded-lg bg-success flex items-center justify-center font-bold text-success-content text-sm">
                  ✓
                </div>
                <div>
                  <div className="text-xs opacity-60 font-semibold leading-none">Completed</div>
                  <div className="text-sm font-bold leading-none mt-1">20+ Projects</div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 glassmorphism px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2.5 animate-bounce [animation-duration:4s]">
                <div className="w-8 h-8 rounded-lg bg-info flex items-center justify-center font-bold text-info-content text-sm">
                  ★
                </div>
                <div>
                  <div className="text-xs opacity-60 font-semibold leading-none">Experience</div>
                  <div className="text-sm font-bold leading-none mt-1">3+ Years</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

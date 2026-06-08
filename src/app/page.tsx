"use client";

import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience";
import Journey from "../components/Journey";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-base-content antialiased relative">

      <Navbar />

      <main className="flex-grow relative z-0">
        <Hero />
        <Marquee />
        <Skills />
        <Projects />
        <WorkExperience />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

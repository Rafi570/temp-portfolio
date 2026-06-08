"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Palette, Menu, X, Terminal } from "lucide-react";
import data from "../data/data.json";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  const themes = [
    "dark",
    "light",
    "cupcake",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "aqua",
    "nord",
    "sunset",
  ];

  if (!mounted) return null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base-100/80 backdrop-blur-md shadow-lg border-b border-base-200/50 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="navbar p-0 min-h-0 flex justify-between items-center">
          {/* Logo / Brand */}
          <div className="flex-1">
            <a href="#home" className="flex items-center gap-2 font-bold text-xl tracking-wider hover:opacity-90 transition-opacity">
              <span className="p-2 bg-primary text-primary-content rounded-xl shadow-md shadow-primary/20">
                <Terminal className="w-5 h-5" />
              </span>
              <span className="gradient-text font-extrabold">{data.personalInfo.name}</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="menu menu-horizontal px-1 gap-2 font-semibold">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-primary transition-colors focus:bg-transparent hover:bg-base-200/50 px-3 py-2 rounded-lg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Theme Select Dropdown */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <Palette className="w-5 h-5" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-200 rounded-box w-52 max-h-80 overflow-y-auto mt-4"
              >
                <div className="px-3 py-2 text-xs font-bold opacity-60">Select Theme</div>
                {themes.map((t) => (
                  <li key={t}>
                    <button
                      onClick={() => setTheme(t)}
                      className={`capitalize flex justify-between ${
                        theme === t ? "active text-primary-content" : ""
                      }`}
                    >
                      {t}
                      <span className="flex gap-0.5">
                        <span className="w-2 h-4 rounded-full bg-primary" />
                        <span className="w-2 h-4 rounded-full bg-secondary" />
                        <span className="w-2 h-4 rounded-full bg-accent" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex md:hidden items-center gap-2">
            {/* Theme selector in mobile */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm">
                <Palette className="w-5 h-5" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-200 rounded-box w-48 max-h-60 overflow-y-auto mt-4"
              >
                {themes.map((t) => (
                  <li key={t}>
                    <button
                      onClick={() => setTheme(t)}
                      className={`capitalize py-1.5 ${theme === t ? "active" : ""}`}
                    >
                      {t}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn btn-ghost btn-circle btn-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-base-100 border-b border-base-200/50 animate-fadeIn shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg hover:bg-base-200/50 font-semibold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

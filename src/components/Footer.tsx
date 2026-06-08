"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, ArrowUpRight, Heart } from "lucide-react";
import data from "../data/data.json";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const socialLinks = [
  { href: data.personalInfo.github, icon: GithubIcon, label: "GitHub" },
  { href: data.personalInfo.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: data.personalInfo.twitter, icon: TwitterIcon, label: "Twitter" },
];

export default function Footer() {
  const { name, email } = data.personalInfo;
  const { tagline, quickLinks } = data.footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-base-200/60 bg-base-200/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
        >
          {/* Brand column */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2.5 font-bold text-lg tracking-wider group">
              <span className="p-2 bg-primary text-primary-content rounded-xl shadow-md shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                <Terminal className="w-5 h-5" />
              </span>
              <span className="gradient-text font-black">{name}</span>
            </a>
            <p className="text-sm text-base-content/60 leading-relaxed max-w-xs">{tagline}</p>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              {email}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Quick navigation */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-widest opacity-50">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-widest opacity-50">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="btn btn-ghost btn-circle btn-sm border border-base-300 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-xs text-base-content/50">Follow me for updates on projects and tech insights.</p>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="divider my-8 opacity-30" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-base-content/50">
          <p>© {currentYear} {name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-error fill-error" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

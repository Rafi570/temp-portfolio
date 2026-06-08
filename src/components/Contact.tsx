"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import data from "../data/data.json";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

const infoCards = (email: string, phone: string, location: string) => [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: email,
    href: `mailto:${email}`,
    gradient: "from-violet-500 to-indigo-500",
    glow: "shadow-violet-500/20",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: phone,
    href: `tel:${phone}`,
    gradient: "from-sky-500 to-cyan-500",
    glow: "shadow-sky-500/20",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: location,
    href: null,
    gradient: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/20",
  },
];


const socials = [
  { icon: <BsGithub className="w-5 h-5" />, label: "GitHub", href: "#" },
  { icon: <BsLinkedin className="w-5 h-5" />, label: "LinkedIn", href: "#" },
  { icon: <BsTwitterX className="w-5 h-5" />, label: "Twitter", href: "#" },
];

export default function Contact() {
  const { email, phone, location } = data.personalInfo;

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const cards = infoCards(email, phone, location);

  return (
    <section id="contact" className="relative py-28 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        <motion.div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(var(--p)/0.08) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(var(--s)/0.07) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">


        <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest mb-5">
            <Mail className="w-3.5 h-3.5" />
            Contact
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-base-content/60 text-lg leading-relaxed">
            Have a project in mind or want to explore collaboration? I&apos;d love to
            hear from you — drop a message and I&apos;ll get back within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">


          <motion.div {...fadeUp(0.1)} className="lg:col-span-2 space-y-5">

            {/* Info cards */}
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                whileHover={{ x: 6, scale: 1.01 }}
                className="group flex items-center gap-4 p-4 rounded-2xl border border-base-content/8 bg-base-100/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 cursor-default"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${card.gradient} shadow-lg ${card.glow} text-white flex-shrink-0`}>
                  {card.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-0.5">
                    {card.label}
                  </div>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="font-semibold text-sm truncate hover:text-primary transition-colors group-hover:text-primary"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <div className="font-semibold text-sm">{card.value}</div>
                  )}
                </div>
                {card.href && (
                  <ArrowRight className="w-4 h-4 text-base-content/20 group-hover:text-primary ml-auto flex-shrink-0 transition-colors group-hover:translate-x-1 duration-200" />
                )}
              </motion.div>
            ))}

            {/* Divider */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-base-content/15 to-transparent" />
              <span className="text-xs text-base-content/30 uppercase tracking-widest font-semibold">Follow me</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-base-content/15 to-transparent" />
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 rounded-xl border border-base-content/10 bg-base-100/60 backdrop-blur-sm text-base-content/50 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 mt-2"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div>
                <div className="text-xs font-bold text-emerald-500">Available for Work</div>
                <div className="text-[10px] text-base-content/40">Open to freelance & full-time roles</div>
              </div>
            </motion.div>
          </motion.div>

          {/*  Right  Form */}
          <motion.div
            {...fadeUp(0.2)}
            className="lg:col-span-3"
          >
            <div className="relative p-8 rounded-3xl border border-base-content/8 bg-base-100/60 backdrop-blur-md shadow-2xl shadow-black/10 overflow-hidden">

              {/* Inner glow decoration */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-1">Send a Message</h3>
                <p className="text-base-content/50 text-sm mb-8">All fields are required.</p>

                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="relative group">
                      <label
                        htmlFor="contact-name"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none text-base-content/40 ${focused === "name" || formData.name
                            ? "-top-2.5 text-[10px] font-bold text-primary bg-base-100 px-1 rounded"
                            : "top-3.5 text-sm"
                          }`}
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 pt-4 pb-3 bg-base-200/40 border border-base-content/10 rounded-xl text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/10 transition-all duration-200 placeholder-transparent"
                        placeholder="Your Name"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative group">
                      <label
                        htmlFor="contact-email"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none text-base-content/40 ${focused === "email" || formData.email
                            ? "-top-2.5 text-[10px] font-bold text-primary bg-base-100 px-1 rounded"
                            : "top-3.5 text-sm"
                          }`}
                      >
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 pt-4 pb-3 bg-base-200/40 border border-base-content/10 rounded-xl text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/10 transition-all duration-200 placeholder-transparent"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label
                      htmlFor="contact-message"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none text-base-content/40 ${focused === "message" || formData.message
                          ? "-top-2.5 text-[10px] font-bold text-primary bg-base-100 px-1 rounded"
                          : "top-3.5 text-sm"
                        }`}
                    >
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 pt-4 pb-3 bg-base-200/40 border border-base-content/10 rounded-xl text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/10 transition-all duration-200 resize-none placeholder-transparent"
                      placeholder="Your Message"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white
                      bg-gradient-to-r from-primary via-primary to-secondary
                      shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40
                      disabled:opacity-60 disabled:cursor-not-allowed
                      transition-all duration-300 relative overflow-hidden group"
                  >
                    {/* shimmer */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    {loading ? (
                      <span className="loading loading-spinner loading-sm" />
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast*/}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <div className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md shadow-2xl shadow-emerald-500/10">
              <div className="p-2 rounded-full bg-emerald-500/20">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="font-bold text-sm text-emerald-400">Message Sent!</div>
                <div className="text-xs text-base-content/50">I&apos;ll get back to you soon 👋</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

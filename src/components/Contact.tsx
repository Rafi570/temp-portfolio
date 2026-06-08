"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import data from "../data/data.json";

export default function Contact() {
  const { email, phone, location } = data.personalInfo;
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Auto-hide alert after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-base-200/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-base-content/70">
            Have a project in mind or want to explore collaboration opportunities? Drop me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-base-content/75 leading-relaxed">
              Feel free to reach out directly through email, phone, or by submitting the contact form. I typically respond within 24 hours.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 bg-base-100 rounded-2xl border border-base-200">
                <span className="p-3 bg-primary/10 text-primary rounded-xl">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs opacity-60 font-semibold uppercase">Email Me</div>
                  <a href={`mailto:${email}`} className="font-bold hover:text-primary transition-colors">{email}</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-base-100 rounded-2xl border border-base-200">
                <span className="p-3 bg-secondary/10 text-secondary rounded-xl">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs opacity-60 font-semibold uppercase">Call Me</div>
                  <a href={`tel:${phone}`} className="font-bold hover:text-secondary transition-colors">{phone}</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-base-100 rounded-2xl border border-base-200">
                <span className="p-3 bg-accent/10 text-accent rounded-xl">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs opacity-60 font-semibold uppercase">Location</div>
                  <div className="font-bold">{location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-base-100 p-8 rounded-3xl shadow-xl border border-base-200/60">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Your Name</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input input-bordered w-full rounded-xl focus:outline-primary"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Your Email</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input input-bordered w-full rounded-xl focus:outline-primary"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Message</span>
                </label>
                <textarea
                  required
                  placeholder="Hello, I would like to build..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="textarea textarea-bordered h-32 rounded-xl focus:outline-primary"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full shadow-lg shadow-primary/20 rounded-xl"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-1.5" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Floating Success Toast Alert */}
      {submitted && (
        <div className="toast toast-end toast-bottom z-50 p-4 animate-slideIn">
          <div className="alert alert-success shadow-2xl rounded-2xl flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-success-content" />
            <div>
              <h3 className="font-bold text-success-content">Message Sent!</h3>
              <div className="text-xs text-success-content/80">Thank you, I'll get back to you soon.</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

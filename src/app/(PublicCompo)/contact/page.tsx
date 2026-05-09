"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen w-full lg:w-11/12 mx-auto py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl border-l-4 border-primary pl-8 mb-24">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-none">
            Connect <span className="text-primary">With Me</span>
          </h1>
          <p className="text-secondary text-sm md:text-base font-medium mt-6 opacity-60 leading-relaxed uppercase tracking-widest">
            Feel free to reach out for collaborations, opportunities, or just a friendly hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-2">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary">Message Me</h2>
              <p className="text-secondary text-[10px] uppercase tracking-[0.2em] opacity-40">I'll get back to you as soon as possible.</p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white placeholder:text-secondary/20 focus:outline-none focus:border-primary/50 transition-all font-mono text-sm"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white placeholder:text-secondary/20 focus:outline-none focus:border-primary/50 transition-all font-mono text-sm"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Your Message</label>
                <textarea 
                  rows={6}
                  placeholder="How can I help you?"
                  className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-5 text-white placeholder:text-secondary/20 focus:outline-none focus:border-primary/50 transition-all resize-none text-sm leading-relaxed"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white py-6 rounded-sm font-black uppercase tracking-[0.5em] text-xs transition-all duration-500 active:scale-[0.99] border border-primary/50 flex items-center justify-center gap-4 group"
              >
                Send Message <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-16 lg:pl-12"
          >
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-[0.5em] text-primary">Contact Info</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">Email</p>
                      <p className="text-white font-mono text-sm">rijoan@portfolio.dev</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">Location</p>
                      <p className="text-white font-mono text-sm">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.5em] text-primary">Follow Me</h3>
                <div className="flex gap-4">
                  {[
                    { icon: <FaGithub />, link: "#" },
                    { icon: <FaLinkedin />, link: "#" },
                    { icon: <FaTwitter />, link: "#" }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.link}
                      className="w-14 h-14 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-500 shadow-xl"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="relative p-12 border border-white/5 bg-white/[0.02] rounded-sm overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] group-hover:bg-primary/20 transition-colors" />
                <p className="relative z-10 text-[10px] font-mono text-secondary opacity-40 leading-relaxed uppercase tracking-widest">
                  I'm always open to discussing new projects, creative ideas or original concepts to be part of your visions.
                </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

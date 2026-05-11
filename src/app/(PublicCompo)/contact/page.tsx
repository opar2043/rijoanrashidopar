"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheckCircle, FaLaptopCode, FaAppStoreIos } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiMongodb, SiTypescript, SiFramer } from "react-icons/si";
import { toast } from "sonner";

const TechIcon = ({ icon: Icon, name, color }: { icon: any, name: string, color: string }) => (
  <div className="relative group/icon">
    <Icon className={`text-xl text-secondary/55 group-hover/icon:${color} transition-colors cursor-help`} />
    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary/90 backdrop-blur-sm border border-primary/50 px-2 py-1 rounded-sm text-[9px] font-black text-white uppercase tracking-widest whitespace-nowrap opacity-0 group-hover/icon:opacity-100 group-hover/icon:-top-11 transition-all duration-300 pointer-events-none z-20 shadow-xl">
      {name}
    </span>
  </div>
);

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB_FORM || "de8473ac-47a9-419a-917a-1021807f0439");
    formData.append("subject", "New Inquiry from " + formData.get("name"));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Submitted the data. I will contact you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Failed to send data. Please verify your connection.");
      }
    } catch (error) {
      toast.error("Network error. Connection failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="min-h-screen w-full lg:w-11/12 mx-auto py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl border-l-4 border-primary pl-8 mb-16">
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
            Connect <span className="text-primary">With Me</span>
          </h1>
          <p className="text-secondary text-sm md:text-base font-medium mt-6 opacity-75 leading-relaxed uppercase tracking-widest">
            Feel free to reach out for collaborations, opportunities, or just a friendly hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-2">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary">Message Me</h2>
              <p className="text-secondary text-sm uppercase tracking-[0.2em] opacity-75">I'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-[0.2em] text-white/55 ml-1">Your Name</label>
                  <input 
                    name="name"
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white placeholder:text-secondary/20 focus:outline-none focus:border-primary/50 transition-all font-mono text-sm"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-[0.2em] text-white/55 ml-1">Your Email</label>
                  <input 
                    name="email"
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white placeholder:text-secondary/20 focus:outline-none focus:border-primary/50 transition-all font-mono text-sm"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black uppercase tracking-[0.2em] text-white/55 ml-1">Your Message</label>
                <textarea 
                  name="message"
                  required
                  rows={6}
                  placeholder="How can I help you?"
                  className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-5 text-white placeholder:text-secondary/20 focus:outline-none focus:border-primary/50 transition-all resize-none text-sm leading-relaxed"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-hover text-white py-6 rounded-sm font-black uppercase tracking-[0.5em] text-xs transition-all duration-500 active:scale-[0.99] border border-primary/50 flex items-center justify-center gap-4 group disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    Send Message <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Services Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10 lg:pl-12"
          >
            {/* Web Development Service */}
            <div className="flex gap-8 group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-2xl">
                  <FaLaptopCode size={28} />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-white group-hover:text-primary transition-colors">Web development service</h2>
                
                <ul className="space-y-3">
                  {[
                    "Responsive Website Development",
                    "Enterprise Web Applications",
                    "E-commerce Solution Deployment",
                    "High-performance Architecture"
                  ].map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 text-[11px] uppercase tracking-widest opacity-70">
                      <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 pt-2">
                   <p className="text-sm font-black uppercase tracking-[0.2em] text-primary/70">Integrated Tech Stack</p>
                   <div className="flex flex-wrap gap-5">
                      <TechIcon icon={SiReact} name="React" color="text-blue-400" />
                      <TechIcon icon={SiNextdotjs} name="Next.js" color="text-white" />
                      <TechIcon icon={SiTailwindcss} name="Tailwind CSS" color="text-cyan-400" />
                      <TechIcon icon={SiNodedotjs} name="Node.js" color="text-green-500" />
                      <TechIcon icon={SiMongodb} name="MongoDB" color="text-green-400" />
                   </div>
                </div>
              </div>
            </div>

            {/* App Development Service */}
            <div className="flex gap-8 group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-2xl">
                  <FaAppStoreIos size={28} />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-white group-hover:text-primary transition-colors">App development service</h2>
                
                <ul className="space-y-3">
                  {[
                    "Cross-platform App Development",
                    "High Performance App Tools",
                    "iOS & Android Integration",
                    "Modern Mobile UI/UX Design"
                  ].map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 text-[11px] uppercase tracking-widest opacity-70">
                      <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="space-y-4 pt-2">
                   <p className="text-sm font-black uppercase tracking-[0.2em] text-primary/70">Development Ecosystem</p>
                   <div className="flex flex-wrap gap-5">
                      <TechIcon icon={SiReact} name="React Native" color="text-blue-400" />
                      <TechIcon icon={SiTypescript} name="TypeScript" color="text-blue-500" />
                      <TechIcon icon={SiFramer} name="Framer Motion" color="text-pink-500" />
                      <TechIcon icon={SiMongodb} name="MongoDB" color="text-green-400" />
                   </div>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="pt-4 border-t border-white/5">
               <div className="flex items-center gap-4 text-emerald-500">
                  <FaCheckCircle size={16} className="animate-pulse" />
                  <span className="text-sm font-black uppercase tracking-[0.4em]">Ready for new Challenges</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

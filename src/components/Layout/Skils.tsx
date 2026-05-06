"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiTypescript, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiPrisma, 
  SiFirebase, SiSupabase, SiWordpress, SiWoocommerce, SiGit, 
  SiGithub, SiFigma,  SiJsonwebtokens,
  SiGo, SiCplusplus, SiC, SiOpenai
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava, FaDatabase, FaCode } from "react-icons/fa";
import { cn } from "@/lib/utils";

const skillsData = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "React Js", icon: SiReact, color: "text-blue-400" },
  { name: "Next Js", icon: SiNextdotjs, color: "text-white" },
  { name: "Node Js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express Js", icon: SiExpress, color: "text-gray-300" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Wordpress", icon: SiWordpress, color: "text-blue-600" },
  { name: "WooCommerce", icon: SiWoocommerce, color: "text-purple-500" },
  { name: "Prisma ORM", icon: SiPrisma, color: "text-indigo-400" },
  { name: "Postgres", icon: SiPostgresql, color: "text-blue-400" },
  { name: "Jwt", icon: SiJsonwebtokens, color: "text-pink-500" },
  { name: "Typescript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Git & Github", icon: SiGithub, color: "text-gray-200" },
  { name: "Better Auth", icon: SiOpenai, color: "text-amber-500" },
  { name: "GoLang", icon: SiGo, color: "text-cyan-500" },
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "SQL", icon: FaDatabase, color: "text-blue-500" },
  { name: "REST API", icon: FaCode, color: "text-gray-400" },
  { name: "React Native", icon: SiReact, color: "text-blue-300" },
  { name: "C", icon: SiC, color: "text-blue-600" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-700" },
  { name: "Ai Tools", icon: SiOpenai, color: "text-emerald-400" },
  { name: "Figma", icon: SiFigma, color: "text-purple-400" },
  { name: "Vs Code", icon: VscVscode, color: "text-blue-500" },
];

const SkillsGrid = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4"
  >
    {skillsData.map((skill, i) => (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.03 }}
        whileHover={{ y: -5, scale: 1.05 }}
        className="glass-card p-4 rounded-lg flex flex-col items-center justify-center gap-2 border border-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group cursor-default shadow-xl"
      >
        <div className="relative">
          <skill.icon className={cn("text-xl transition-all duration-500 group-hover:scale-110", skill.color)} />
          <div className={cn("absolute inset-0 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500", skill.color.replace('text-', 'bg-'))} />
        </div>
        <span className="text-secondary text-[9px] font-black uppercase tracking-widest text-center group-hover:text-white transition-colors">{skill.name}</span>
      </motion.div>
    ))}
  </motion.div>
);

const SkillsMarquee = () => {
  const row1 = skillsData.slice(0, 14);
  const row2 = skillsData.slice(14);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-12 py-10 overflow-hidden"
    >
      {/* Row 1: Left to Right */}
      <div className="flex w-fit animate-marquee">
        {[...row1, ...row1].map((skill, i) => (
          <div key={i} className="flex items-center gap-3 glass-card px-3 py-3.5 mx-2.5 rounded-lg shadow-lg min-w-[150px] border border-white/5 hover:border-primary/30 transition-all duration-300">
            <skill.icon className={cn("text-lg", skill.color)} />
            <span className="text-secondary font-black uppercase tracking-[2px] text-[11px]">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Row 2: Right to Left (Inverse Marquee) */}
      <div className="flex w-fit animate-marquee-reverse">
        {[...row2, ...row2].map((skill, i) => (
          <div key={i} className="flex items-center gap-3 glass-card px-2 py-3 mx-2.5 rounded-lg shadow-lg min-w-[150px] border border-white/5 hover:border-primary/30 transition-all duration-300">
            <skill.icon className={cn("text-lg", skill.color)} />
            <span className="text-secondary font-black uppercase tracking-[2px] text-[11px]">{skill.name}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
      `}</style>
    </motion.div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("grid");

  return (
    <section id="skills" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="space-y-3 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary text-xs uppercase tracking-[5px] font-black"
            >
              Professional Skills
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tighter"
            >
              MY <span className="text-primary text-glow uppercase">Tech Stack</span>
            </motion.h3>
          </div>

          {/* Tabs */}
          <div className="flex glass p-2 rounded-2xl border border-white/5 shadow-2xl">
            <button
              onClick={() => setActiveTab("grid")}
              className={cn(
                "px-8 py-3 rounded-xl text-xs font-black uppercase tracking-[2px] transition-all duration-500",
                activeTab === "grid" ? "bg-primary text-white shadow-xl shadow-primary/20" : "text-secondary hover:text-white"
              )}
            >
              Grid View
            </button>
            <button
              onClick={() => setActiveTab("marquee")}
              className={cn(
                "px-8 py-3 rounded-xl text-xs font-black uppercase tracking-[2px] transition-all duration-500",
                activeTab === "marquee" ? "bg-primary text-white shadow-xl shadow-primary/20" : "text-secondary hover:text-white"
              )}
            >
              Preference
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "grid" ? (
              <SkillsGrid key="grid" />
            ) : (
              <SkillsMarquee key="marquee" />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;

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
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6"
  >
    {skillsData.map((skill, i) => (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.05 }}
        whileHover={{ y: -5, scale: 1.05 }}
        className="bg-[#1b1d21] border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2 shadow-lg hover:border-[#FF014F]/30 transition-all group"
      >
        <skill.icon className={cn("text-2xl transition-all duration-300 group-hover:drop-shadow-[0_0_8px_currentColor]", skill.color)} />
        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest text-center">{skill.name}</span>
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
          <div key={i} className="flex items-center gap-3 bg-[#1b1d21] border border-white/5 px-6 py-3 rounded-xl mx-3 shadow-lg min-w-[160px]">
            <skill.icon className={cn("text-xl", skill.color)} />
            <span className="text-gray-300 font-bold uppercase tracking-widest text-xs">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Row 2: Right to Left (Inverse Marquee) */}
      <div className="flex w-fit animate-marquee-reverse">
        {[...row2, ...row2].map((skill, i) => (
          <div key={i} className="flex items-center gap-3 bg-[#1b1d21] border border-white/5 px-6 py-3 rounded-xl mx-3 shadow-lg min-w-[160px]">
            <skill.icon className={cn("text-xl", skill.color)} />
            <span className="text-gray-300 font-bold uppercase tracking-widest text-xs">{skill.name}</span>
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
    <section id="skills" className="py-20 bg-[#212428]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="space-y-2 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#FF014F] text-xs uppercase tracking-[5px] font-bold"
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
              MY <span className="text-[#FF014F]">TECH STACK</span>
            </motion.h3>
          </div>

          {/* Tabs */}
          <div className="flex bg-[#1b1d21] p-1.5 rounded-xl border border-white/5 shadow-2xl">
            <button
              onClick={() => setActiveTab("grid")}
              className={cn(
                "px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-[2px] transition-all duration-300",
                activeTab === "grid" ? "bg-[#FF014F] text-white shadow-lg" : "text-gray-400 hover:text-gray-200"
              )}
            >
              Grid View
            </button>
            <button
              onClick={() => setActiveTab("marquee")}
              className={cn(
                "px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-[2px] transition-all duration-300",
                activeTab === "marquee" ? "bg-[#FF014F] text-white shadow-lg" : "text-gray-400 hover:text-gray-200"
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

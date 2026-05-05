"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { 
  FaCode, FaTools, FaLightbulb, FaUserAlt, FaGraduationCap, 
  FaGlobe, FaCalendarAlt, FaMoon, FaFutbol 
} from "react-icons/fa";
import { 
  SiHtml5,  SiTailwindcss, SiReact, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiFirebase, SiSupabase, SiMongodb, 
  SiWordpress, SiWoocommerce, SiPrisma, SiPostgresql, 
  SiJsonwebtokens, SiTypescript, SiGit, SiGithub 
} from "react-icons/si";

const SkillBadge = ({ name, icon: Icon, color }: { name: string, icon: any, color?: string }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.05 }}
    className="flex items-center gap-2 bg-[#1b1d21] border border-white/5 px-4 py-2 rounded-lg shadow-lg hover:shadow-[#FF014F]/10 transition-all group"
  >
    <Icon className={color || "text-gray-400 group-hover:text-[#FF014F] transition-colors"} size={16} />
    <span className="text-gray-300 text-sm font-medium">{name}</span>
  </motion.div>
);

const About = () => {
  const techSkills = [
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
    { name: "Better Auth", icon: FaTools, color: "text-amber-500" },
  ];

  const softSkills = ["Communication", "Fast Learning", "Team Work"];

  return (
    <section id="about" className="py-16 bg-[#212428] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Modern Compact Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-12 border-b border-white/5 pb-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#FF014F] text-xs uppercase tracking-[5px] font-bold mb-2"
            >
              01. Discovery
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black tracking-tighter"
            >
              ABOUT <span className="text-[#FF014F]">ME</span>
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 text-sm md:max-w-xs text-right italic"
          >
            "Turning complex problems into elegant digital solutions."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Bio & Roles */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h4 className="text-2xl md:text-3xl font-bold leading-tight">
                I am a passionate <br />
                <span className="text-[#FF014F] text-4xl md:text-5xl">
                  <Typewriter
                    words={["Fullstack Developer", "WordPress Expert", "Backend Architect"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={1500}
                  />
                </span>
              </h4>
              
              <div className="relative">
                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                  I am a passionate Fullstack Developer (React / Next Js), eager to expand my expertise in 
                  full-stack development. With a strong foundation in web & App development, I am continuously 
                  growing my knowledge and actively making my mark in the IT field.
                </p>
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-[#FF014F] to-transparent rounded-full opacity-50" />
              </div>
            </motion.div>

            {/* Tech Stack Grid */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <FaCode className="text-[#FF014F]" />
                <h5 className="text-sm uppercase tracking-widest font-bold text-gray-300">Technical Skills</h5>
              </div>
              <div className="flex flex-wrap gap-3">
                {techSkills.map((skill, i) => (
                  <SkillBadge key={i} {...skill} />
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                <FaLightbulb className="text-[#FF014F]" />
                <h5 className="text-sm uppercase tracking-widest font-bold text-gray-300">Soft Skills</h5>
              </div>
              <div className="flex flex-wrap gap-4">
                {softSkills.map((skill, i) => (
                  <span key={i} className="px-4 py-1.5 bg-[#FF014F]/10 border border-[#FF014F]/20 text-white text-xs font-bold rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Personal Info & Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Minimalist Profile Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-square md:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden bg-[#1b1d21] border border-white/5 group shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF014F]/10 to-transparent z-10" />
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-800 opacity-20 group-hover:opacity-40 transition-opacity">
                <FaUserAlt size={120} />
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-[#FF014F] text-xs font-bold tracking-[3px] uppercase">Established 2023</p>
              </div>
            </motion.div>

            {/* Quick Info Grid - More Compact */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FaUserAlt, label: "Name", val: "Rijoan Rashid" },
                { icon: FaGlobe, label: "From", val: "Bangladesh" },
                { icon: FaGraduationCap, label: "Study", val: "B.Sc in CS" },
                { icon: FaCalendarAlt, label: "Age", val: "23 Years" },
              ].map((item, i) => (
                <div key={i} className="bg-[#1b1d21] p-4 rounded-xl border border-white/5 hover:border-[#FF014F]/30 transition-colors">
                  <item.icon className="text-[#FF014F] mb-2" size={16} />
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{item.label}</p>
                  <p className="text-xs text-gray-200 font-semibold truncate">{item.val}</p>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

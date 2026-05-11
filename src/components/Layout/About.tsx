"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaCode,
  FaTools,
  FaLightbulb,
  FaUserAlt,
  FaGraduationCap,
  FaGlobe,
  FaCalendarAlt,
  FaMoon,
  FaFutbol,
} from "react-icons/fa";
import {
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiSupabase,
  SiMongodb,
  SiWordpress,
  SiWoocommerce,
  SiPrisma,
  SiPostgresql,
  SiJsonwebtokens,
  SiTypescript,
  SiGit,
  SiGithub,
} from "react-icons/si";

const SkillBadge = ({
  name,
  icon: Icon,
  color,
}: {
  name: string;
  icon: any;
  color?: string;
}) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.05 }}
    className="flex items-center gap-2 bg-white/[0.02] border border-white/5 px-4 py-2 rounded-lg shadow-md hover:shadow-primary/5 transition-all group"
  >
    <Icon
      className={
        color || "text-gray-400 group-hover:text-[#FF014F] transition-colors"
      }
      size={16}
    />
    <span className="text-gray-300 text-sm font-medium">{name}</span>
  </motion.div>
);

const About = () => {
  const birthYear = 2001;
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  const techSkills = [
    { name: "React Js", icon: SiReact, color: "text-blue-400" },
    { name: "Next Js", icon: SiNextdotjs, color: "text-white" },
    { name: "Express Js", icon: SiExpress, color: "text-gray-300" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Prisma ORM", icon: SiPrisma, color: "text-indigo-400" },
    { name: "Postgres", icon: SiPostgresql, color: "text-blue-400" },
    { name: "Typescript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Git & Github", icon: SiGithub, color: "text-gray-200" },
  ];

  const softSkills = ["Communication", "Fast Learning", "Team Work"];

  return (
    <section
      id="about"
      className="py-24 bg-transparent text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Modern Compact Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-16 border-b border-white/10 pb-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-primary text-xs uppercase tracking-[5px] font-bold mb-2"
            >
              01. Discovery
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black tracking-tighter"
            >
              ABOUT <span className="text-primary">ME</span>
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-secondary text-sm md:max-w-xs text-right italic font-medium"
          >
            "Turning complex problems into elegant digital solutions."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Bio & Roles */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h4 className="text-2xl md:text-3xl font-bold leading-tight">
                I am a passionate <br />
                <span className="text-primary text-4xl md:text-5xl font-black">
                  <Typewriter
                    words={[
                      "Fullstack Developer",
                      "WordPress Expert",
                      "Backend Architect",
                    ]}
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
                <p className="text-secondary text-lg md:text-xl leading-relaxed font-medium">
                  I am a passionate Fullstack Developer (React / Next Js), eager
                  to expand my expertise in full-stack development. With a
                  strong foundation in web & App development, I am continuously
                  growing my knowledge and actively making my mark in the IT
                  field.
                </p>
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent rounded-full opacity-50" />
              </div>
            </motion.div>

            {/* Tech Stack Grid */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <FaCode className="text-primary" />
                <h5 className="text-sm uppercase tracking-widest font-bold text-secondary">
                  Technical Skills
                </h5>
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
                <FaLightbulb className="text-primary" />
                <h5 className="text-sm uppercase tracking-widest font-bold text-secondary">
                  Soft Skills
                </h5>
              </div>
              <div className="flex flex-wrap gap-4">
                {softSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-5 py-2 bg-primary/5 border border-primary/10 text-white text-xs font-bold rounded-full shadow-md shadow-primary/2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Personal Info & Cards */}
          <div className="lg:col-span-5 space-y-8">
            {/* Minimalist Profile Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-square md:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden glass-card group shadow-xl"
            >
              <img
                src="https://i.ibb.co.com/tTCK1qPh/oparimg-1.jpg"
                alt="Rijoan Rashid"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Quick Info Grid - More Compact */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: FaUserAlt, label: "Name", val: "Rijoan Rashid" },
                { icon: FaGlobe, label: "From", val: "Bangladesh" },
                { icon: FaGraduationCap, label: "Study", val: "B.Sc in CS" },
                { icon: FaCalendarAlt, label: "Age", val: `${age} Years` },
              ].map((item, i) => (
                <div
                  key={i}
                  className="glass-card p-3 hover:border-primary/40 transition-all group  bg-gradient-to-tr from-primary/10 to-transparent rounded-xl hover:bg-[#FF014F]/25 duration-100"
                >
                  <item.icon
                    className="text-primary mb-2 transition-transform group-hover:scale-110"
                    size={18}
                  />
                  <p className="text-[11px] text-secondary/60 uppercase font-bold tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-white font-bold truncate">
                    {item.val}
                  </p>
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

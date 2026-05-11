"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {FaEnvelope, FaLinkedin, FaTwitter,FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-6 lg:px-12 py-20 bg-transparent overflow-hidden">
      {/* Decorative Background Elements - Subtle Primary Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[100px]" />

      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-16 z-10">
        
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-8 order-2 md:order-1"
        >
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block text-primary text-sm md:text-base font-semibold tracking-[4px] uppercase"
            >
              Welcome to my world
            </motion.span>
            
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Hello, I'm <br />
              <span className="text-primary">Rijoan Rashid Opar</span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-gray-200"
            >
              <span>a</span>
              <span className="text-white relative">
                Fullstack Developer
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary" />
              </span>
            </motion.div>
          </div>

          <p className="text-secondary text-sm md:text-xl leading-relaxed max-w-2xl font-medium">
I'm a passionate Fullstack Developer with strong expertise in both frontend and backend development, specializing in React, Next.js, Node.js, Express.js, and modern web technologies. I enjoy building scalable, user-friendly, and visually appealing applications that deliver seamless digital experiences. Alongside my technical skills, I value communication, teamwork, and continuous learning. As a dedicated CSE student, I constantly improve my knowledge and stay updated with the latest industry trends to grow as a professional software developer.

          </p>

          <div className="flex flex-col xl:flex-row gap-12 pt-8">
            {/* Social Links Section */}
            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-[3px] text-secondary font-bold ">Find me in</h3>
              <div className="flex gap-5">
                {[
                  { Icon: FaEnvelope, href: "mailto:rijoanrashidopar@gmail.com", color: "hover:text-primary" },
                  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/rijoan-rashid-opar/", color: "hover:text-primary" },
                  { Icon: FaGithub, href: "https://github.com/opar2043", color: "hover:text-primary" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -8, backgroundColor: "var(--primary)", color: "#fff" }}
                    className="w-14 h-14 glass-card flex items-center justify-center text-secondary transition-all duration-300 rounded-md"
                  >
                    <social.Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Resume Button Section */}
            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-[3px] text-secondary font-bold">My Resume</h3>
              <motion.a
                href="https://drive.google.com/file/d/14NamTFWQswBPswZG26jgNcrmGdJaubmj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-14 rounded-md px-8 glass-card flex items-center justify-center text-white/90 font-bold uppercase tracking-[2px] text-xs transition-all duration-300 border border-primary/20 hover:border-primary hover:bg-primary/5 active:bg-primary text-center"
              >
                Download CV
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 relative flex justify-center items-center order-1 md:order-2"
        >
          <div className="relative group">
            {/* Main Image Frame with Glassmorphism effect */}
            <div className="relative w-[300px] h-[350px] md:w-[450px] md:h-[500px] glass-card overflow-hidden border border-white/10 flex items-center justify-center p-4">
              
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image 
                  src={'https://i.ibb.co.com/0RRRHY6p/opar2.jpg'}
                  alt="Hero Image"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -z-10" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLock, FaGithub, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function PrivateRepoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white/3 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center space-y-8 shadow-2xl relative overflow-hidden"
      >
        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />

        <div className="relative inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-4">
          <FaLock className="text-primary text-4xl" />
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border border-primary/20"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-black text-white uppercase tracking-tight">
            Private <span className="text-primary">Repository</span>
          </h1>
          <p className="text-secondary text-sm md:text-base opacity-70 leading-relaxed font-medium">
            This repository is currently private. For security and intellectual property reasons, the source code is not publicly available at this time.
          </p>
        </div>

        <div className="pt-6 space-y-4">
          <Link 
            href="/"
            className="flex items-center justify-center gap-3 w-full bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-[3px] py-4 rounded-xl border border-white/10 transition-all group"
          >
            <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="flex items-center justify-center gap-3 text-secondary/40 text-[10px] uppercase tracking-[3px]">
            <FaGithub size={14} />
            GitHub Protected
          </div>
        </div>
      </motion.div>
    </div>
  );
}

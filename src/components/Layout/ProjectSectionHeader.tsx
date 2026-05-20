"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ProjectSectionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col md:flex-row justify-between items-end gap-6 border-l-4 border-primary pl-8"
    >
      <div className="space-y-4 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight"
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-secondary text-sm font-medium leading-relaxed uppercase tracking-widest"
        >
          Explore some of my latest work and technical solutions developed recently.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        <Link
          href="/projects"
          className="flex items-center gap-4 bg-white/5 hover:bg-primary px-6 py-3.5 rounded-xl text-[11px] md:text-sm font-black uppercase tracking-[0.3em] text-white transition-all duration-300 border border-white/10 hover:border-primary shadow-xl shadow-black/20 group"
        >
          View All Projects
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProjectSectionHeader;

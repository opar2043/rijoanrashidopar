"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLink, FaArrowRight } from "react-icons/fa";
import { PROJECT } from "@/service/type";
import Link from "next/link";

interface ProjectCardProps {
  project: PROJECT;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const projectId = project.id || (project as any)._id;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative bg-[#0E0F12] border border-white/5 rounded-sm overflow-hidden hover:border-primary/40 transition-colors duration-500"
    >
      {/* Full-card click overlay */}
      <Link
        href={`/projects/${projectId}`}
        aria-label={`View ${project.project}`}
        className="absolute inset-0 z-10 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-[-2px]"
      />

      {/* Image — clean, no overlay */}
      <div className="relative overflow-hidden bg-[#0A0A0A] aspect-[16/10]">
        <img
          src={project.photo}
          alt={project.project}
          className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />

        {/* Floating action icons (above click overlay) */}
        <div className="absolute top-3 right-3 flex items-center gap-2 z-20 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-9 h-9 flex items-center justify-center rounded-sm bg-black/70 backdrop-blur-md border border-white/10 text-white/90 hover:bg-primary hover:border-primary hover:text-white transition-all"
              aria-label="View source on GitHub"
            >
              <FaGithub size={14} />
            </a>
          )}
          {project.project_link && (
            <a
              href={project.project_link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-9 h-9 flex items-center justify-center rounded-sm bg-black/70 backdrop-blur-md border border-white/10 text-white/90 hover:bg-primary hover:border-primary hover:text-white transition-all"
              aria-label="Open live preview"
            >
              <FaLink size={12} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative p-5 space-y-3">
        {/* Index + title row */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base md:text-lg font-black text-white group-hover:text-primary transition-colors tracking-tight line-clamp-1 leading-tight">
            {project.project}
          </h3>
          <span className="shrink-0 w-8 h-8 rounded-sm border border-white/10 flex items-center justify-center text-secondary/80 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
            <FaArrowRight size={11} className="group-hover:-rotate-45 transition-transform duration-300" />
          </span>
        </div>

        <p className="text-secondary text-xs leading-relaxed line-clamp-2 opacity-70">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech?.slice(0, 4).map((t, i) => (
            <span
              key={i}
              className="text-[10px] font-bold uppercase tracking-widest text-secondary/90 bg-white/[0.03] px-2 py-1 rounded-sm border border-white/5"
            >
              {t}
            </span>
          ))}
          {project.tech?.length > 4 && (
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2 py-1 rounded-sm border border-primary/10">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Subtle bottom accent line on hover */}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out z-20" />
    </motion.article>
  );
};

export default ProjectCard;

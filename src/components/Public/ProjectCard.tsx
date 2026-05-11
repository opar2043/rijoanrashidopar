"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLink, FaArrowRight } from 'react-icons/fa'
import { PROJECT } from '@/service/type'
import Link from 'next/link'

interface ProjectCardProps {
    project: PROJECT
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const projectId = project.id || (project as any)._id;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-[#0A0A0A] border border-white/5 rounded-sm overflow-hidden hover:border-primary/50 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.photo} 
          alt={project.project} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60" />
        
        {/* Hover Links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <a href={project.github} target="_blank" className="p-3 bg-white/10 backdrop-blur-md rounded-sm hover:bg-primary transition-colors text-white">
              <FaGithub size={18} />
            </a>
          )}
          {project.project_link && (
            <a href={project.project_link} target="_blank" className="p-3 bg-white/10 backdrop-blur-md rounded-sm hover:bg-primary transition-colors text-white">
              <FaLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tech?.slice(0, 3).map((t, i) => (
              <span key={i} className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded-sm border border-primary/10">
                {t}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
            {project.project}
          </h3>
        </div>
        
        <p className="text-secondary text-xs leading-relaxed line-clamp-2 opacity-60">
          {project.description}
        </p>

        <Link 
          href={`/projects/${projectId}`}
          className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-white hover:text-primary transition-colors pt-2"
        >
          View Details <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectCard

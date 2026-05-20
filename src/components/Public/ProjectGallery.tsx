"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { PROJECT } from "@/service/type";

interface ProjectGalleryProps {
  projects: PROJECT[];
  limit?: number;
}

const ProjectGallery = ({ projects, limit }: ProjectGalleryProps) => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Get all unique tech tags for the filter bar
  const categories = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(p => p.tech?.forEach(t => tags.add(t)));
    // Filter to common ones if too many, or just keep top categories
    const topCategories = ["All", "React", "Next js", "Prisma", "Mongo db", "TypeScript", "Express js"];
    return topCategories.filter(cat => cat === "All" || Array.from(tags).some(t => t.toLowerCase().includes(cat.toLowerCase())));
  }, [projects]);

  const filteredAndSortedProjects = useMemo(() => {
    let result = [...projects];

    // Filter
    if (activeFilter !== "All") {
      result = result.filter(p => 
        p.tech?.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()))
      );
    }

    // Sort by tech stack size descending (Best projects first)
    result.sort((a, b) => (b.tech?.length || 0) - (a.tech?.length || 0));

    // Limit if needed
    if (limit) {
      return result.slice(0, limit);
    }
    return result;
  }, [projects, activeFilter, limit]);

  return (
    <div className="space-y-12">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-3 md:gap-5 justify-center md:justify-start">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border ${
              activeFilter === cat
                ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                : "bg-white/5 border-white/5 text-secondary hover:border-primary/40 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredAndSortedProjects.map((project, i) => (
            <motion.div
              layout
              key={project.id || (project as any)._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredAndSortedProjects.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-24 text-center border border-white/5 bg-white/2 rounded-sm"
        >
          <p className="text-secondary text-xs font-black uppercase tracking-[0.5em] opacity-30">
            No projects found for "{activeFilter}"
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectGallery;

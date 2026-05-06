"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaGithub, FaLink, FaImage, FaCode, FaRocket } from "react-icons/fa";

const AddProjects = () => {
  const [projectData, setProjectData] = useState({
    project: "",
    github: "",
    description: "",
    project_link: "",
    plan: "",
    tech: [] as string[],
  });
  const [techInput, setTechInput] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const handleAddTech = () => {
    if (techInput.trim()) {
      setProjectData({
        ...projectData,
        tech: [...projectData.tech, techInput.trim()],
      });
      setTechInput("");
    }
  };

  const removeTech = (index: number) => {
    setProjectData({
      ...projectData,
      tech: projectData.tech.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const myData = {
      name: "Rijoan Rashid Opar",
      project: projectData.project,
      github: projectData.github,
      description: projectData.description,
      project_link: projectData.project_link,
      plan: projectData.plan,
      photo: photoUrl,
      tech: projectData.tech,
    };
    console.log("Submitting Project Data:", myData);
    // Add your API call logic here
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-12 border-l-4 border-blue-600 pl-6">
        <h1 className="text-4xl font-bold text-white uppercase tracking-tight">Project <span className="text-blue-500">Registration</span></h1>
        <p className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mt-2 opacity-70">Add a new technical achievement to the database</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Name */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-500 ml-1">Project Identifier</label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="PROJ-001"
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white placeholder:text-secondary/30 focus:outline-none focus:border-blue-600/50 transition-all duration-300 font-mono text-sm"
                value={projectData.project}
                onChange={(e) => setProjectData({...projectData, project: e.target.value})}
              />
              <FaRocket className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/20 group-focus-within:text-blue-600 transition-colors" />
            </div>
          </div>

          {/* GitHub Link */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-500 ml-1">Source Repository</label>
            <div className="relative group">
              <input 
                type="url" 
                placeholder="https://github.com/archive"
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white placeholder:text-secondary/30 focus:outline-none focus:border-blue-600/50 transition-all duration-300 font-mono text-sm"
                value={projectData.github}
                onChange={(e) => setProjectData({...projectData, github: e.target.value})}
              />
              <FaGithub className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/20 group-focus-within:text-blue-600 transition-colors" />
            </div>
          </div>

          {/* Live Link */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-500 ml-1">Deployment URL</label>
            <div className="relative group">
              <input 
                type="url" 
                placeholder="https://live-deploy.io"
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white placeholder:text-secondary/30 focus:outline-none focus:border-blue-600/50 transition-all duration-300 font-mono text-sm"
                value={projectData.project_link}
                onChange={(e) => setProjectData({...projectData, project_link: e.target.value})}
              />
              <FaLink className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/20 group-focus-within:text-blue-600 transition-colors" />
            </div>
          </div>

          {/* Photo URL */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-500 ml-1">Visual Asset URL</label>
            <div className="relative group">
              <input 
                type="url" 
                placeholder="https://assets.storage.com"
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white placeholder:text-secondary/30 focus:outline-none focus:border-blue-600/50 transition-all duration-300 font-mono text-sm"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
              <FaImage className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/20 group-focus-within:text-blue-600 transition-colors" />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-500 ml-1">Executive Summary</label>
          <textarea 
            rows={5}
            placeholder="Detailed technical breakdown..."
            className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-5 text-white placeholder:text-secondary/30 focus:outline-none focus:border-blue-600/50 transition-all duration-300 resize-none text-sm leading-relaxed"
            value={projectData.description}
            onChange={(e) => setProjectData({...projectData, description: e.target.value})}
          />
        </div>

        {/* Plan / Roadmap */}
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-500 ml-1">Development Roadmap</label>
          <textarea 
            rows={3}
            placeholder="Future iterations and milestones..."
            className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-5 text-white placeholder:text-secondary/30 focus:outline-none focus:border-blue-600/50 transition-all duration-300 resize-none text-sm leading-relaxed"
            value={projectData.plan}
            onChange={(e) => setProjectData({...projectData, plan: e.target.value})}
          />
        </div>

        {/* Tech Stack */}
        <div className="space-y-4">
          <label className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-500 ml-1">Technology Ecosystem</label>
          <div className="flex gap-4">
            <div className="relative flex-1 group">
              <input 
                type="text" 
                placeholder="Add System Node (e.g. Next.js)"
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white placeholder:text-secondary/30 focus:outline-none focus:border-blue-600/50 transition-all duration-300 text-sm"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTech())}
              />
              <FaCode className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/20 group-focus-within:text-blue-600 transition-colors" />
            </div>
            <button 
              type="button"
              onClick={handleAddTech}
              className="bg-blue-700 hover:bg-blue-600 text-white px-10 rounded-sm font-black uppercase tracking-widest text-[10px] transition-all active:scale-95 border border-blue-500/50"
            >
              REGISTER NODE
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {projectData.tech.map((t, index) => (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={index}
                className="flex items-center gap-3 bg-blue-600/5 border border-blue-500/20 px-4 py-2 rounded-sm"
              >
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">{t}</span>
                <button 
                  type="button"
                  onClick={() => removeTech(index)}
                  className="text-blue-400 hover:text-white transition-colors"
                >
                  <FaPlus className="w-2.5 h-2.5 rotate-45" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="pt-10 border-t border-white/5">
          <button 
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-600 text-white py-6 rounded-sm font-black uppercase tracking-[0.5em] text-xs transition-all duration-500 shadow-xl shadow-blue-900/10 active:scale-[0.99] border border-blue-500"
          >
            INITIALIZE PROJECT DEPLOYMENT
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProjects;

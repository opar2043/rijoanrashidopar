"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaPlus, FaGithub, FaLink, FaImage, FaCode, FaRocket } from "react-icons/fa";
import { toast } from "sonner";
import { projectApi } from "@/service/projects";
import api from "@/service/api";
import { PROJECT } from "@/service/type";

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
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  const handleImageUpload = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const toastId = toast.loading("Uploading image...");
    setIsUploading(true);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64Image = reader.result;

      try {
        const res = await api.post("/projects/upload", { image: base64Image });

        if (res.data.secure_url) {
          setPhotoUrl(res.data.secure_url);
          toast.success("Image uploaded successfully", { id: toastId });
        } else {
          throw new Error("Upload failed");
        }
      } catch (error: any) {
        toast.error(error.message || "Failed to upload image", { id: toastId });
      } finally {
        setIsUploading(false);
      }
    };
  };


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

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    const myData = {
      name: "Rijoan Rashid Opar",
      project: projectData.project,
      github: projectData.github,
      description: projectData.description,
      project_link: projectData.project_link,
      plan: projectData.plan || "This is my client project. I do not have any Plan.",
      photo: photoUrl,
      tech: projectData.tech,
    };
    
      const toastId = toast.loading("Creating project...");
     try {
      const res = await projectApi.createProject(myData as PROJECT)
      
      if(res.acknowledged || res.projectId || res.insertedId){
        toast.success("Project created successfully", {
          id: toastId,
        })
        setProjectData({
          project: "",
          github: "",
          description: "",
          project_link: "",
          plan: "",
          tech: [],
        })
        setPhotoUrl("");
        router.refresh();
      } else {
        throw new Error("Failed to create project");
      }

     } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || "Failed to create project";
      toast.error(errorMessage, {
        id: toastId,
      })
     }

  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-12 border-l-4 border-blue-600 pl-6">
        <h1 className="text-4xl font-bold text-white uppercase tracking-tight">Add New <span className="text-blue-500">Project</span></h1>
        <p className="text-secondary text-sm font-bold uppercase tracking-[0.2em] mt-2 opacity-70">Add your latest work to the portfolio</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Name */}
          <div className="space-y-3">
            <label className="text-sm font-black uppercase tracking-[0.15em] text-blue-500 ml-1">Project Name</label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Project Name"
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white placeholder:text-secondary/20 focus:outline-none focus:border-blue-600/50 transition-all duration-300 font-mono text-sm"
                value={projectData.project}
                onChange={(e) => setProjectData({...projectData, project: e.target.value})}
              />
              <FaRocket className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/20 group-focus-within:text-blue-600 transition-colors" />
            </div>
          </div>

          {/* GitHub Link */}
          <div className="space-y-3">
            <label className="text-sm font-black uppercase tracking-[0.15em] text-blue-500 ml-1">GitHub Link</label>
            <div className="relative group">
              <input 
                type="url" 
                placeholder="https://github.com/..."
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white placeholder:text-secondary/20 focus:outline-none focus:border-blue-600/50 transition-all duration-300 font-mono text-sm"
                value={projectData.github}
                onChange={(e) => setProjectData({...projectData, github: e.target.value})}
              />
              <FaGithub className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/20 group-focus-within:text-blue-600 transition-colors" />
            </div>
          </div>

          {/* Live Link */}
          <div className="space-y-3">
            <label className="text-sm font-black uppercase tracking-[0.15em] text-blue-500 ml-1">Live Link</label>
            <div className="relative group">
              <input 
                type="url" 
                placeholder="https://..."
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white placeholder:text-secondary/20 focus:outline-none focus:border-blue-600/50 transition-all duration-300 font-mono text-sm"
                value={projectData.project_link}
                onChange={(e) => setProjectData({...projectData, project_link: e.target.value})}
              />
              <FaLink className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/20 group-focus-within:text-blue-600 transition-colors" />
            </div>
          </div>

          {/* Photo Upload */}
          <div className="space-y-3">
            <label className="text-sm font-black uppercase tracking-[0.15em] text-blue-500 ml-1">Project Image</label>
            <div className="relative group">
              <input 
                type="file" 
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUploading}
                className="hidden"
                id="photo-upload"
              />
              <label 
                htmlFor="photo-upload"
                className={`w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-secondary/40 flex items-center justify-between cursor-pointer hover:border-blue-600/50 transition-all duration-300 font-mono text-sm ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span>{photoUrl ? "Image Uploaded" : isUploading ? "Uploading..." : "Select Project Image"}</span>
                <FaImage className={`w-4 h-4 transition-colors ${photoUrl ? 'text-green-500' : 'text-secondary/20 group-focus-within:text-blue-600'}`} />
              </label>
              {photoUrl && (
                <div className="mt-2 relative w-full h-32 rounded-sm overflow-hidden border border-white/5">
                  <img src={photoUrl} alt="Preview" className="w-full h-full object-cover" />
                  <button 
                    type="button"
                    onClick={() => setPhotoUrl("")}
                    className="absolute top-2 right-2 bg-red-600 p-1 rounded-full text-white hover:bg-red-700 transition-colors"
                  >
                    <FaPlus className="w-3 h-3 rotate-45" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-3">
          <label className="text-sm font-black uppercase tracking-[0.15em] text-blue-500 ml-1">Project Description</label>
          <textarea 
            rows={5}
            placeholder="Tell us about the project..."
            className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-5 text-white placeholder:text-secondary/20 focus:outline-none focus:border-blue-600/50 transition-all duration-300 resize-none text-sm leading-relaxed"
            value={projectData.description}
            onChange={(e) => setProjectData({...projectData, description: e.target.value})}
          />
        </div>

        {/* Plan / Roadmap */}
        <div className="space-y-3">
          <label className="text-sm font-black uppercase tracking-[0.15em] text-blue-500 ml-1">Future Plans</label>
          <textarea 
            rows={3}
            placeholder="What are you planning next?"
            className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-5 text-white placeholder:text-secondary/20 focus:outline-none focus:border-blue-600/50 transition-all duration-300 resize-none text-sm leading-relaxed"
            value={projectData.plan}
            onChange={(e) => setProjectData({...projectData, plan: e.target.value})}
          />
        </div>

        {/* Tech Stack */}
        <div className="space-y-4">
          <label className="text-sm font-black uppercase tracking-[0.15em] text-blue-500 ml-1">Tech Stack</label>
          <div className="flex gap-4">
            <div className="relative flex-1 group">
              <input 
                type="text" 
                placeholder="Add Tech (e.g. Next.js)"
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white placeholder:text-secondary/20 focus:outline-none focus:border-blue-600/50 transition-all duration-300 text-sm"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTech())}
              />
              <FaCode className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/20 group-focus-within:text-blue-600 transition-colors" />
            </div>
            <button 
              type="button"
              onClick={handleAddTech}
              className="bg-blue-700 hover:bg-blue-600 text-white px-10 rounded-sm font-black uppercase tracking-widest text-sm transition-all active:scale-95 border border-blue-500/50"
            >
              ADD TECH
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
                <span className="text-sm font-bold text-blue-400 uppercase tracking-wider">{t}</span>
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
            CREATE PROJECT
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProjects;

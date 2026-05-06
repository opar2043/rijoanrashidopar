"use client";

import React from "react";
import Link from "next/link";
import { FaPlus, FaEdit, FaTrash, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsPage = () => {
  // Mock data - in a real app this would come from an API
  const projects = [
    { id: 1, name: "Portfolio v2", photo: "https://via.placeholder.com/40", project_link: "https://v2.dev" },
    { id: 2, name: "E-Commerce System", photo: "https://via.placeholder.com/40", project_link: "https://shop.dev" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="border-l-4 border-blue-600 pl-6">
          <h1 className="text-3xl font-bold text-white uppercase tracking-tight">Active <span className="text-blue-500">Projects</span></h1>
          <p className="text-secondary text-[10px] font-black uppercase tracking-[0.2em] mt-1 opacity-70">Project Repository Overview</p>
        </div>
        <Link 
          href="/dashboard/projects/add"
          className="flex items-center gap-3 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-sm font-black uppercase tracking-widest text-[10px] transition-all border border-blue-500/50"
        >
          <FaPlus /> Register Project
        </Link>
      </div>

      <div className="bg-[#0A0A0A] border border-white/5 rounded-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="px-6 py-5 text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">Asset</th>
              <th className="px-6 py-5 text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">Identifier</th>
              <th className="px-6 py-5 text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">Deployment</th>
              <th className="px-6 py-5 text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] text-right">Operations</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {projects.map((proj) => (
              <tr key={proj.id} className="hover:bg-white/[0.01] transition-colors group">
                <td className="px-6 py-4">
                  <img src={proj.photo} alt={proj.name} className="w-10 h-10 rounded-sm object-cover border border-white/10" />
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-white uppercase tracking-wider">{proj.name}</span>
                </td>
                <td className="px-6 py-4">
                  <a href={proj.project_link} target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 text-xs font-mono">
                    {proj.project_link} <FaExternalLinkAlt size={10} />
                  </a>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-3">
                    <button className="p-2 text-secondary hover:text-blue-400 transition-colors bg-white/5 rounded-sm">
                      <FaEdit size={14} />
                    </button>
                    <button className="p-2 text-secondary hover:text-red-500 transition-colors bg-white/5 rounded-sm">
                      <FaTrash size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsPage;

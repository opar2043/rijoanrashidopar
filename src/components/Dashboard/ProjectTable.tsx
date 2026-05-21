"use client"

import React from 'react'
import Link from "next/link";
import { FaEdit, FaTrash, FaExternalLinkAlt } from "react-icons/fa";
import { deleteProjectAction } from "@/actions/projectActions";
import { toast } from "sonner";
import { PROJECT } from '@/service/type';

interface ProjectTableProps {
    projects: PROJECT[]
}

const ProjectTable = ({ projects }: ProjectTableProps) => {
    
    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this project?")) return;
        
        const toastId = toast.loading("Deleting project...");
        try {
            const res = await deleteProjectAction(id);
            if (res.success) {
                toast.success("Project deleted successfully", { id: toastId });
            } else {
                throw new Error(res.error);
            }
        } catch (error: any) {
            toast.error(error.message || "Failed to delete project", { id: toastId });
        }
    }

    return (
        <div className="bg-[#0A0A0A] border border-white/5 rounded-sm overflow-hidden overflow-x-auto">
            <table className="w-full text-left min-w-[600px]">
                <thead>
                    <tr className="border-b border-white/5 bg-white/[0.02]">
                        <th className="px-6 py-5 text-sm font-black text-primary uppercase tracking-[0.2em] w-16">#</th>
                        <th className="px-6 py-5 text-sm font-black text-primary uppercase tracking-[0.2em]">Project</th>
                        <th className="px-6 py-5 text-sm font-black text-primary uppercase tracking-[0.2em]">Deployment</th>
                        <th className="px-6 py-5 text-sm font-black text-primary uppercase tracking-[0.2em] text-right">Operations</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {projects.map((proj, index) => (
                        <tr key={proj.id || (proj as any)._id} className="hover:bg-white/[0.01] transition-colors group">
                            <td className="px-6 py-4">
                                <span className="text-sm font-mono font-bold text-primary/80">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-4">
                                    <img src={proj.photo} alt={proj.project} className="w-12 h-12 rounded-sm object-cover border border-white/10" />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-white uppercase tracking-wider">{proj.project}</span>
                                        <span className="text-[10px] text-secondary/60 uppercase tracking-widest">{proj.name || "Rijoan Rashid Opar"}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <a href={proj.project_link} target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 text-xs font-mono">
                                    {proj.project_link} <FaExternalLinkAlt size={10} />
                                </a>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex justify-end gap-3">
                                    <Link 
                                        href={`/dashboard/projects/edit/${proj.id || (proj as any)._id}`}
                                        className="p-2 text-secondary hover:text-blue-400 transition-colors bg-white/5 rounded-sm"
                                    >
                                        <FaEdit size={14} />
                                    </Link>
                                    <button 
                                        onClick={() => handleDelete(proj.id || (proj as any)._id)}
                                        className="p-2 text-secondary hover:text-red-500 transition-colors bg-white/5 rounded-sm"
                                    >
                                        <FaTrash size={14} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProjectTable

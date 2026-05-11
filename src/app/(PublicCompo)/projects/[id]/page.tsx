import { projectApi } from "@/service/projects"
import { FaGithub, FaLink, FaChevronLeft, FaCode, FaRocket, FaInfoCircle } from "react-icons/fa"
import Link from "next/link"

export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = await projectApi.getProjectById(id)
    
    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-white font-mono uppercase tracking-[0.5em] opacity-30 text-xs">Project Not Found</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Navigation */}
                <Link href="/projects" className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.3em] text-primary hover:translate-x-[-4px] transition-transform">
                    <FaChevronLeft size={10} /> Back to Projects
                </Link>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <div className="border-l-4 border-primary pl-8 space-y-4">
                            <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">
                                {project.project}
                            </h1>
                            <div className="flex flex-wrap gap-3">
                                {project.tech?.map((t: string, i: number) => (
                                    <span key={i} className="text-sm font-black uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-sm border border-primary/10">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="text-secondary text-base md:text-lg leading-relaxed opacity-70">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            {project.github && (
                                <a href={project.github} target="_blank" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-sm text-sm font-black uppercase tracking-[0.2em] text-white transition-all border border-white/10">
                                    <FaGithub size={16} /> Source Code
                                </a>
                            )}
                            {project.project_link && (
                                <a href={project.project_link} target="_blank" className="flex items-center gap-3 bg-primary hover:bg-primary-hover px-8 py-4 rounded-sm text-sm font-black uppercase tracking-[0.2em] text-white transition-all border border-primary/50">
                                    <FaLink size={16} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-20 group-hover:opacity-55 transition-opacity" />
                        <img 
                            src={project.photo} 
                            alt={project.project} 
                            className="w-full h-full object-cover rounded-sm border border-white/10 relative z-10 shadow-2xl"
                        />
                    </div>
                </div>

                {/* Detailed Analysis */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-primary">
                            <FaCode size={18} />
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">Project Overview</h3>
                        </div>
                        <p className="text-secondary text-sm leading-relaxed opacity-60">
                            This project was built with a focus on user experience and technical efficiency. It utilizes modern technologies to provide a seamless and performant solution.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-primary">
                            <FaRocket size={18} />
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">Future Plans</h3>
                        </div>
                        <p className="text-secondary text-sm leading-relaxed opacity-60">
                            {project.plan || "I'm currently working on improving the features and performance of this project based on user feedback."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

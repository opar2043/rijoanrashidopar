import { projectApi } from "@/service/projects"
import { FaGithub, FaLink, FaChevronLeft, FaCode, FaRocket, FaLayerGroup } from "react-icons/fa"
import Link from "next/link"

export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = await projectApi.getProjectById(id)

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center px-6">
                <div className="text-center space-y-6">
                    <p className="text-white font-black uppercase tracking-[0.5em] text-xs opacity-30">Project Not Found</p>
                    <Link href="/projects" className="inline-flex items-center gap-2 text-primary text-xs font-black uppercase tracking-[3px] hover:underline">
                        <FaChevronLeft size={10} /> Back to Projects
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-24 pb-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-14">
                {/* Navigation */}
                <Link href="/projects" className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-primary hover:-translate-x-1 transition-transform">
                    <FaChevronLeft size={10} /> Back to Projects
                </Link>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="border-l-4 border-primary pl-8 space-y-5">
                            <p className="text-primary text-[11px] uppercase tracking-[5px] font-black">Case Study</p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
                                {project.project}
                            </h1>
                            <div className="flex flex-wrap gap-2">
                                {project.tech?.map((t: string, i: number) => (
                                    <span key={i} className="text-[11px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="text-secondary text-base md:text-lg leading-relaxed opacity-80 whitespace-pre-wrap">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-3.5 rounded-full text-xs font-black uppercase tracking-[0.2em] text-white transition-all border border-white/10 hover:border-white/20">
                                    <FaGithub size={14} /> Source Code
                                </a>
                            )}
                            {project.project_link && (
                                <a href={project.project_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover px-6 py-3.5 rounded-full text-xs font-black uppercase tracking-[0.2em] text-white transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5">
                                    <FaLink size={12} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="relative group order-1 lg:order-2">
                        <div className="absolute -inset-4 bg-primary/20 blur-[80px] opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
                            <img
                                src={project.photo}
                                alt={project.project}
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Detailed Sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/5">
                    <DetailCard
                        icon={FaCode}
                        label="Project Overview"
                        body="Built with a focus on user experience and technical efficiency, using modern technologies for a seamless and performant solution."
                    />
                    <DetailCard
                        icon={FaLayerGroup}
                        label="Tech Stack"
                        body={project.tech?.join(" · ") || "—"}
                    />
                    <DetailCard
                        icon={FaRocket}
                        label="Future Plans"
                        body={project.plan || "Continuously improving features and performance based on user feedback."}
                    />
                </div>
            </div>
        </div>
    )
}

function DetailCard({
    icon: Icon,
    label,
    body,
}: {
    icon: React.ComponentType<{ size?: number; className?: string }>
    label: string
    body: string
}) {
    return (
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-4 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500">
            <div className="flex items-center gap-3 text-primary">
                <Icon size={18} />
                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-white">{label}</h3>
            </div>
            <p className="text-secondary text-sm leading-relaxed opacity-70">{body}</p>
        </div>
    )
}
